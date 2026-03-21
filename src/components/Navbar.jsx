"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const navbarRef = useRef(null);

  useGSAP(() => {
    // Navbar Hide/Show Logic
    const showAnim = gsap
      .from(navbarRef.current, {
        yPercent: -100,
        paused: true,
        duration: 0.3,
        ease: "power2.out",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: "max",
      onUpdate: (self) => {
        self.direction === -1 ? showAnim.play() : showAnim.reverse();
      },
    });
  }, { scope: navbarRef });

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Toggle to dark text when scrolled past 90% of the viewport height
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 grid grid-cols-3 items-center px-6 md:px-12 py-8 drop-shadow-sm transition-colors duration-500 ease-in-out ${isScrolled ? "text-stone-900" : "text-white"
        }`}
    >
      {/* Left Side: Navigation Links */}
      <div className="flex space-x-8 text-[22px] leading-[16px] font-normal tracking-wide font-serif hidden md:flex">
        <a href="#" className="hover:opacity-80 transition-all">Project</a>
        <a href="#" className="hover:opacity-80 transition-all">Services</a>
        <a href="#" className="hover:opacity-80 transition-all">Studio</a>
        <a href="#" className="hover:opacity-80 transition-all">Insights</a>
      </div>

      {/* Middle: Logo */}
      <div className="text-center text-4xl font-bold tracking-[0.3em] font-serif uppercase animate-fade-in">
        ART
      </div>

      {/* Right Side: Contact Us */}
      <div className="flex justify-end text-[22px] leading-[16px] font-normal tracking-wide font-serif">
        <a href="#" className={`border-b pb-0.5 hover:opacity-80 transition-all ${isScrolled ? "border-stone-900" : "border-white"}`}>
          Contact Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
