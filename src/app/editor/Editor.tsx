'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faPlay,
  faBroom,
  faRotateLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Editor() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 overflow-hidden">
        <section className="w-full md:w-2/5 p-4 overflow-y-auto space-y-4 font-mono text-sm">
          <h2 className="text-xl font-bold">The <code>cp</code> Command</h2>
          <h3 className="font-semibold">Basic Syntax</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
cp [OPTIONS] &lt;source&gt; &lt;destination&gt;
          </pre>
          <h3 className="font-semibold">Examples</h3>
          <pre className="bg-gray-100 dark:bg-gray-800 p-2 rounded">
cp file.txt ../backup/
cp -r dir1 dir2
          </pre>
          <h3 className="font-semibold">Options / Flags</h3>
          <ul className="list-disc ml-5">
            <li><code>-r</code> : copy directories recursively</li>
            <li><code>-i</code> : prompt before overwrite</li>
            <li><code>-v</code> : verbose output</li>
          </ul>
          <div className="mt-6 flex justify-between gap-2">
            <button className="border rounded px-3 py-1">
              <FontAwesomeIcon icon={faArrowLeft} /> BACK
            </button>
            <button className="border rounded px-3 py-1">
              <FontAwesomeIcon icon={faPlay} /> RUN
            </button>
            <button className="border rounded px-3 py-1">
              <FontAwesomeIcon icon={faBroom} /> CLEAR
            </button>
            <button className="border rounded px-3 py-1">
              <FontAwesomeIcon icon={faRotateLeft} /> RESET
            </button>
            <button className="border rounded px-3 py-1">
              NEXT <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </section>
        <section className="w-full md:w-3/5 p-4 grid grid-cols-2 grid-rows-2 gap-4">
          <div className="border rounded">
            <div className="border-b p-1 text-xs font-mono">terminal 1 : cp [OPTIONS] &lt;source&gt; &lt;destination&gt;</div>
            <pre className="h-40 p-2 bg-black text-green-400 font-mono"></pre>
          </div>
          <div className="border rounded">
            <div className="border-b p-1 text-xs font-mono">terminal 2 :</div>
            <pre className="h-40 p-2 bg-black text-green-400 font-mono whitespace-pre-wrap">
Usage: cp [OPTION]... [-T] SOURCE DEST
Copy SOURCE to DEST, or multiple SOURCE(s) to DIRECTORY.
            </pre>
          </div>
          <div className="border rounded">
            <div className="border-b p-1 text-xs font-mono">terminal 3 : &lt;source&gt;</div>
            <pre className="h-40 p-2 bg-black text-green-400 font-mono whitespace-pre-wrap">
bash-sandbox/
next.config.ts
node_modules/
package-lock.json
public/
src/
            </pre>
          </div>
          <div className="border rounded">
            <div className="border-b p-1 text-xs font-mono">terminal 4 : &lt;destination&gt;</div>
            <pre className="h-40 p-2 bg-black text-green-400 font-mono"></pre>
          </div>
        </section>
      </div>
    </div>
  );
}
