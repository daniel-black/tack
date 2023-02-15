'use client';

import { CodeBlock } from "@/components/code-block";
import { Controls } from "@/components/controls";
import { ExportPalette } from "@/components/export-palette";
import { ModeToggle } from "@/components/mode-toggle";
import { Palette } from "@/components/palette";
import { codeBlockAtom, shadeNameAtom, shadesAtom } from "@/state";
import { useAtomValue } from "jotai";

export default function RootPage() {
  const showCodeBlock = useAtomValue(codeBlockAtom);
  const shades = useAtomValue(shadesAtom);
  const shadeName = useAtomValue(shadeNameAtom);

  return (
    <div className={`relative`}>
      {showCodeBlock && <CodeBlock shades={shades} shadeName={shadeName} />}
      <section className="p-5 text-gray-700 flex space-x-10">
        <Controls />
        <div className="w-full flex justify-between items-end">
          <ModeToggle />
          <ExportPalette />
        </div>
      </section>
      <Palette />
    </div>
  );
}