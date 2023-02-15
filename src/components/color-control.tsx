import { ColorComponent } from "@/types";

type ColorControlProps = {
  name: ColorComponent;
  min?: number;
  max?: number;
  value: number;
  setValue: (v: number) => void;
  setShadeHSL: () => void;
};

export function ColorControl(props: ColorControlProps) {
  const { name, min = 0, max = 100, value, setValue, setShadeHSL } = props;

  return (
    <div>
      <label htmlFor={name} className="flex items-center space-x-5">
        <span className="w-[86px] text-right capitalize">{name}</span>
        <span className="w-12 text-center font-mono rounded py-0.5 bg-slate-100">{value}{name === 'hue' ? '°' : '%'}</span>
        <input
          id={name}
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={e => {
            setValue(e.currentTarget.valueAsNumber);
            setShadeHSL();
          }}
          className='w-[250px] accent-gray-700'
        />
      </label>
    </div>
  );
}