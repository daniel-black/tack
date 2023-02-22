import { INITIAL_HSL_COLOR, SHADES } from "@/constants";
import type { HSL, Mode } from "@/types";
import { getHsl } from "@/utils";
import { ShadeColumnContent } from "./shade-column-content";

type ShadeColumnProps = {
  color: HSL;
  index: number;
  mode: Mode;
  select: () => void;
  clear: () => void;
  load: () => void;
};

export const ShadeColumn = ({
  color,
  index,
  mode,
  select,
  clear,
  load
}: ShadeColumnProps) => {
  const shade = SHADES[index];
  const isEditing = mode === 'edit';
  const sectionStyle = color ? { backgroundColor: getHsl(color) } : {};
  
  function handleShadeColumnClick() {
    select();
    load();
  }

  return (
    <section
      className={`py-3 relative w-full h-full cursor-pointer flex justify-center ${color === INITIAL_HSL_COLOR ? 'border border-gray-200 hover:bg-gray-50' : ''} ${isEditing ? 'rounded' : ''} transition-all duration-75`}
      style={sectionStyle}
      onClick={handleShadeColumnClick}
    >
      <ShadeColumnContent
        shade={shade}
        isEditing={isEditing}
        clear={clear}
      />
    </section>
  );
}