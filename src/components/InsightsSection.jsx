"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    category: "RESIDENTIAL",
    title: "IDENTITY MAGAZINE",
    description: "In Balance - This home by Elicyon creates a sense of sanctuary at every turn.",
    image: "/img1.jpg", 
    overlayText: ""
  },
  {
    category: "INSIGHT",
    title: "A DUBAI VILLA OF QUIET GRANDEUR AND CRAFTED DETAIL",
    description: "",
    image: "/img2.jpg",
    overlayText: ""
  },
  {
    category: "COMMERCIAL",
    title: "DESIGN ANTHOLOGY UK",
    description: "Commercial Design Reimagined",
    image: "/img3.jpg",
    overlayText: ""
  }
];

export default function InsightsSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Reveal animation for the cards as they enter viewport
    gsap.from(".insight-card", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#F3F0E9] py-24 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 pt-16">
        <div className="max-w-2xl">
          <h2
            style={{
              fontFamily: "var(--font-elicyon), 'Playfair Display', Georgia, serif",
              fontSize: "48px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "58px",
              color: "rgb(0, 0, 0)",
            }}
          >
            The WORLD <br />
            <span>
              of ELICYON
            </span>
          </h2>
          <p
            className="mt-8 uppercase tracking-widest max-w-sm"
            style={{
              fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
              lineHeight: "1.8",
            }}
          >
            Beyond the finished space. Explore the insights, inspiration, 
            innovations, and ideas that quietly shape our world.
          </p>
        </div>
        <button
          style={{
            fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
            marginTop: "32px",
            fontSize: "11px",
            letterSpacing: "0.3em",
            fontWeight: 600,
            textTransform: "uppercase",
            borderBottom: "1px solid #1a1a1a",
            paddingBottom: "6px",
            background: "none",
            border: "none",
            borderBottom: "1px solid #1a1a1a",
            cursor: "pointer",
            color: "#1a1a1a",
          }}
        >
          Explore Insights
        </button>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {insights.map((item, idx) => (
          <div key={idx} className="insight-card flex flex-col group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-gray-200">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              {/* Overlay Text (if any) */}
              {item.overlayText && (
                <div className="absolute inset-0 flex items-start justify-center pt-20">
                  <span 
                    style={{ fontFamily: "var(--font-elicyon), serif" }}
                    className="text-white text-4xl md:text-5xl lowercase opacity-90"
                  >
                    {item.overlayText}
                  </span>
                </div>
              )}
            </div>

            {/* Meta Data */}
            <div className="flex flex-col flex-grow">
              <span 
                className="text-gray-500 mb-4"
                style={{
                  fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase"
                }}
              >
                {item.category}
              </span>
              <h3 
                className="uppercase leading-snug mb-3 tracking-wider group-hover:underline decoration-1 underline-offset-[6px]"
                style={{
                  fontFamily: "var(--font-elicyon), 'Playfair Display', Georgia, serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "rgb(0, 0, 0)",
                }}
              >
                {item.title}
              </h3>
              {item.description && (
                <p 
                  className="mb-6"
                  style={{
                    fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "rgb(0, 0, 0)",
                    opacity: 0.8
                  }}
                >
                  {item.description}
                </p>
              )}
              <div className="mt-auto pt-4">
                <span 
                  className="border-b border-black/20 pb-1 group-hover:border-black transition-colors"
                  style={{
                    fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgb(0, 0, 0)",
                  }}
                >
                  READ MORE
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
