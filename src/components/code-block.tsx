'use client';

import type { HSL } from "@/types";
import { SHADES } from "@/constants";
import { hslToHex } from "@/utils";
import { useState } from "react";
import { useSetAtom } from 'jotai';
import { codeBlockAtom } from "@/state";
import { CheckSquareIcon, CopyIcon, FileIcon, XIcon } from "./icons";

type CodeBlockProps = {
  shades: HSL[];
  shadeName: string;
}

export function CodeBlock({ shades, shadeName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const setShowCodeBlock = useSetAtom(codeBlockAtom);

  function copyText() {
    const codeText = buildTailwindConfigCodeText(shades, shadeName);
    window?.navigator.clipboard.writeText(codeText);
    setCopied(true);
  }

  return (
    <div className="absolute top-56 min-w-[30%] left-[35%] z-20 shadow-lg rounded-lg bg-gray-700">
      <div className="flex items-center justify-between rounded-t-lg px-3 bg-gray-800 text-gray-400 py-2">
        <span className="flex items-center"><FileIcon /> tailwind.config.js</span>
        <div className="space-x-2 flex items-center">
          <button
            onClick={copyText}
            className='px-2 py-1 rounded bg-gray-200 text-gray-600 hover:bg-gray-50'
          >
            {copied 
              ? <span className="flex items-center space-x-1"><CheckSquareIcon /> Copied</span>
              : <span className="flex items-center space-x-1"><CopyIcon /> Copy</span>
            }
          </button>
          <button
            onClick={() => setShowCodeBlock(false)}
            className='rounded bg-gray-500 text-gray-800 hover:bg-gray-400 py-1 px-1'
          >
            <XIcon />
          </button>
        </div>
      </div>
      <pre className="font-mono px-10 py-5 text-gray-300">
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

function buildTailwindConfigCodeText(shades: HSL[], shadeName: string) {
  let colorString = '';
  
  shades.forEach((shade, index) => {
    const base = `      '${shadeName}-${SHADES[index]}': '${hslToHex(shade)}',${index === shades.length - 1 ? '' : '\n'}`;
    colorString += base;
  });
  

  return (
    `module.exports = {
      theme: {
        colors: {
  ` +
    colorString +
    `
        }
      },
    };`
  );
}
