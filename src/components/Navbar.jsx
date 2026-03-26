"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        if (!isMenuOpen) {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        }
      },
    });
  }, { scope: navbarRef, dependencies: [isMenuOpen] });

  // Mobile Menu Animation
  useGSAP(() => {
    if (isMenuOpen) {
      // Background slide down
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      });
      // Staggered items fade/slide in
      gsap.fromTo(".menu-item",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      );
      gsap.fromTo(".menu-footer",
        { opacity: 0 },
        { opacity: 1, duration: 0.8, delay: 0.8 }
      );
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power4.in",
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-[100] grid grid-cols-3 items-center px-6 md:px-12 py-8 drop-shadow-sm transition-colors duration-500 ease-in-out ${isScrolled && !isMenuOpen ? "text-[#751636]" : (isMenuOpen ? "text-[#751636]" : "text-white")
          }`}
      >
        {/* Left Side: Desktop Nav / Mobile Menu Button */}
        <div className="flex items-center">
          {/* Desktop Nav */}
          <div
            className="hidden md:flex space-x-8 text-[22px] leading-[16px] font-normal tracking-wide uppercase"
            style={{ fontFamily: "var(--font-antique)" }}
          >
            <Link href="/" className="hover:opacity-80 transition-all">Projects</Link>
            <Link href="/" className="hover:opacity-80 transition-all">Services</Link>
            <Link href="/about" className="hover:opacity-80 transition-all">About</Link>
            {/* <a href="#" className="hover:opacity-80 transition-all">Studio</a> */}
            <Link href="/" className="hover:opacity-80 transition-all">portfolio</Link>
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-sm md:text-xl font-normal tracking-[0.2em] uppercase cursor-pointer"
            style={{ fontFamily: "var(--font-antique)" }}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Middle: Logo */}
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="MALMAR"
            width={200}
            height={50}
            className={`h-6 md:h-10 w-auto transition-all duration-500 ${isScrolled && !isMenuOpen ? "" : (isMenuOpen ? "" : "invert brightness-0 invert")
              }`}
            priority
          />
        </div>

        {/* Right Side: Contact Us */}
        <div
          className="flex justify-end items-center text-sm md:text-xl font-normal tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-antique)" }}
        >
          <a href="#" className={`border-b pb-0.5 hover:opacity-80 transition-all ${(isScrolled && !isMenuOpen) || isMenuOpen ? "border-[#751636]" : "border-white"
            }`}>
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        ref={menuRef}
        style={{ backgroundColor: "rgb(109, 136, 199)" }}
        className="fixed top-0 left-0 w-full h-screen z-[90] -translate-y-full flex flex-col justify-between px-6 md:px-12 py-10 md:py-20"
      >
        <div className="flex-1 flex flex-col items-center justify-center space-y-4 md:space-y-6">
          {["PROJECTS", "SERVICES", "ABOUT", "CAREERS", "portfolio"].map((item) => (
            <Link
              key={item}
              href={item === "ABOUT" ? "/about" : "/"}
              onClick={() => setIsMenuOpen(false)}
              className="menu-item hover:opacity-60 transition-all text-center"
              style={{
                fontFamily: "var(--font-elicyon), serif",
                fontWeight: 400,
                color: "#751636",
                fontSize: "28px",
                lineHeight: "32px"
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="menu-footer w-full flex flex-col space-y-12">
          <div className="flex justify-between items-end border-t border-black/10 pt-8">
            {/* Socials */}
            <div className="flex flex-col space-y-1">
              {["INSTAGRAM", "PINTEREST", "LINKEDIN", "FACEBOOK"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:opacity-60 transition-all uppercase"
                  style={{
                    fontFamily: "var(--font-antique)",
                    fontWeight: 400,
                    color: "#751636",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "0.1em"
                  }}
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-1 text-right">
              {["TERMS OF SERVICE", "PRIVACY POLICY", "FAQs"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:opacity-60 transition-all uppercase"
                  style={{
                    fontFamily: "var(--font-antique)",
                    fontWeight: 400,
                    color: "#751636",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "0.1em"
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Trademark */}
          <div
            className="uppercase opacity-40 text-center tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-antique)",
              color: "#751636",
              fontSize: "10px",
            }}
          >
            REGISTERED TRADE MARK OF CHARU GANDHI 2025
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

