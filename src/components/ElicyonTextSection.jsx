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

  useGSAP(() => {
    let mm = gsap.matchMedia();

    // 1. PIN THE ENTIRE SECTION
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 1.2,
      }
    });

    // 2. RESPONSIVE ANIMATIONS
    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;
      const mergeTime = isDesktop ? 1.3 : 0.4;

      if (isDesktop) {
        // DESKTOP: FADE HEADER + HORIZONTAL MERGE
        mainTl.to(".f-vision", { opacity: 0, y: -20, duration: 1 }, 0)
          .to(".f-studio", { opacity: 0, y: -20, duration: 1 }, 0.2)
          .to(".f-your", { opacity: 0, y: -20, duration: 1 }, 0.4)
          .to(".f-sculpts", { opacity: 0, y: -20, duration: 1 }, 0.6)
          .to(".f-spaces", { opacity: 0, y: -20, duration: 1 }, 0.8)
          .to(".f-reflect", { opacity: 0, y: -20, duration: 1 }, 1.0)
          .to(".f-our", { opacity: 0, y: -20, duration: 1 }, 1.2);

        // Row 1 Construction
        mainTl.to(".f-forging", { y: 58, x: "-32vw", duration: 2, ease: "power2.inOut" }, mergeTime)
          .to(".f-luxury", { x: "15vw", duration: 2, ease: "power2.inOut" }, mergeTime);

        // Row 2 Construction
        mainTl.to(".f-unrivalled", { x: "-12vw", duration: 2, ease: "power2.inOut" }, mergeTime + 0.3)
          .to(".f-expertise", { y: -58, x: "26vw", duration: 2, ease: "power2.inOut" }, mergeTime + 0.3);
      } else {
        // MOBILE: CLEAN ENTRANCE (LAND AT SECOND IMAGE BOTTOM)
        mainTl.from(".f-mobile-row", {
          y: 400,
          opacity: 0,
          stagger: 0.3,
          duration: 3,
          ease: "expo.out"
        }, mergeTime);
      }
    });

    // 3. IMAGE PARALLAX
    gsap.to(".parallax-img", {
      y: "-200vh",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        scrub: 1,
      }
    });

  }, { scope: sectionRef });

  const textStyle = {
    fontFamily: 'var(--font-heading), "Elicyon", serif',
    fontStyle: 'normal',
    fontWeight: '400',
    color: 'rgb(0, 0, 0)',
    fontSize: '48px',
    lineHeight: '58px',
    textAlign: 'center',
    textTransform: 'none',
    display: 'inline-block',
  };

  return (
    <div ref={sectionRef} className="relative w-full h-screen bg-[#f8f7f3] overflow-hidden flex items-center justify-center">

      {/* BACKGROUND IMAGES */}
      <div className="absolute top-0 left-0 w-full h-[300vh] z-0 pointer-events-none">
        <img src="/new.jpeg" className="parallax-img absolute top-[15vh] right-[5%] w-64 h-80 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 1" />
        <img src="/new1.jpeg" className="parallax-img absolute top-[70vh] left-[5%] w-56 h-72 md:w-72 md:h-96 object-cover shadow-lg" alt="Interior 2" />
        <img src="/new3.jpeg" className="parallax-img absolute top-[130vh] right-[10%] w-72 h-96 md:w-96 md:h-[500px] object-cover shadow-lg" alt="Interior 3" />
        <img src="/elylast.png" className="parallax-img absolute top-[190vh] left-[10%] w-80 h-[500px] md:w-[450px] md:h-[600px] object-cover shadow-lg" alt="Interior 4" />
      </div>

      {/* TEXT CONTENT LAYER */}
      <div className="relative z-10 text-center max-w-7xl px-4 pointer-events-none">

        <div className="flex flex-col items-center select-none antialiased">

          {/* DESKTOP ONLY: HEADER BLOCK */}
          <div className="hidden md:flex flex-col items-center">
            <h2 className="f-our" style={textStyle}>Our</h2>
            <h2 className="f-studio-sculpts" style={textStyle}>
              <span className="f-studio" style={textStyle}>STUDIO</span> <span className="f-sculpts" style={textStyle}>SCULPTS</span>
            </h2>
            <h2 className="f-spaces-reflect" style={textStyle}>
              <span className="f-spaces" style={textStyle}>SPACES</span> <span className="f-reflect" style={textStyle}>that reflect</span>
            </h2>
            <h2 style={textStyle}>
              <span className="f-your" style={textStyle}>your</span> <span className="f-vision" style={textStyle}>vision,</span>
              <span className="f-forging ml-4" style={textStyle}>FORGING a</span>
            </h2>
            <h2 className="f-luxury" style={textStyle}>NEW LUXURY through CRAFT,</h2>
            <h2 className="f-unrivalled" style={textStyle}>VISION and unrivalled</h2>
            <h2 className="f-expertise" style={textStyle}>GLOBAL EXPERTISE.</h2>
          </div>

          {/* MOBILE ONLY: FINAL TEXT REVEAL ONLY */}
          <div className="flex md:hidden flex-col items-center gap-1">
            <h2 className="f-mobile-row" style={{ ...textStyle, fontSize: '30px', lineHeight: '38px' }}>FORGING a</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, fontSize: '28px', lineHeight: '36px', fontWeight: 'bold' }}>NEW LUXURY through CRAFT,</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, fontSize: '20px', lineHeight: '28px', opacity: 0.8 }}>VISION and unrivalled</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, fontSize: '24px', lineHeight: '32px' }}>GLOBAL EXPERTISE.</h2>
          </div>
        </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-[#f8f7f3] z-20" />
    </div>
  );
};

export default ElicyonTextSection;
