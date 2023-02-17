import { INITIAL_HSL_COLOR, SHADES } from "@/constants";
import type { HSL, Mode } from "@/types";
import { getHsl, hslToHex } from "@/utils";
import { ChangeEvent, useState } from "react";
import { SettingsIcon } from "./icons";

type ShadeColumnProps = {
  color: HSL;
  index: number;
  selectedIndex: number;
  mode: Mode;
  select: () => void;
  clear: () => void;
  load: () => void;
};

export const ShadeColumn = ({
  color,
  index,
  selectedIndex,
  mode,
  select,
  clear,
  load
}: ShadeColumnProps) => {
  const shade = SHADES[index];
  const isSelected = index === selectedIndex;
  const isEditing = mode === 'edit';

  const sectionStyle = color ? { backgroundColor: getHsl(color) } : {};
  
  function handleShadeColumnClick() {
    select();
    load();
  }

  return (
    <section
      className={`py-3 relative w-full cursor-pointer flex justify-center ${color === INITIAL_HSL_COLOR ? 'border border-gray-200 hover:bg-gray-50' : ''} ${isEditing ? 'rounded' : ''} transition-all duration-75`}
      style={sectionStyle}
      onClick={handleShadeColumnClick}
    >
      {/* {isEditing &&
        <div className="flex flex-col items-center space-y-2">
          <span className="opacity-30 bg-gray-100 border border-gray-300 px-2 rounded select-none font-mono w-fit">{shade}</span>
          <button
            onClick={clear}
            className='text-xs'
          >
            Clear
          </button>
        </div>
      }
      {isSelected && <span className="h-[5px] w-[60%] left-[20%] rounded-full bg-gray-200 border border-gray-300 absolute -top-2.5 z-10" />} */}
      <ShadeColumnContent shade={shade} clear={clear} />
    </section>
  );
}

type ShadeColumnContentProps = {
  shade: string;
  clear: () => void;
};

function ShadeColumnContent({ shade, clear }: ShadeColumnContentProps) {
  const [showSettings, setShowSettings] = useState(false);

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
      <div className={`${showSettings ? 'opacity-30 z-10' : 'opacity-0'} transition-all duration-100 bg-gray-100 border border-gray-300 px-3 py-1.5 rounded select-none font-mono w-fit h-fit`}>
        <button onClick={handleClearClick}>
          Clear
        </button>
      </div>
    </div>
  );
}