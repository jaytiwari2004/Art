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
        const isMac = typeof window !== 'undefined' && (/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform) || /Mac/i.test(navigator.userAgent));

        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=420%",
            pin: true,
            scrub: 1.2,
          }
        });

        // 1. Initial drift DOWNWARDS slightly after a small pause
        mainTl.to(textWrapper.current, { y: "15vh", duration: 3, ease: "power1.inOut" }, 0.5);

        // 2. SPACES THAT fades out after some time
        mainTl.to(".word-spaces", { opacity: 0, y: -30, scale: 0.95, duration: 1.5 }, 1.5);

        // 3. Merging Animation: Top line shifts left, Bottom line rises up to meet it
        mainTl.to(".row-2", { x: -180, y: 20, duration: 3, ease: "power2.inOut" }, 3.5);
        mainTl.to(".row-3", { x: 170, y: -53, duration: 3, ease: "power2.inOut" }, 3.5);

        // 4. Final Push Down: Move the assembled line towards its final framed position
        mainTl.to(textWrapper.current, { y: "25vh", duration: 8, ease: "power1.inOut" }, 6.5);

        // Parallax for images
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
    <div ref={sectionRef} className="relative w-full h-[250vh] md:h-screen bg-[#f8f7f3] overflow-hidden">

      {/* BACKGROUND IMAGES */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src="/new.jpeg" className="parallax-img absolute top-[15vh] right-[8%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 1" />
        <img src="/new1.jpeg" className="parallax-img absolute top-[85vh] left-[6%] w-28 h-40 md:w-72 md:h-96 object-cover shadow-lg" alt="Interior 2" />
        <img src="/new3.jpeg" className="parallax-img absolute top-[155vh] right-[10%] w-32 h-44 md:w-96 md:h-[500px] object-cover shadow-lg" alt="Interior 3" />
        <img src="/elylast.png" className="parallax-img absolute top-[225vh] left-[10%] w-36 h-52 md:w-[450px] md:h-[600px] object-cover shadow-lg" alt="Interior 4" />
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
