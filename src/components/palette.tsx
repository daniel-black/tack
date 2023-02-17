import { ShadeColumn } from "./shade-column";

import { hueAtom, lightnessAtom, modeAtom, saturationAtom, selectedShadeIndexAtom, shadesAtom } from '@/state';
import { useAtomValue, useAtom, useSetAtom } from 'jotai';
import { INITIAL_HSL_COLOR } from "@/constants";
import { isSameShade } from "@/utils";
import { SelectedColumnIndicator } from "./selected-column-indicator";

export const Palette = () => {
  const [selectedShadeIndex, setSelectedShadeIndex] = useAtom(selectedShadeIndexAtom);
  const [shades, setShades] = useAtom(shadesAtom);

  const setHue = useSetAtom(hueAtom);
  const setSaturation = useSetAtom(saturationAtom);
  const setLightness = useSetAtom(lightnessAtom);

  const mode = useAtomValue(modeAtom);

  const clearShade = (index: number) => {
    const newShades = [...shades];
    newShades[index] = INITIAL_HSL_COLOR;
    setShades(newShades);
  }

  const loadShade = (index: number) => {
    const selectedShade = shades[index];
    if (isSameShade(selectedShade, INITIAL_HSL_COLOR)) return;
    setHue(selectedShade.h);
    setSaturation(selectedShade.s);
    setLightness(selectedShade.l);
  }

  return (
    <main id="palette" className={`w-screen h-screen flex flex-row ${mode === 'edit' ? 'p-1 space-x-1' : ''}`}>
      {shades.map((shade, index) =>
        <div key={index} className={`w-full h-full relative`}>
          <SelectedColumnIndicator
            selectedShadeIndex={selectedShadeIndex}
            index={index}
          />
          <ShadeColumn
            color={shade}
            index={index}
            // selectedIndex={selectedShadeIndex}
            mode={mode}
            select={() => setSelectedShadeIndex(index)}
            clear={() => clearShade(index)}
            load={() => loadShade(index)}
          />
        </div>
      )}
    </main>
  );
}