'use client';

import { hueAtom, lightnessAtom, saturationAtom, selectedShadeIndexAtom, shadesAtom } from '@/state';
import { useAtom, useAtomValue } from 'jotai';
import { ColorControl } from './color-control';
import { ShadeNameInput } from './shade-name-input';


export const Controls = () => {
  const [hue, setHue] = useAtom(hueAtom);
  const [saturation, setSaturation] = useAtom(saturationAtom);
  const [lightness, setLightness] = useAtom(lightnessAtom);

  const selectedShadeIndex = useAtomValue(selectedShadeIndexAtom);
  const [shades, setShades] = useAtom(shadesAtom);

  function setShadeHSL() {
    const newShades = [...shades];
    newShades[selectedShadeIndex] = { h: hue, s: saturation, l: lightness };
    setShades(newShades);
  }

  return (
    <section className="space-y-2">
      <ShadeNameInput />
      <ColorControl
        name='hue'
        max={360}
        value={hue}
        setValue={setHue}
        setShadeHSL={setShadeHSL}
      />
      <ColorControl
        name='saturation'
        value={saturation}
        setValue={setSaturation}
        setShadeHSL={setShadeHSL}
      />
      <ColorControl
        name='lightness'
        value={lightness}
        setValue={setLightness}
        setShadeHSL={setShadeHSL}
      />
    </section>
  );
}
