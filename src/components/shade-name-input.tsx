'use client';

import { shadeNameAtom } from "@/state";
import { useAtom } from "jotai";

export const ShadeNameInput = () => {
  const [shadeName, setShadeName] = useAtom(shadeNameAtom);

  return (
    <div>
      <label htmlFor="color-name" className="flex items-center space-x-5">
        <span>Color&nbsp;Name</span>
        <input
          id="color-name"
          type="text"
          value={shadeName.toLowerCase()}
          onChange={e => setShadeName(e.target.value.toLowerCase())}
          className='w-full rounded py-1 px-3 outline-none bg-slate-100 font-mono focus:ring'
        />
      </label>
    </div>
  );
}