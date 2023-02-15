import { COLOR_COMPONENTS, MODES, SHADES } from "./constants";

export type ColorComponent = typeof COLOR_COMPONENTS[number];
export type ShadeType = typeof SHADES[number];
export type Mode = typeof MODES[number];

export type HSL = { h: number, s: number, l: number };

