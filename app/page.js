import React from "react";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import AboutSection from "./Components/AboutSection";
import Projects from "./Components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
      <Navbar />
      <div class="container mx-auto px-12 py-4 mt-24">
      
     <HeroSection />
     <AboutSection />
     <Projects />
     </div>
    </main>
  );
}
