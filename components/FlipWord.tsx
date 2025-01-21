import React from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { BentoGridThirdDemo } from "./Grid";

export function FlipWordsDemo() {
  const words = ["Better", "Bussiness", "Architecture", "Modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        See my world and manipulate...
      </div>
      <div>
        <BentoGridThirdDemo />
        </div>
    </div>
  );
}
