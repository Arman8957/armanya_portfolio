"use client";


import { CoverDemo } from "@/components/CoverDemo";
import { HeroBackgroundLinesDemo } from "@/components/Hero";



const Home = () => {
  return (
    <main className="relative  flex justify-center items-center flex-col overflow-hidden">

        <HeroBackgroundLinesDemo />
        <CoverDemo />
    
    </main>
  );
};

export default Home;
