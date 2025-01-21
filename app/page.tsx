"use client";


import { FloatingDockDemo } from "@/components/Approach";
import { CoverDemo } from "@/components/CoverDemo";
import { AnimatedPinDemo } from "@/components/Experience";
import { FlipWordsDemo } from "@/components/FlipWord";
import { BentoGridThirdDemo } from "@/components/Grid";
import { HeroBackgroundLinesDemo } from "@/components/Hero";



const Home = () => {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden">

      <HeroBackgroundLinesDemo />
      <CoverDemo />
      <FloatingDockDemo />
      {/* <FlipWordsDemo /> */}
      <div >
        <div className="flex justify-center items-center font-bold text-5xl my-5 ">
          <h1 >You can understand <span className="text-sky-400"> about <span className="text-red-600"> me</span></span></h1>
        </div>

        <BentoGridThirdDemo />
      </div>

      <div className="flex justify-between items-center">
        <AnimatedPinDemo />
      </div>





    </main>
  );
};

export default Home;
