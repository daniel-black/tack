'use client';

import { CodeBlock } from "@/components/code-block";
import { Controls } from "@/components/controls";
import { ShowCodeButton } from "@/components/show-code-button";
import { ModeToggle } from "@/components/mode-toggle";
import { Palette } from "@/components/palette";
import { codeBlockAtom, shadeNameAtom, shadesAtom } from "@/state";
import { useAtomValue } from "jotai";
import { WindIcon } from "@/components/icons";

export default function RootPage() {
  const showCodeBlock = useAtomValue(codeBlockAtom);
  const shades = useAtomValue(shadesAtom);
  const shadeName = useAtomValue(shadeNameAtom);

  return (
    <div className={`relative`}>
      {showCodeBlock && <CodeBlock shades={shades} shadeName={shadeName} />}
      <section className="p-5 text-gray-700 flex space-x-10">
        <Controls />
        <div className="w-48 space-y-2">
          <ModeToggle />
          <ShowCodeButton />
        </div>
        <div className="w-full">
          <h1 className="font-bold text-xl flex items-center justify-end space-x-1">
            <span>Tack</span>
            <WindIcon isSmall={false} />
          </h1>
          <p className="text-right text-xs italic text-gray-600">by db</p>
        </div>
      </section>
      <Palette />
    </div>
  );
}