import type { Mode } from "@/types";

type ModeRadioInputProps = {
  mode: Mode;
  icon: JSX.Element;
  stateMode: Mode;
  setStateMode: () => void;
}

export const ModeRadioInput = ({ mode, icon, stateMode, setStateMode }: ModeRadioInputProps) => {
  const isChecked = mode === stateMode;
  return (
    <div>
      <label
        htmlFor={mode}
        className={`capitalize select-none px-3 py-1 cursor-pointer ${isChecked ? 'bg-slate-400' : 'bg-slate-200 hover:bg-slate-300'} flex items-center space-x-1`}
      >
        {icon} {mode}
      </label>
      <input
        type="radio"
        name={mode}
        id={mode}
        checked={isChecked}
        onChange={setStateMode}
        className='hidden'
      />
    </div>
  );
}