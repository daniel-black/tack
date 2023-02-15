import { INITIAL_HSL_COLOR, SHADES } from "@/constants";
import type { HSL, Mode } from "@/types";
import { getHsl, hslToHex } from "@/utils";

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
  console.log({
    hsl: getHsl(color),
    rgb: hslToHex(color)
  });
  const isSelected = index === selectedIndex;
  const isEditing = mode === 'edit';

  const sectionStyle = color ? { backgroundColor: getHsl(color) } : {};
  
  function handleShadeColumnClick() {
    select();
    load();
  }

  return (
    <section
      className={`py-3 text-center relative w-full ${color === INITIAL_HSL_COLOR ? 'border border-gray-200 hover:bg-gray-50' : ''} ${isEditing ? 'rounded' : ''} transition-all duration-75`}
      style={sectionStyle}
      onClick={handleShadeColumnClick}
    >
      {isEditing &&
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
      {isSelected && <span className="h-[5px] w-[60%] left-[20%] rounded-full bg-gray-200 border border-gray-300 absolute -top-2.5 z-10" />}
    </section>
  );
}