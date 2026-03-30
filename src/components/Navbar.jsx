"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Navbar = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === "/projects";
  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverArc, setIsOverArc] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); // "main" or "projects"

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverArc(entry.isIntersecting);
      },
      { 
        rootMargin: "-80px 0px -90% 0px", 
        threshold: 0 
      }
    );

    const target = document.getElementById("arc-section");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  useGSAP(() => {
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

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.8,
        ease: "power4.out",
      });
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      setActiveMenu("main");
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-[100] grid grid-cols-3 items-center px-6 md:px-12 py-8 drop-shadow-sm transition-colors duration-500 ease-in-out ${
          isOverArc ? "text-white" : (isScrolled || isProjectsPage ? (isMenuOpen ? "text-black" : "text-[#78233e]") : (isMenuOpen ? "text-black" : "text-white"))
        }`}
      >
        <div className="flex items-center">
          <div
            className="hidden md:flex space-x-8 text-[22px] leading-[16px] font-normal tracking-wide uppercase"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Link 
              href="/projects"
              className="hover:opacity-80 transition-all uppercase cursor-pointer"
            >
              Projects
            </Link>
            <Link href="/services" className="hover:opacity-80 transition-all">Services</Link>
            <Link href="/about" className="hover:opacity-80 transition-all">About</Link>
            <Link href="/projects" className="hover:opacity-80 transition-all">portfolio</Link>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-sm md:text-xl font-normal tracking-[0.2em] uppercase cursor-pointer"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="MALMAR"
            width={200}
            height={50}
            className={`h-6 md:h-10 w-auto transition-all duration-500 ${
              isOverArc ? "invert brightness-0 invert" : (isScrolled || isProjectsPage ? (isMenuOpen ? "" : "") : (isMenuOpen ? "" : "invert brightness-0 invert"))
            }`}
            priority
          />
        </div>

        <div
          className="flex justify-end items-center text-sm md:text-xl font-normal tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-antique)" }}
        >
          <a href="#" className={`border-b pb-0.5 hover:opacity-80 transition-all ${
            isOverArc ? "border-white" : ((isScrolled || isProjectsPage) && !isMenuOpen ? "border-[#78233e]" : (isMenuOpen ? "border-black" : "border-white"))
          }`}>
            Contact
          </a>
        </div>
      </nav>

      <div
        ref={menuRef}
        style={{ backgroundColor: "rgb(240, 237, 232)" }}
        className="fixed top-0 left-0 w-full h-screen z-[90] -translate-y-full flex flex-col justify-between px-6 md:px-12 py-10 md:py-20"
      >
        {activeMenu === "main" && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 md:space-y-6 animate-in fade-in duration-500">
            {["PROJECTS", "SERVICES", "ABOUT", "PORTFOLIO"].map((item) => (
              item === "PROJECTS" ? (
                <button
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMenu("projects");
                  }}
                  className="menu-item hover:opacity-60 transition-all text-center uppercase cursor-pointer block"
                  style={{
                    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)",
                    fontSize: "64px",
                    lineHeight: "77px"
                  }}
                >
                  {item}
                </button>
              ) : (
                <Link
                  key={item}
                  href={item === "SERVICES" ? "/services" : (item === "PORTFOLIO" ? "/projects" : `/${item.toLowerCase()}`)}
                  onClick={() => setIsMenuOpen(false)}
                  className="menu-item hover:opacity-60 transition-all text-center uppercase cursor-pointer block"
                  style={{
                    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)",
                    fontSize: "64px",
                    lineHeight: "77px"
                  }}
                >
                  {item}
                </Link>
              )
            ))}
          </div>
        )}

        {activeMenu === "projects" && (
          <div className="flex-1 flex flex-col items-center justify-start pt-24 md:pt-48 w-full relative animate-in fade-in slide-in-from-right-8 duration-500">
            {/* Back Arrow - matching the blue chevron in the screenshot */}
            <button 
              onClick={() => setActiveMenu("main")}
              className="absolute top-0 left-0 md:top-20 md:left-12 p-4 hover:opacity-60 transition-all cursor-pointer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="rgb(109, 136, 199)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            {/* Submenu Title */}
            <Link 
              href="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="text-center uppercase tracking-tight block hover:opacity-60 transition-all"
              style={{
                fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
                fontSize: "64px",
                lineHeight: "77px"
              }}
            >
              PROJECT PORTFOLIO
            </Link>

            <div className="mt-16 flex flex-col space-y-6">
            </div>
          </div>
        )}

        <div className="menu-footer w-full flex flex-col space-y-12">
          <div className="flex justify-between items-end border-t border-black/10 pt-8">
            <div className="flex flex-col space-y-1">
              {["INSTAGRAM", "PINTEREST", "LINKEDIN", "FACEBOOK"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="hover:opacity-60 transition-all uppercase"
                  style={{
                    fontFamily: "var(--font-antique)",
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)",
                    fontSize: "14px",
                    lineHeight: "24px",
                    letterSpacing: "0.1em"
                  }}
                >
                  {social}
                </a>
              ))}
            </div>

            <div className="flex flex-col space-y-1 text-right">
              {["TERMS OF SERVICE", "PRIVACY POLICY", "FAQs"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:opacity-60 transition-all uppercase"
                  style={{
                    fontFamily: "var(--font-antique)",
                    fontWeight: 400,
                    color: "rgb(0, 0, 0)",
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

          <div
            className="uppercase opacity-40 text-center tracking-[0.2em]"
            style={{
              fontFamily: "var(--font-antique)",
              color: "rgb(0, 0, 0)",
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



