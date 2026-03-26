"use client";
import React from 'react';

export default function ServicesSection() {
  return (
    <section className="bg-[#f0ede6] py-12 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top: Title + Description */}
        <div className="mb-12 md:mb-16">
          <h2
            className="text-[36px] md:text-[48px] leading-[44px] md:leading-[58px]"
            style={{
              fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
            }}
          >
            <span className="relative -left-4 md:-left-20">OUR</span><br />
            <span className="relative -left-2 md:-left-8">SERVICES</span>
          </h2>
          <p
            className="text-[14px] leading-[20px] md:leading-[17px] mt-6 md:mt-5 max-w-full md:max-w-[310px] relative -left-4 md:-left-16"
            style={{
              fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
              fontWeight: 400,
              color: "rgb(0, 0, 0)",
            }}
          >
            We craft only the most thoughtful and visionary interiors, spanning
            residential, commercial, and landmark developments across the globe.
            Each space is defined not by trend, but by intent, shaped with
            precision, narrative and considered vision.
          </p>
        </div>

        {/* Staggered Image Cards */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-8 md:gap-4">
          {/* Card 1: INTERIOR DESIGN */}
          <div
            className="relative w-full max-w-[340px] md:w-[200px] h-[400px] md:h-[280px] cursor-pointer overflow-hidden"
            style={{ marginTop: "0px" }}
          >
            <img
              src="/img1.jpg"
              alt="Interior Design"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                style={{
                  color: "rgb(244, 242, 238)",
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                  fontWeight: 400,
                }}
              >
                INTERIOR<br />DESIGN
              </span>
            </div>
          </div>

          {/* Card 2: ARCHITECTURE */}
          <div
            className="relative w-full max-w-[340px] md:w-[200px] h-[400px] md:h-[340px] md:mt-12 cursor-pointer overflow-hidden"
          >
            <img
              src="/img2.jpg"
              alt="Architecture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                style={{
                  color: "rgb(244, 242, 238)",
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                  fontWeight: 400,
                }}
              >
                ARCHITECTURE
              </span>
            </div>
          </div>

          {/* Card 3: PROJECT MANAGEMENT */}
          <div
            className="relative w-full max-w-[340px] md:w-[200px] h-[400px] md:h-[280px] md:mt-8 cursor-pointer overflow-hidden"
          >
            <img
              src="/img3.jpg"
              alt="Project Management"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="text-[16px] tracking-[0.3em] text-center leading-[16px]"
                style={{
                  color: "rgb(244, 242, 238)",
                  fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", sans-serif',
                  fontWeight: 400,
                }}
              >
                PROJECT<br />MANAGEMENT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom right: text block + explore link */}
        <div className="flex justify-start md:justify-end mt-12 md:mt-14">
          <div className="max-w-full md:max-w-[320px] relative left-4 md:left-20">
            <p
              className="text-[14px] leading-[22px] md:leading-[17px] mb-8"
              style={{
                fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontWeight: 400,
                color: "rgb(0, 0, 0)",
              }}
            >
              At Elicyon, we take pride in offering a comprehensive suite of
              services that infuse every space with curated luxury, thoughtful
              consideration, and a deeply personal touch.
            </p>

            <button
              className="text-[13px] tracking-[0.25em] uppercase underline underline-offset-4 cursor-pointer relative left-2 md:left-16"
              style={{
                fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
                fontWeight: 400,
                background: "none",
                border: "none",
                color: "rgb(0, 0, 0)",
                padding: 0,
              }}
            >
              Explore Our Services
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
