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
  const textWrapper = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;

      if (isDesktop) {
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=500%",
            pin: true,
            scrub: 1.2,
          }
        });

        // 1. Initial drift DOWNWARDS slightly
        mainTl.to(textWrapper.current, { y: "10vh", duration: 3, ease: "power1.inOut" }, 0.5);

        // 2. SPACES THAT fades out
        mainTl.to(".word-spaces", { opacity: 0, y: -30, scale: 0.95, duration: 1.5 }, 1.5);

        // 3. Merging Animation
        mainTl.to(".row-2", { x: -170, y: 20, duration: 3, ease: "power2.inOut" }, 3.5);
        mainTl.to(".row-3", { x: 180, y: -52, duration: 3, ease: "power2.inOut" }, 3.5);

        // 4. Final Phase: Text follows the images to the bottom of the section
        mainTl.to(textWrapper.current, { y: "60vh", duration: 6, ease: "power1.inOut" }, 6.5);

        // Parallax for images - moving them UP as user scrolls DOWN
        gsap.to(".parallax-img", {
          y: "-260vh",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=500%",
            scrub: 1,
          }
        });
      } else {
        // Mobile Animation
        gsap.fromTo(".mobile-text-row",
          { y: 50, opacity: 0 },
          {
            y: -50,
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
            }
          }
        );
      }
    });
  }, { scope: sectionRef });

  const wordStyle = {
    fontFamily: "'SageNav', sans-serif",
    fontSize: "clamp(18px, 4.5vw, 52px)",
    lineHeight: "1.3",
    color: "#000",
    textTransform: "none",
    display: "inline-block",
  };

  return (
    <div ref={sectionRef} className="relative w-full h-[300vh] md:h-screen bg-[#f8f7f3] overflow-hidden">
      
      {/* BACKGROUND IMAGES */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src="/new.jpeg" className="parallax-img absolute top-[20vh] right-[8%] w-40 h-56 md:w-[450px] md:h-[600px] object-cover shadow-2xl" alt="Interior 1" />
        <img src="/new1.jpeg" className="parallax-img absolute top-[110vh] left-[6%] w-32 h-44 md:w-80 md:h-[500px] object-cover shadow-2xl" alt="Interior 2" />
        <img src="/new3.jpeg" className="parallax-img absolute top-[210vh] right-[10%] w-40 h-56 md:w-[500px] md:h-[700px] object-cover shadow-2xl" alt="Interior 3" />
        <img src="/elylast.png" className="parallax-img absolute top-[310vh] left-[10%] w-44 h-60 md:w-[550px] md:h-[750px] object-cover shadow-2xl" alt="Interior 4" />
      </div>

      {/* TEXT CONTENT LAYER */}
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center z-10 text-center px-4 pointer-events-none">
        <div ref={textWrapper} className="flex flex-col items-center">
          
          {/* Line 1: SPACES THAT (Fades out) */}
          <div className="word-spaces mb-2" style={wordStyle}>
            SPACES that
          </div>

          {/* Line 2: reflect vision */}
          <div className="row-2 flex space-x-6 mb-2">
            <div className="word-reflect" style={wordStyle}>reflect</div>
            <div className="word-vision" style={wordStyle}>vision</div>
          </div>

          {/* Line 3: through CRAFT */}
          <div className="row-3 flex space-x-6">
            <div className="word-through" style={wordStyle}>through</div>
            <div className="word-craft" style={wordStyle}>CRAFT</div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default ElicyonTextSection;
