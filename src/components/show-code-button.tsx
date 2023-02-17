'use client';

import { codeBlockAtom } from "@/state";
import { useAtom } from "jotai";
import { CodeIcon } from "./icons";

export const ShowCodeButton = () => {
  const [showCodeBlock, setShowCodeBlock] = useAtom(codeBlockAtom);

  return (
    <button
      onClick={() => setShowCodeBlock(!showCodeBlock)}
      className="px-3 py-3 rounded bg-gray-700 hover:bg-gray-800 text-gray-50 w-full"
    >
      <div className="flex items-center justify-center space-x-3">
        <CodeIcon isSmall={false} />
        <span className="w-28 text-xl">{showCodeBlock ? 'Hide' : 'Show'} Code</span>
      </div>
    </button>
  );
}
