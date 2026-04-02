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

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions;

      if (isDesktop) {
        // 1. PIN THE ENTIRE SECTION (DESKTOP ONLY)
        const mainTl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1.2,
          }
        });

        const mergeTime = 1.3;

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

        // 3. IMAGE PARALLAX (DESKTOP ONLY)
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
      } else {
        // MOBILE: FASTER ZERO-LAG SCROLL - TEXT BLOCKED TRAVELS FURTHER
        gsap.fromTo(".f-mobile-row",
          { y: -100, opacity: 1 },
          {
            y: 1100,
            opacity: 1,
            stagger: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom bottom",
              scrub: true, // Syncs exactly with scroll but covers more distance (faster)
            }
          }
        );

        // Responsive parallax movement for background images
        gsap.to(".parallax-img", {
          y: "-120px",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
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
    <div ref={sectionRef} className="relative w-full h-[250vh] md:h-screen bg-[#f8f7f3] overflow-hidden">

      {/* BACKGROUND IMAGES */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <img src="/new.jpeg" className="parallax-img absolute top-[10vh] right-[5%] w-32 h-44 md:w-80 md:h-[450px] object-cover shadow-lg" alt="Interior 1" />
        <img src="/new1.jpeg" className="parallax-img absolute top-[70vh] left-[5%] w-28 h-40 md:w-72 md:h-96 object-cover shadow-lg" alt="Interior 2" />
        <img src="/new3.jpeg" className="parallax-img absolute top-[130vh] right-[8%] w-32 h-44 md:w-96 md:h-[500px] object-cover shadow-lg" alt="Interior 3" />
        <img src="/elylast.png" className="parallax-img absolute top-[190vh] left-[8%] w-36 h-52 md:w-[450px] md:h-[600px] object-cover shadow-lg" alt="Interior 4" />
      </div>

      {/* TEXT CONTENT LAYER */}
      <div className="sticky top-0 w-full h-screen flex items-center md:items-center justify-center z-10 text-center px-4 pt-[15vh] md:pt-0 pointer-events-none">

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
          <div className="flex md:hidden flex-col items-center gap-4">
            <h2 className="f-mobile-row" style={{ ...textStyle, color: 'black', fontSize: '32px', lineHeight: '38px', fontWeight: '500', textShadow: '0px 0px 12px rgba(255,255,255,0.9)' }}>FORGING a</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, color: 'black', fontSize: '30px', lineHeight: '36px', fontWeight: 'bold', textShadow: '0px 0px 12px rgba(255,255,255,0.9)' }}>NEW LUXURY through CRAFT,</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, color: 'black', fontSize: '24px', lineHeight: '28px', fontWeight: '500', textShadow: '0px 0px 12px rgba(255,255,255,0.9)' }}>VISION and unrivalled</h2>
            <h2 className="f-mobile-row" style={{ ...textStyle, color: 'black', fontSize: '28px', lineHeight: '32px', fontWeight: '500', textShadow: '0px 0px 12px rgba(255,255,255,0.9)' }}>GLOBAL EXPERTISE.</h2>
          </div>
        </div>
      </div>

      {/* Frame Border */}
      <div className="absolute inset-0 pointer-events-none border-[20px] border-[#f8f7f3] z-20" />
    </div>
  );
};

export default ElicyonTextSection;
