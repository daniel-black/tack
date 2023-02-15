import { atom } from 'jotai';

import { INITIAL_SHADES } from './constants';
import type { HSL, Mode } from './types';

export const shadeNameAtom = atom('');
export const modeAtom = atom<Mode>('edit');

// Color Controls
export const hueAtom = atom(360);
export const saturationAtom = atom(100);
export const lightnessAtom = atom(100);

// Shades
export const selectedShadeIndexAtom = atom(0);
export const shadesAtom = atom<HSL[]>(INITIAL_SHADES);

export const codeBlockAtom = atom(false);