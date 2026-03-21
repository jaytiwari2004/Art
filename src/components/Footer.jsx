"use client";
import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#6d88c7] text-[#1a1a1a] overflow-hidden flex flex-col justify-between pt-20 px-8 lg:px-16 min-h-[90vh]">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full max-w-[1600px] mx-auto z-10">
        
        {/* Left: Newsletter Form */}
        <div className="lg:col-span-5 flex flex-col">
          <h2
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
              fontSize: "16px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "24px",
              color: "rgb(0, 0, 0)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "24px",
            }}
          >
            JOIN <span style={{ fontStyle: "italic", textTransform: "lowercase", letterSpacing: "0.05em" }}>the</span> WORLD <br />
            <span style={{ fontStyle: "italic", textTransform: "lowercase", letterSpacing: "0.05em", marginRight: "12px" }}>of</span>
            ELICYON
          </h2>
          
          <p 
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontSize: "14px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "16px",
              color: "rgb(0, 0, 0)",
              maxWidth: "360px",
              marginBottom: "48px"
            }}
          >
            Subscribe to join our community and stay up to date <br /> with the studio.
          </p>
          
          <form className="space-y-8 max-w-md w-full">
            <div className="flex gap-6">
              <input 
                type="text" 
                placeholder="FIRST NAME *" 
                className="bg-transparent border-b border-[#1a1a1a]/40 w-full py-2 placeholder-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                style={{
                  fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }}
              />
              <input 
                type="text" 
                placeholder="LAST NAME *" 
                className="bg-transparent border-b border-[#1a1a1a]/40 w-full py-2 placeholder-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                style={{
                  fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase"
                }}
              />
            </div>
            
            <input 
              type="email" 
              placeholder="EMAIL *" 
              className="bg-transparent border-b border-[#1a1a1a]/40 w-full py-2 placeholder-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"
              style={{
                fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                fontSize: "10px",
                letterSpacing: "0.2em",
                textTransform: "uppercase"
              }}
            />
            
            <label className="flex items-start gap-4 cursor-pointer mt-6">
              <input type="checkbox" className="mt-1 w-3 h-3 border border-[#1a1a1a] rounded-none appearance-none checked:bg-[#1a1a1a] bg-white cursor-pointer" />
              <p 
                style={{
                  fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                  fontSize: "11px",
                  opacity: 0.8,
                  lineHeight: "1.5"
                }}
              >
                I consent to my information being collected <br /> in accordance with the Art privacy policy
              </p>
            </label>
            
            <button 
              type="button"
              style={{
                fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                fontSize: "10px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                borderBottom: "1px solid #1a1a1a",
                paddingBottom: "4px",
                background: "none",
                cursor: "pointer",
                fontWeight: 600,
                marginTop: "32px",
                display: "inline-block"
              }}
              className="hover:opacity-60 transition-opacity"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>

        {/* Middle: Links Grid */}
        <div className="lg:col-span-7 flex justify-between lg:pl-24 xl:pl-32 lg:pr-16 xl:pr-24">
          <ul 
            className="space-y-3"
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontSize: "14px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "16px",
              color: "rgb(0, 0, 0)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Projects</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Studio</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Services</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Insights</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">FAQs</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Contact</li>
          </ul>
          <ul 
             className="space-y-3"
             style={{
               fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
               fontSize: "14px",
               fontWeight: 400,
               fontStyle: "normal",
               lineHeight: "16px",
               color: "rgb(0, 0, 0)",
               letterSpacing: "0.3em",
               textTransform: "uppercase",
             }}
          >
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Instagram</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Pinterest</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">LinkedIn</li>
            <li className="hover:opacity-50 cursor-pointer transition-opacity">Facebook</li>
          </ul>
        </div>
      </div>

      {/* Massive Foreground Text - Fixed position above bottom bar */}
      <div className="w-full flex justify-start items-end max-w-[1600px] mx-auto z-0 -mb-4 xl:-mb-8">
        <h1 
          className="pointer-events-none select-none"
          style={{
            fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
            fontSize: "303px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "303px",
            color: "rgb(0, 0, 0)",
            letterSpacing: "-0.04em",
            margin: 0,
            padding: 0,
          }}
        >
          ART
        </h1>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 w-full pb-6 pt-6 -mx-8 px-8 lg:-mx-16 lg:px-16">
        <div 
          className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center opacity-80"
          style={{
            fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {/* Left space empty to match reference */}
          <div className="flex-1 hidden md:block"></div>
          
          <div className="flex-1 flex justify-center mb-4 md:mb-0">
            <span className="cursor-pointer hover:opacity-70 transition-opacity font-bold">Privacy Policy</span>
          </div>
          
          <div className="flex-1 flex justify-end">
            <span>REGISTERED TRADE MARK OF ART STUDIO © 2026</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
