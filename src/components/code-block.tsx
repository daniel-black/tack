'use client';

import { SHADES } from "@/constants";
import type { HSL } from "@/types";
import { hslToHex } from "@/utils";
import { useState } from "react";
import { useSetAtom } from 'jotai';
import { codeBlockAtom } from "@/state";

type CodeBlockProps = {
  shades: HSL[];
  shadeName: string;
}

export function CodeBlock({ shades, shadeName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const setShowCodeBlock = useSetAtom(codeBlockAtom);

  function copyText() {
    window?.navigator.clipboard.writeText('hello world');
    setCopied(true);
  }

  return (
    <div className="absolute top-56 min-w-[30%] left-[35%] z-20 shadow-lg rounded-lg border-2 bg-gray-100">
      <div className="flex items-center justify-between px-3 bg-gray-200 text-gray-500 py-2">
        <span>tailwind.config.js</span>
        <div className="space-x-2 flex items-center">
          <button
            onClick={copyText}
            className='px-3 py-1 rounded bg-emerald-200 text-emerald-600 border border-emerald-400'
          >
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            onClick={() => setShowCodeBlock(false)}
            className='rounded border bg-rose-50 text-red-600 border-rose-400 py-1 px-3'
          >
            X
          </button>
        </div>
      </div>
      <pre className="font-mono px-10 py-5">
        <span>{`module.exports = {\n`}</span>
        <span>{`  theme: {\n`}</span>
        <span>{`    colors: {`}</span>
        {shades.map((shade, index) =>
          <span key={index}>
            {`\n      '${shadeName}-${SHADES[index]}': '${hslToHex(shade)}',`}
          </span>
        )}
        <span>{'\n    },'}</span>
        <span>{'\n  },'}</span>
        <span>{'\n};'}</span>
      </pre>
    </div>
  );
}