"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  { id: 1, title: "RESIDENTIAL", subtitle: "60 CURZON APARTMENT", image: "/img1.jpg" },
  { id: 2, title: "DEVELOPMENT", subtitle: "CHELSEA BARRACKS", image: "/img2.jpg" },
  { id: 3, title: "COMMERCIAL", subtitle: "WIGMORE PRIVATE OFFICE", image: "/img3.jpg" }
];

export default function ProjectSection() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const slides = gsap.utils.toArray('.project-slide');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${slides.length * 250}%`,
        pin: true,
        scrub: 1,
      }
    });

    slides.forEach((slide, i) => {
      const letters = slide.querySelectorAll('.letter-inner');
      const image = slide.querySelector('.project-image');
      const details = slide.querySelector('.project-details');
      const imageInner = slide.querySelector('.image-inner');

      // 0. INITIAL STATE (Ensures text starts hidden/scattered to avoid "flash")
      gsap.set(letters, {
        y: (index) => {
          if (index % 3 === 0) return "0vh";
          if (index % 3 === 2) return "40vh";
          return "80vh";
        },
        opacity: 0
      });

      // 1. CLIP PATH REVEAL (The entire slide reveals from bottom)
      if (i !== 0) {
        tl.fromTo(slide,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 2, ease: "none" },
          `slide-${i}`
        );
        tl.fromTo(imageInner, { scale: 1.2 }, { scale: 1, duration: 2 }, "<");
      }

      // 2. SLOT ANIMATION 
      // i % 3 logic mimics the "random yet structured" look from your video
      tl.fromTo(letters,
        {
          y: (index) => {
            if (index % 3 === 0) return "0vh";
            if (index % 3 === 2) return "40vh";
            return "80vh";
          },
          opacity: 0
        },
        {
          y: "0%",
          opacity: 1,
          stagger: { each: 0.05, from: "start" },
          duration: 1.5,
          ease: "power2.out",
          immediateRender: false // Prevents all slides' letters from showing at once
        },
        i === 0 ? "0" : ">"
      );

      // 3. DETAILS REVEAL
      tl.fromTo(details,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.5"
      );

      // 4. SLIDE OUT (Moving letters up and away)
      if (i < slides.length - 1) {
        tl.to(letters, {
          y: "-150%",
          opacity: 0,
          stagger: 0.02,
          duration: 1,
          ease: "power2.in"
        }, "+=0.5");
      }
    });

  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="w-full bg-[#f8f7f3]">
      {/* SECTION HEADER */}
      <section className="w-full flex flex-col items-center justify-center pt-32 pb-12 text-black bg-[#f8f7f3]">
        <h2 className="text-[18vw] md:text-[10vw] font-serif uppercase leading-[0.9] text-center" style={{ color: 'rgb(0,0,0)' }}>
          Our <br /> Projects
        </h2>
        <p className="max-w-2xl text-center text-base md:text-lg font-light mt-8 px-6" style={{ color: 'rgb(0,0,0)' }}>
          Storytelling through design - a curated selection <br />
          of over 100 projects worldwide.
        </p>
        <button className="group relative mt-10 flex flex-col items-center" style={{ color: 'rgb(0,0,0)' }}>
          <span className="uppercase tracking-[0.4em] text-[10px] font-medium mb-1">View Projects</span>
          <div className="relative w-full h-[1px] overflow-hidden">
             <div className="w-full h-full bg-black transition-transform duration-400 ease-in-out group-hover:translate-x-full" />
             <div className="absolute inset-0 bg-black -translate-x-full transition-transform duration-400 ease-in-out group-hover:translate-x-0" />
          </div>
        </button>
      </section>

      {/* PINNED AREA */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-slide absolute inset-0 w-full h-screen flex flex-col items-center"
            style={{ zIndex: index + 10 }}
          >
            {/* FULL BACKGROUND IMAGE */}
            <div className="project-image absolute inset-0 w-full h-full overflow-hidden">
              <div className="image-inner w-full h-full">
                <img src={project.image} alt="" className="w-full h-full object-cover" />
                {/* Minimal overlay to ensure image is visible */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>

            {/* TYPOGRAPHY - Positioned at top to show "R I N A" immediately */}
            <div className="relative z-20 w-full pt-[15vh] md:pt-[12vh] px-[4vw] md:px-[6vw]">
              <h2 className="flex justify-between w-full text-[14vw] md:text-[12vw] font-serif text-white mix-blend-exclusion leading-none">
                {project.title.split("").map((char, i) => (
                  <span key={i} className="flex-1 flex justify-center h-[18vw] md:h-[22vw]">
                    <span className="letter-inner inline-block will-change-transform">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </span>
                ))}
              </h2>
            </div>

            {/* PROJECT INFO */}
            <div className="project-details absolute bottom-8 right-6 md:bottom-12 md:right-12 text-right text-white z-30">
              <h4 className="text-xl md:text-5xl font-serif mb-2 md:mb-4">{project.subtitle}</h4>
              <button className="border-b border-white pb-1 uppercase tracking-widest text-[10px] md:text-xs hover:opacity-50 transition-opacity">
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}