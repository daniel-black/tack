import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

import { INITIAL_SHADES } from './constants';
import type { HSL, Mode } from './types';

export const shadeNameAtom = atom('');
export const modeAtom = atom<Mode>('edit');

// Color Controls
export const hueAtom = atom(240);
export const saturationAtom = atom(75);
export const lightnessAtom = atom(75);

// Shades
export const selectedShadeIndexAtom = atom(0);
export const shadesAtom = atom<HSL[]>(INITIAL_SHADES);

export const codeBlockAtom = atom(false);