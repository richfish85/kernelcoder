import BashEditor from "../components/BashEditor";

export default function SandboxPage() {
  return (
    <main className="p-4" id="main">
      <h1 className="text-2xl font-bold mb-4">Bash Sandbox</h1>
      <BashEditor />
    </main>
  );
}
