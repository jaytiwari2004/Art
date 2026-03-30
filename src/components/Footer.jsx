"use client";
import React from 'react';

export default function Footer() {
  const antiqueStyle = {
    fontFamily: '"AntiqueLegacy", serif',
    fontWeight: 400,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  };

  return (
    <footer className="relative bg-[#6d88c7] text-[#1a1a1a] pt-16 md:pt-24 px-6 md:px-16 overflow-hidden flex flex-col">
      
      <div className="max-w-[1400px] mx-auto w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          {/* LEFT: NEWSLETTER FORM */}
          <div className="flex flex-col">
            <h2 className="text-[32px] md:text-[54px] leading-[1.1] mb-8" style={{ fontFamily: '"Elicyon", serif' }}>
              JOIN <span className="italic lowercase">the</span> WORLD <br />
              <span className="italic lowercase mr-3">of</span> ELICYON
            </h2>
            
            <p className="text-[14px] leading-relaxed mb-10 max-w-sm" style={antiqueStyle}>
              Subscribe to join our community and stay up to date with the studio.
            </p>
            
            <form className="space-y-8 w-full max-w-md">
              {/* Names - Side by side on mobile too */}
              <div className="flex flex-row gap-4 md:gap-8">
                <input 
                  type="text" 
                  placeholder="FIRST NAME *" 
                  className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "10px" }}
                />
                <input 
                  type="text" 
                  placeholder="LAST NAME *" 
                  className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                  style={{ ...antiqueStyle, fontSize: "10px" }}
                />
              </div>
              
              <input 
                type="email" 
                placeholder="EMAIL *" 
                className="bg-transparent border-b border-black/30 w-full py-2 placeholder-black/60 focus:outline-none focus:border-black transition-colors"
                style={{ ...antiqueStyle, fontSize: "10px" }}
              />
              
              <label className="flex items-start gap-3 cursor-pointer mt-6">
                <div className="relative">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 border border-black/40 rounded-none checked:bg-black/80 mt-1 cursor-pointer" />
                </div>
                <p className="text-[11px] leading-relaxed opacity-70" style={antiqueStyle}>
                  I consent to my information being collected in accordance with the Elicyon privacy policy
                </p>
              </label>
              
              <button 
                type="button"
                className="border-b border-black pb-1 hover:opacity-50 transition-opacity mt-4"
                style={{ ...antiqueStyle, fontSize: "12px", fontWeight: 600 }}
              >
                SUBMIT FORM
              </button>
            </form>
          </div>

          {/* RIGHT: LINKS (STAGGERED 2 COLUMNS ON MOBILE) */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 pt-8 lg:pt-20">
            {/* Column 1: Main Links */}
            <div className="flex flex-col space-y-4">
              {["PROJECTS", "STUDIO", "SERVICES", "INSIGHTS", "FAQS", "CONTACT"].map((link) => (
                <span key={link} className="text-[13px] md:text-[15px] cursor-pointer hover:opacity-50 transition-opacity" style={antiqueStyle}>
                  {link}
                </span>
              ))}
            </div>

            {/* Column 2: Social Links */}
            <div className="flex flex-col space-y-4">
              {["INSTAGRAM", "PINTEREST", "LINKEDIN", "FACEBOOK"].map((link) => (
                <span key={link} className="text-[13px] md:text-[15px] cursor-pointer hover:opacity-50 transition-opacity" style={antiqueStyle}>
                  {link}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM LOGO (Centered) */}
      <div className="w-full mt-auto flex justify-center items-end py-12 md:py-20 z-10 transition-transform duration-700">
        <img 
          src="/logo.png" 
          alt="Art Studio Logo" 
          className="h-[60px] md:h-[100px] w-auto object-contain opacity-90 transition-opacity hover:opacity-100"
        />
      </div>

      {/* BOTTOM BAR (Legal & Credits) */}
      <div className="w-full py-8 border-t border-black/10 z-10 bg-[#6d88c7]">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] opacity-60" style={antiqueStyle}>
          <div className="flex gap-8 hover:opacity-100 transition-opacity">
            <span className="cursor-pointer font-bold">Privacy Policy</span>
            <span className="cursor-pointer font-bold">Terms & Conditions</span>
          </div>
          <div className="text-center md:text-right">
            <span>REGISTERED TRADE MARK OF ART STUDIO © 2026</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
