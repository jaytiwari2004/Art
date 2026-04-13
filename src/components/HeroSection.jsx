"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import Navbar from "./Navbar";

const HeroSection = ({ isLoading }) => {
  const container = useRef(null);
  const heroText = useRef(null);
  const heroImage = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 767px)", () => {
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

      if (!isLoading) {
        gsap.fromTo(
          ".hero-line",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }
    },
    { scope: container, dependencies: [isLoading] }
  );

  return (
    <div ref={container} className="relative bg-[#f4f1ea] selection:bg-stone-200">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        {/* 🎥 Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={heroImage}
            src="/MMM.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* 🖤 (Optional overlay — keep/remove as needed) */}
        <div className="absolute inset-0 z-[1] bg-black/30" />

        {/* ✨ Hero Text */}
        <div
          ref={heroText}
          className="relative z-10 w-full max-w-[1600px] px-6 md:px-12 select-none"
        >
          <h1
            className="w-full font-serif font-normal tracking-tighter uppercase"
            style={{ color: "rgb(244, 242, 238)" }}
          >

            {/* Line 1 */}
            <div
              className="hero-line text-center w-full mt-16 md:mt-24"
              style={{
                fontFamily: "SageNav, sans-serif",
                fontWeight: 400,
                fontSize: "65px",
                lineHeight: "1",
                wordSpacing: "-0.08em",
              }}
            >
              WE DESIGN Timeless
            </div>

            {/* Line 2 (tight, no gap) */}
            <div
              className="hero-line w-full -mt-2 md:-mt-3 flex justify-center items-center"
              style={{
                fontFamily: "SageNav, sans-serif",
                fontWeight: 400,
                fontSize: "65px",
                lineHeight: "1.2",
                wordSpacing: "-0.08em",
              }}
            >
              <span className="text-center italic">Tailored Spaces</span>
            </div>

          </h1>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;