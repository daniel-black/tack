'use client';

import { modeAtom } from '@/state';
import { useAtom } from 'jotai';
import { PaletteIcon, SlidersIcon } from './icons';

export const ModeToggle = () => {
  const [mode, setMode] = useAtom(modeAtom);

  const isEditing = mode === 'edit';

  return (
    <div className='flex w-full'>
      <div className='w-1/2'>
        <label
          htmlFor='edit'
          className={`w-full rounded-l capitalize select-none py-1 cursor-pointer ${isEditing ? 'bg-slate-200' : 'bg-slate-100 hover:bg-slate-300'} flex justify-center items-center space-x-1`}
        >
          <SlidersIcon />
          <span>Edit</span>
        </label>
        <input
          type="radio"
          name='edit'
          id='edit'
          checked={isEditing}
          onChange={() => setMode('edit')}
          className='hidden'
        />
      </div>
      <div className='w-1/2'>
        <label
          htmlFor='view'
          className={`w-full rounded-r capitalize select-none py-1 cursor-pointer ${!isEditing ? 'bg-slate-200' : 'bg-slate-100 hover:bg-slate-300'} flex justify-center items-center space-x-1`}
        >
          <PaletteIcon />
          <span>View</span>
        </label>
        <input
          type="radio"
          name='view'
          id='view'
          checked={!isEditing}
          onChange={() => setMode('view')}
          className='hidden'
        />
      </div>
    </div>
  );
}