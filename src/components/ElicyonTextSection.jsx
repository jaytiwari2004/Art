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
        // Platform detection for Mac to fix specific overlap issues on high-res displays like MacBook Pro
        const isMac = typeof window !== 'undefined' && (/Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform) || /Mac/i.test(navigator.userAgent));
        const verticalOffset = isMac ? "-22vh" : "-45vh";

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

        const mergeTime = 5.0;

        // 1. GLIDE FROM BOTTOM TO CENTER (DURING INITIAL SCROLL)
        mainTl.to(".text-wrapper", { y: verticalOffset, duration: 2, ease: "none" }, 0)

          // 2. PAUSE AT CENTER, THEN START FADE/MERGE ANIMATIONS (STARTING AT 2.5s)
          .to(".f-vision", { opacity: 0, y: -20, duration: 1 }, 2.5)
          .to(".f-studio", { opacity: 0, y: -20, duration: 1 }, 2.7)
          .to(".f-your", { opacity: 0, y: -20, duration: 1 }, 2.9)
          .to(".f-sculpts", { opacity: 0, y: -20, duration: 1 }, 3.1)
          .to(".f-spaces", { opacity: 0, y: -20, duration: 1 }, 3.3)
          .to(".f-reflect", { opacity: 0, y: -20, duration: 1 }, 3.5)
          .to(".f-our", { opacity: 0, y: -20, duration: 1 }, 3.7);

        // 3. SMOOTHLY RETURN TO BOTTOM AT THE END OF THE SECTION
        mainTl.to(".text-wrapper", { y: "0vh", duration: 4, ease: "sine.inOut" }, 6.5);

        // Merging into two rows: 
        // Row 1: through CRAFT, (stays static)
        // Row 2: VISION and unrivalled + GLOBAL EXPERTISE.
        mainTl.to(".f-unrivalled", { x: -260, duration: 2, ease: "power2.inOut" }, mergeTime)
          .to(".f-expertise", { y: -64, x: 310, duration: 2, ease: "power2.inOut" }, mergeTime);

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
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-end z-10 text-center px-4 pb-[2vh] pointer-events-none">

        <div className="text-wrapper flex flex-col items-center select-none antialiased">

          {/* DESKTOP ONLY: HEADER BLOCK */}
          <div className="hidden md:flex flex-col items-center">
            <h2 className="f-spaces-reflect" style={textStyle}>
              <span className="f-spaces" style={textStyle}>SPACES</span> <span className="f-reflect" style={textStyle}>that reflect</span>
            </h2>
            <h2 style={textStyle}>
              <span className="f-your" style={textStyle}>your</span> <span className="f-vision" style={textStyle}>vision,</span>
            </h2>
            <h2 className="f-luxury" style={textStyle}>through CRAFT,</h2>
            <h2 className="f-unrivalled" style={textStyle}>VISION and unrivalled</h2>
            <h2 className="f-expertise" style={textStyle}>GLOBAL EXPERTISE.</h2>
          </div>

          {/* MOBILE ONLY: FINAL TEXT REVEAL ONLY */}
          <div className="flex md:hidden flex-col items-center gap-4">
            <h2 className="f-mobile-row" style={{ ...textStyle, color: 'black', fontSize: '30px', lineHeight: '36px', fontWeight: 'bold', textShadow: '0px 0px 12px rgba(255,255,255,0.9)' }}>through CRAFT,</h2>
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
