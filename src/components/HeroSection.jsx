"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Navbar from "./Navbar";

const HeroSection = () => {
  const container = useRef(null);
  const heroText = useRef(null);
  const heroImage = useRef(null);

  useGSAP(
    () => {
      // 2. Text Parallax (Moves up faster than scroll)
      gsap.to(heroText.current, {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3. Image subtle zoom-out effect
      gsap.fromTo(
        heroImage.current,
        { scale: 1.1 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative bg-[#f4f1ea] selection:bg-stone-200">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0">
          <img
            ref={heroImage}
            src="/hero-interior.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-cover brightness-95"
          />
          <div className="absolute inset-0 bg-stone-900/10" /> {/* Subtle warming overlay */}
        </div>

        {/* Hero Content */}
        {/* Hero Content */}
        {/* Hero Content - Synchronized with Navbar Padding */}
        <div ref={heroText} className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 select-none">
          <h1
            className="w-full font-serif font-normal tracking-tighter uppercase"
            style={{ color: 'rgb(244, 242, 238)' }}
          >
            {/* Line 1: Timeless (Exactly aligned with 'Project' link) */}
            <div className="text-7xl md:text-[140px] leading-tight text-left mt-14">
              Timeless
            </div>

            {/* Line 2: TAILORED (Shifted more Left by increasing right-side buffer) */}
            <div className="text-7xl md:text-[140px] leading-tight text-right md:pr-40 lg:pr-80 md:mt-12">
              Tailored
            </div>

            {/* Line 3: SPACES (Shifted further Left with relative offset) */}
            <div className="text-7xl md:text-[140px] leading-tight text-left md:pl-[10%] lg:pl-[25%] md:mt-12">
              Spaces
            </div>
          </h1>
        </div>
      </section>




    </div>
  );
};

export default HeroSection;
