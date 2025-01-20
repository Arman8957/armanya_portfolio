import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import {ColourfulText} from "@/components/ui/colourful-text";
import { NavbarDemo } from "./Navbar";


export function HeroBackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col sm:py-4 px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Hi, <br />This is  Md Arman.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
      "Committed to creating <ColourfulText text="responsive, scalable, and high-performance" /> web applications that empower businesses, foster growth, and deliver outstanding user experiences."
      </p>
    
      <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-2 font-sans">
        I am the <ColourfulText text="Full-Stack Developer" /> <br /> you will ever find
      </h1>
  
      <NavbarDemo />
    </BackgroundLines>
  );
}
