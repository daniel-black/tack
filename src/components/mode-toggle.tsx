'use client';

import { MODES } from '@/constants';
import { modeAtom } from '@/state';
import { useAtom } from 'jotai';
import { PaletteIcon, SlidersIcon } from './icons';
import { ModeRadioInput } from './mode-radio-input';

export const ModeToggle = () => {
  const [stateMode, setStateMode] = useAtom(modeAtom);

  return (
    <div className='space-y-1'>
      <p className=''>Mode</p>
      <div className='flex'>
        {MODES.map(m =>
          <ModeRadioInput
            key={m}
            mode={m}
            icon={m === 'edit' ? <SlidersIcon /> : <PaletteIcon />}
            stateMode={stateMode}
            setStateMode={() => setStateMode(m)}
          />
        )}
      </div>
    </div>
  );
}