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
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
        // Mobile Parallax
        gsap.to(heroText.current, {
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      mm.add("(min-width: 768px)", () => {
        // Desktop Parallax
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
      });

      // 3. Image subtle zoom-out effect (all screens)
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
          <video
            ref={heroImage}
            src="/malmar.webm"
            autoPlay
            loop
            muted
            playsInline
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
            {/* Line 1: TIMELESS (TOP) - shifted slightly down for all screens, extra down on Mac/large */}
            <div
              className="text-center pl-8 md:text-left md:pl-16 mt-24 md:mt-32 xl:mt-40 2xl:mt-44"
              style={{
                fontFamily: 'SageNav, sans-serif',
                fontWeight: 400,
                color: "rgb(244, 242, 238)",
                fontSize: "65px",
                lineHeight: "75px",
              }}
            >
              TIMELESS
            </div>

            {/* Line 2: TAILORED (MIDDLE) - tighter spacing */}
            <div
              className="text-center pl-8 md:text-right md:pr-56 lg:pr-240 mt-40 md:mt-8 xl:mt-6 2xl:mt-6"
              style={{
                fontFamily: 'SageNav, sans-serif',
                fontWeight: 400,
                color: "rgb(244, 242, 238)",
                fontSize: "65px",
                lineHeight: "75px",
              }}
            >
              TAILORED
            </div>
            {/* Line 3: SPACES (BOTTOM) - tighter spacing */}
            <div
              className="text-center pl-8 md:text-left md:pl-[20%] lg:pl-[18%] mt-40 md:mt-8 xl:mt-6 2xl:mt-6"
              style={{
                fontFamily: 'SageNav, sans-serif',
                fontWeight: 400,
                color: "rgb(244, 242, 238)",
                fontSize: "65px",
                lineHeight: "75px",
              }}
            >
              SPACES
            </div>
          </h1>
        </div>
      </section>




    </div>
  );
};

export default HeroSection;
