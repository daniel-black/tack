import { HSL } from "./types";

export const SHADES = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] as const;
export const COLOR_COMPONENTS = ['hue', 'saturation', 'lightness'] as const;
export const MODES = ['edit', 'view'] as const;

export const INITIAL_HSL_COLOR: HSL = { h: 360, s: 100, l: 100 } as const;
export const INITIAL_SHADES = Array(10).fill(INITIAL_HSL_COLOR);