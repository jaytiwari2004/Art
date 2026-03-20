"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: 1, title: "RESIDENTIAL", subtitle: "60 CURZON APARTMENT", image: "/img1.jpg" },
  { id: 2, title: "DEVELOPMENT", subtitle: "CHELSEA BARRACKS", image: "/img2.jpg" },
  { id: 3, title: "KNIGHTSBRIDGE", subtitle: "PRIVATE RESIDENCE", image: "/img3.jpg" }
];

export default function ProjectSection() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-slide');
    
    // Create a MASTER TIMELINE pinned to the container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sections.length * 150}%`,
        pin: true,
        scrub: 1,
      }
    });

    sections.forEach((section, i) => {
      const letters = section.querySelectorAll('.letter');
      const image = section.querySelector('.project-image');
      const details = section.querySelector('.project-details');

      if (i === 0) {
        // Slide 1: Reveal Text
        tl.fromTo(letters, 
          { 
            y: (index) => (index % 2 === 0 ? -200 : 600),
            opacity: 1 
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: "power2.out"
          }
        );
        
        tl.fromTo(details, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, "<+=0.5");
        tl.to({}, { duration: 0.3 }); 
      } else {
        // Subsequent Slides: 
        tl.fromTo(image,
          { clipPath: 'inset(100% 0% 0% 0%)' }, 
          {
            clipPath: 'inset(0% 0% 0% 0%)', 
            duration: 1,
            ease: "power2.inOut"
          }
        );

        tl.fromTo(letters, 
          { 
            y: (index) => (index % 2 === 0 ? -200 : 600),
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 1,
            ease: "power2.out"
          },
          "<+=0.4"
        );

        tl.fromTo(details, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5 }, "<+=0.5");
        tl.to({}, { duration: 0.3 }); 
      }
    });
  }, { scope: wrapperRef });

  return (
    <div ref={wrapperRef} className="w-full">
      <section className="w-full flex items-center justify-center bg-[#f8f7f3] pt-14 md:pt-6 pb-12 md:pb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-[48px] leading-[58px] font-serif font-normal text-black flex flex-col items-start w-fit mx-auto">
            <span>OUR</span>
            <span className="ml-12 md:ml-20">PROJECTS</span>
          </h2>
          
          <p className="mt-8 text-[14px] leading-[17px] font-sans font-normal text-black text-center">
            Storytelling through design - a curated selection<br className="hidden md:block" />
            of over 100 projects worldwide.
          </p>
          
          <a href="#" className="mt-8 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors">
            View Projects
          </a>
        </div>
      </section>

      <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
        {projects.map((project, index) => (
          <section 
            key={project.id} 
            className="project-slide absolute top-0 left-0 w-full h-screen flex items-start justify-center pt-[10vh]"
            style={{ zIndex: index }}
          >
            {/* Background Image with Clip Path Reveal */}
            <div className="project-image absolute inset-0 w-full h-full">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/30"></div> 
            </div>

            {/* Staggered Text */}
            <h2 className="relative z-10 text-[10vw] font-serif text-white flex overflow-hidden">
              {project.title.split("").map((char, i) => (
                <span key={i} className="letter inline-block mx-1">
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </h2>

            {/* Subtitle and Details */}
            <div className="project-details absolute bottom-20 right-20 text-right text-white z-20">
              <div className="text-xl tracking-[0.2em] uppercase mb-4 font-serif">{project.subtitle}</div>
              <button className="text-[11px] uppercase tracking-[0.3em] border-b border-white pb-1 hover:text-stone-300 hover:border-stone-300 transition-colors">
                VIEW PROJECT
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
