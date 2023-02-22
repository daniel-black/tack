'use client';

import { supabase } from "@/lib/supabaseClient";
import type { HSL } from "@/types";
import { hslToHex } from "@/utils";
import { SaveIcon } from "./icons";

type SavePaletteButtonProps = {
  shades: HSL[];
  shadeName: string;
}

export const SavePaletteButton = ({ shades, shadeName }: SavePaletteButtonProps) => {
  async function savePalette() {
    // do some error handling some day
    // const { data, error } = 
    await supabase
      .from('color')
      .insert([
        {
          name: shadeName,
          hsl_shades: shades,
          hex_values: shades.map(s => hslToHex(s)) 
        },
      ]);
  }

  return (
    <button
      onClick={savePalette}
      className="text-xl px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 text-blue-50 w-full"
    >
      <div className="flex items-center justify-center space-x-3">
        <SaveIcon isSmall={false} />
        <span>Save Palette</span>
      </div>
    </button>
  );
}
