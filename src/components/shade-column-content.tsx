'use client';

import type { HSL } from "@/types";
import { useState } from "react";
import { SettingsIcon } from "./icons";

type ShadeColumnContentProps = {
  shade: string;
  isEditing: boolean;
  clear: () => void;
};

export function ShadeColumnContent({ shade, isEditing, clear }: ShadeColumnContentProps) {
  const [showSettings, setShowSettings] = useState(false);

  if (!isEditing) return null;

  function toggleSettings(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    e.preventDefault();
    setShowSettings(!showSettings);
  }

  function handleClearClick() {
    clear();
    setShowSettings(false);
  }

  return (
    <div className="space-y-2">
      <div className="z-10 opacity-30 bg-gray-100 border border-gray-300 px-3 py-1.5 rounded select-none font-mono w-fit h-fit flex justify-center flex-wrap gap-2 items-center">
        <span>{shade}</span>
        <button
          className={`w-6 h-6 rounded-full hover:animate-spin hover:bg-gray-400 ${showSettings ? 'bg-gray-400' : ''} duration-750 transition-all ease-in-out`}
          onClick={toggleSettings}
        >
          <SettingsIcon />
        </button>
      </div>
      <div className={`${showSettings ? 'opacity-30 z-10' : 'opacity-0'} transition-all duration-100 bg-gray-100 border border-gray-300 px-3 py-1.5 rounded select-none font-mono text-sm w-fit h-fit`}>
        <button onClick={handleClearClick} className='hover:underline'>
          Clear
        </button>
      </div>
    </div>
  );
}