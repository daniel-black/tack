import { COLOR_COMPONENTS, MODES, SHADES } from "./constants";

export type ColorComponent = typeof COLOR_COMPONENTS[number];
export type ShadeType = typeof SHADES[number];
export type Mode = typeof MODES[number];

export type HSL = { h: number, s: number, l: number };

// SUPABASE COLOR RESPONSE
export type SupabaseColorData = {
  id: number;
  created_at: string;
  hsl_shades: HSL[];
  hex_values: string[];
  name: string;
}

export type Color = {
  id: number;
  createdAt: string;
  hslShades: HSL[];
  hexValues: string[];
  name: string;
}