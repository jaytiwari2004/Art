"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

const objects = [
  {
    id: 1,
    img: "/img1.jpg",
    title: "BESPOKE JOINERY BENCH",
    desc: "Designed to follow the curvature of the entrance wall, offering an initial moment of grounding upon arrival.",
  },
  {
    id: 2,
    img: "/img2.jpg",
    title: "VINTAGE 1930S CONSOLE",
    desc: "A sculptural moment upon arrival that speaks to the heritage and timeless elegance of the space.",
  },
  {
    id: 3,
    img: "/img3.jpg",
    title: "ART DECO PIANO",
    desc: "Handcrafted in oak, this piece combines comfort with craftsmanship for an unparalleled aesthetic.",
  },
  {
    id: 4,
    img: "/img1.jpg",
    title: "WHITWAY CHANDELIER",
    desc: "Adapted from an original 1940s design, casting a warm, enveloping glow throughout the room.",
  },
];

export default function ObjectsOfDesire() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);
  const [activeId, setActiveId] = useState(1);
  const [cursorType, setCursorType] = useState("right"); // 'left' or 'right'

  // 1. Custom Cursor Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const isLeft = clientX < window.innerWidth / 2;
      setCursorType(isLeft ? "left" : "right");

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };
    
    // Ensure cursor is hidden initially until mouse moves
    const section = document.getElementById("objects-section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }
    
    return () => {
      if (section) section.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 2. Center Detection (Border Logic)
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const center = window.innerWidth / 2;
    const items = scrollRef.current.querySelectorAll(".carousel-item");

    let closestId = 1;
    let minDistance = Infinity;

    items.forEach((item, idx) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - itemCenter);
      // Determine which item is closest to the center
      if (distance < minDistance) {
        minDistance = distance;
        closestId = objects[idx].id;
      }
    });
    
    // Give it a tiny bit of leniency to feel natural
    setActiveId(closestId);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    
    // Find current active index
    const currentIndex = objects.findIndex(obj => obj.id === activeId);
    if (currentIndex === -1) return;

    // Calculate next index
    let targetIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
    
    // Prevent going out of bounds
    if (targetIndex < 0) targetIndex = 0;
    if (targetIndex >= objects.length) targetIndex = objects.length - 1;

    // Get the exact item DOM element
    const items = container.querySelectorAll(".carousel-item");
    const targetItem = items[targetIndex];
    if (!targetItem) return;

    // Calculate exact scroll position to center the target item
    const containerCenter = container.offsetWidth / 2;
    const itemCenterOffset = targetItem.offsetLeft + (targetItem.offsetWidth / 2);
    const scrollTarget = itemCenterOffset - containerCenter;

    container.scrollTo({
      left: scrollTarget,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="objects-section"
      className="relative bg-[#F3F0E9] py-24 overflow-hidden"
      style={{ cursor: "none" }} // Hide default cursor over this section
    >
      {/* Custom Floating Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-50 pointer-events-none flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
        style={{ opacity: 1 /* In production, you'd fade this in only when hovering section */ }}
      >
        <div className="text-black drop-shadow-md">
          {cursorType === "left" ? <ChevronLeft size={36} strokeWidth={1} /> : <ChevronRight size={36} strokeWidth={1} />}
        </div>
      </div>

      {/* Main Section Title */}
      <div className="text-center mb-16 mt-8">
        <h2
          style={{
            fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
            fontSize: "48px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "58px",
            color: "rgb(0, 0, 0)",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          OBJECTS of DESIRE
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onClick={() => scroll(cursorType)}
        className="flex gap-8 px-[10vw] md:px-[35vw] overflow-x-auto snap-x snap-mandatory no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{ scrollBehavior: "smooth" }}
      >
        {objects.map((item) => {
          const isActive = activeId === item.id;
          return (
            <div
              key={item.id}
              className="carousel-item flex-shrink-0 w-[280px] md:w-[350px] snap-center transition-all duration-700 ease-in-out"
            >
              <div
                className={`relative aspect-[3/4] transition-all duration-700 mx-auto
                  ${isActive ? "border-[12px] border-[#8B4513] scale-100" : "border-transparent border-[12px] scale-95"}`}
              >
                <img
                  src={item.img}
                  className="w-full h-full object-cover shadow-2xl"
                  alt={item.title}
                  draggable="false" // Prevent ghost dragging image
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Description Area (Updates based on center item) */}
      <div className="mt-16 max-w-xl mx-auto text-center px-6 h-[100px] relative">
        {objects.map((item) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeId === item.id ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <h3
              style={{
                fontFamily: "var(--font-elicyon), 'Playfair Display', Georgia, serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "rgb(0,0,0)",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h3>
            
            <p
              style={{
                fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "17px",
                color: "rgb(0, 0, 0)",
                margin: "0 auto",
                maxWidth: "400px",
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
