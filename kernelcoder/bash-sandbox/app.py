from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import subprocess
from datetime import datetime

app = FastAPI()

# Allow frontend requests (adjust origin as needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔒 Forbidden commands list
FORBIDDEN_COMMANDS = [
    'rm', 'shutdown', 'reboot', 'wget', 'curl',
    'mkfs', 'mount', 'umount', ':(){:|:&};:',  # fork bomb
    'dd', 'sudo', 'kill', 'killall', 'pkill',
    'nc', 'ncat', 'telnet', 'ftp', 'scp', 'chmod 777', 'chown',
    '>&', '>', '>>', 'echo >', 'cat >', 'tee', '/dev/sda', '/dev/nvme'
]
# Optional: allow only safe commands
ALLOWED_COMMANDS = [
    'echo', 'ls', 'pwd', 'whoami', 'mkdir', 'touch', 'cat', 'cd', 'clear'
]

# Input format from frontend
class ScriptInput(BaseModel):
    script: str

# Utility: check if forbidden commands exist
def contains_forbidden_command(script: str) -> bool:
    lowered = script.lower()
    return any(cmd in lowered for cmd in FORBIDDEN_COMMANDS)

# Utility: optional logging of user submissions
def log_script(script: str):
    with open("run_log.txt", "a") as log:
        log.write(f"[{datetime.now()}] {script.strip()}\n")

def is_only_using_allowed_commands(script: str) -> bool:
    import shlex
    try:
        tokens = shlex.split(script)  # Safely parse user script
        for token in tokens:
            # Only test first word of each command
            if token in ALLOWED_COMMANDS:
                continue
            elif token.startswith('-') or token.startswith('/'):
                continue
            elif token in [';', '&&', '||', '|']:  # command chaining symbols
                continue
            elif token in ['bash', 'sh']:  # prevent shell nesting
                return False
            elif any(token.startswith(cmd) for cmd in ALLOWED_COMMANDS):
                continue
            else:
                return False
        return True
    except Exception as e:
        return False

# Main API route
@app.post("/run")
def run_script(data: ScriptInput):
    log_script(data.script)

    if contains_forbidden_command(data.script):
        return {
            "stdout": "",
            "stderr": "❌ This command is not allowed for security reasons."
        }

    if not is_only_using_allowed_commands(data.script):
        return {
            "stdout": "",
            "stderr": "🚫 Only specific commands are allowed in this sandbox.\n\nAllowed: echo, ls, pwd, whoami, mkdir, touch, cat, cd, clear"
        }

    try:
        result = subprocess.run(
            ["bash", "-c", data.script],
            capture_output=True,
            text=True,
            timeout=3
        )
        return {
            "stdout": result.stdout,
            "stderr": result.stderr
        }
    except subprocess.TimeoutExpired:
        return {
            "stdout": "",
            "stderr": "⏱️ Execution timed out."
        }
