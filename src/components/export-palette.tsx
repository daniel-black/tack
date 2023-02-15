'use client';

import { codeBlockAtom } from "@/state";
import { useAtom } from "jotai";

export const ExportPalette = () => {
  const [showCodeBlock, setShowCodeBlock] = useAtom(codeBlockAtom);

  return (
    <div>
      <button
        onClick={() => setShowCodeBlock(!showCodeBlock)}
        className="px-3 py-1 rounded bg-emerald-200"
      >
        {showCodeBlock ? 'hide' : 'show'} config code
      </button>
    </div>
  );
}
