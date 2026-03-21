"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ElicyonTextSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imagesRef = useRef(null);

  useGSAP(() => {
    // 1. PINNING THE SECTION
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=200%",
      pin: true,
      pinSpacing: true,
    });

    // 2. TEXT REVEAL: Build the sentence sequentially as the user scrolls
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=150%",
        scrub: 1,
      }
    });

    // Words come at the starting, middle, and last
    tl.fromTo(".part-1", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 })
      .fromTo(".part-2", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "+=0.2")
      .fromTo(".part-3", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, "+=0.2");

    // 3. IMAGE SCROLLING (Full 300vh Strip Cycle)
    gsap.fromTo(imagesRef.current,
      { y: 0 },
      {
        y: "-200vh", // Pull the 300vh strip up by 200vh to show the bottom part
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 1.5,
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-[#f8f7f3] overflow-hidden flex items-center justify-center">

      {/* Background Scrolling Images - Taller container (300vh) for full gallery reveals */}
      <div ref={imagesRef} className="absolute top-0 left-0 w-full h-[300vh] z-0">
        {/* Phase 1: Top View (0-100vh) */}
        <div className="absolute top-[15vh] right-[8%] w-56 h-80 md:w-72 md:h-[450px] shadow-2xl rounded-sm overflow-hidden parallax-img">
          <img src="/img1.jpg" className="w-full h-full object-cover" alt="Interior Details" />
        </div>
        <div className="absolute top-[65vh] left-[8%] w-48 h-72 md:w-64 md:h-96 shadow-2xl rounded-sm overflow-hidden parallax-img">
          <img src="/img3.jpg" className="w-full h-full object-cover" alt="Interior Details" />
        </div>

        {/* Phase 2: Right Cluster Cluster (Same line, balanced proportions) */}
        <div className="absolute top-[135vh] right-[8%] w-56 h-72 md:w-64 md:h-[380px] shadow-2xl rounded-sm overflow-hidden parallax-img">
          <img src="/img2.jpg" className="w-full h-full object-cover" alt="Interior Details" />
        </div>
        <div className="absolute top-[135vh] right-[32%] w-56 h-72 md:w-64 md:h-[380px] shadow-2xl rounded-sm overflow-hidden parallax-img">
          <img src="/img1.jpg" className="w-full h-full object-cover" alt="Interior Details" />
        </div>

        {/* Phase 3: Bottom View (Finishes fully visible with empty space below) */}
        <div className="absolute top-[210vh] left-[5%] w-56 h-72 md:w-64 md:h-[380px] shadow-2xl rounded-sm overflow-hidden parallax-img">
          <img src="/img2.jpg" className="w-full h-full object-cover" alt="Interior Details" />
        </div>
      </div>

      {/* Fixed Text Overlay - The Sentence Builder */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-10 pointer-events-none">
        <h2
          ref={textRef}
          className="text-center max-w-[800px] select-none antialiased"
          style={{
            fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
            fontStyle: 'normal',
            fontWeight: 400,
            color: 'rgb(0, 0, 0)',
            fontSize: '48px',
            lineHeight: '58px',
          }}
        >
          <span className="part-1 inline-block opacity-0">FORGING a NEW LUXURY</span>{" "}
          <span className="part-2 inline-block opacity-0">through CRAFT,</span> <br className="hidden md:block" />
          <span className="part-3 inline-block opacity-0 mt-2">VISION and unrivalled GLOBAL EXPERTISE.</span>
        </h2>
      </div>

      {/* Subtle frame overlay */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-[#f8f7f3] z-20" />
    </div>
  );
};

export default ElicyonTextSection;
