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

  // Specifications from the user
  const bodyTextStyle = {
    fontFamily: 'var(--font-body), "__antiqueLegacy_623eb9", "AntiqueLegacy", serif',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '24px',
  };

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
      const letters = slide.querySelectorAll('.letter');
      const image = slide.querySelector('.project-image');
      const details = slide.querySelector('.project-details');
      const imageInner = slide.querySelector('.image-inner');

      // 1. Full-Screen Image Clip Reveal
      if (i !== 0) {
        tl.fromTo(image,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: "power2.inOut" }
        );
        tl.fromTo(imageInner, { scale: 1.4 }, { scale: 1, duration: 1.5 }, "<");
      }

      // 2. Interlocking Slot Animation
      tl.fromTo(letters,
        {
          y: (index) => {
            if (index % 3 === 0) return "-150%"; // Top plane
            if (index % 3 === 1) return "100%";  // Mid plane
            return "250%";                       // Bottom plane
          },
          opacity: (index) => (index % 3 === 2 ? 0 : 1)
        },
        {
          y: "0%",
          opacity: 1,
          stagger: { each: 0.03, from: "center" },
          duration: 1.5,
          ease: "expo.out"
        },
        i === 0 ? "0" : "-=1.2"
      );

      // 3. Info Reveal
      tl.fromTo(details,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8 },
        "-=0.7"
      );

      // 4. Slide Out
      if (i < slides.length - 1) {
        tl.to(letters, {
          y: "-200%",
          opacity: 0,
          stagger: 0.02,
          duration: 1.2,
          ease: "power2.in"
        }, "+=0.5");
      }
    });

  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="w-full bg-[#f8f7f3]">
      {/* RESTORED HEADER SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-24 md:py-32">
        <h2 className="text-[12vw] md:text-[5.5vw] font-serif leading-tight text-center uppercase tracking-tighter text-black font-normal">
          Our <br /> Projects
        </h2>
        <p className="mt-8 text-center max-w-[280px] md:max-w-md uppercase tracking-[0.2em] text-black/60" style={bodyTextStyle}>
          Storytelling through design - a curated selection of over 100 projects worldwide.
        </p>
        <div className="mt-10 border-b border-black pb-1 uppercase tracking-[0.4em] font-bold cursor-pointer hover:opacity-50 transition-opacity text-black" style={{ ...bodyTextStyle, fontSize: '11px' }}>
          View Projects
        </div>
      </section>

      {/* PINNED CONTAINER */}
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-slide absolute inset-0 w-full h-screen flex flex-col items-center justify-center"
            style={{ zIndex: index + 10 }}
          >
            {/* FULL SCREEN BACKGROUND */}
            <div className="project-image absolute inset-0 w-full h-full overflow-hidden">
              <div className="image-inner w-full h-full">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>

            {/* FULL SCREEN TYPOGRAPHY */}
            <div className="relative z-20 w-full h-full flex items-center px-[2vw]">
              <h2 className="w-full flex justify-between text-[18vw] font-serif text-white pointer-events-none mix-blend-exclusion leading-none tracking-tighter">
                {project.title.split("").map((char, i) => (
                  <div key={i} className="overflow-hidden flex-1 flex justify-center">
                    <span className="letter inline-block">
                      {char === " " ? "\u00A0" : char}
                    </span>
                  </div>
                ))}
              </h2>
            </div>

            {/* PROJECT DETAILS */}
            <div className="project-details absolute bottom-12 right-12 text-right text-white z-30">
              <h4 className="text-2xl md:text-5xl font-serif mb-4 leading-tight">
                {project.subtitle}
              </h4>
              <button className="border-b border-white pb-1 uppercase transition-all hover:opacity-50" style={{ ...bodyTextStyle, color: 'white', borderBottomColor: 'white' }}>
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}