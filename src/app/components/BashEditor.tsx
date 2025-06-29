'use client';

import { useState } from 'react';
import axios from 'axios';

export default function BashEditor() {
  const [script, setScript] = useState('');
  const [output, setOutput] = useState('');

  const runScript = async () => {
    try {
      const res = await axios.post('http://localhost:8000/run', { script });
      const data = res.data as { stdout: string; stderr: string };
      setOutput(data.stdout + data.stderr);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setOutput('Error running script.');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <textarea
        value={script}
        onChange={(e) => setScript(e.target.value)}
        placeholder="#!/bin/bash\necho Hello World"
        className="w-full h-48 border border-gray-400 p-2 font-mono rounded"
      />
      <button
        onClick={runScript}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Run Script
      </button>
      <pre className="mt-4 p-4 bg-black text-green-400 rounded">
        {output}
      </pre>
    </div>
  );
}
