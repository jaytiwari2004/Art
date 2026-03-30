"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const PROJECTS = [
  {
    id: 1,
    title: "MAYFAIR RESIDENCE",
    category: "INTERIOR DESIGN",
    image: "/arc1.jpg",
    year: "2024"
  },
  {
    id: 2,
    title: "BELGRAVIA HOUSE",
    category: "ARCHITECTURE",
    image: "/arc2.jpg",
    year: "2023"
  },
  {
    id: 3,
    title: "MODERN LOFT",
    category: "INTERIOR DESIGN",
    image: "/arc3.jpg",
    year: "2024"
  },
  {
    id: 4,
    title: "RIVERSIDE APARTMENT",
    category: "PROJECT MANAGEMENT",
    image: "/arc4.jpeg",
    year: "2023"
  },
  {
    id: 5,
    title: "THE LANDMARK",
    category: "ARCHITECTURE",
    image: "/arc5.jpeg",
    year: "2025"
  },
  {
    id: 6,
    title: "SILK ROAD STUDIO",
    category: "INTERIOR DESIGN",
    image: "/arc6.jpg",
    year: "2024"
  }
];

export default function ProjectsPage() {
  const headingStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  return (
    <main className="min-h-screen bg-[#f0ede6] selection:bg-stone-200">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <h1
          className="text-[56px] md:text-[115px] leading-[68px] md:leading-[132px] uppercase text-center md:text-left mb-24"
          style={headingStyle}
        >
          PROJECT<br />PORTFOLIO
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-8 md:gap-y-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group cursor-pointer ${idx % 2 === 1 ? 'md:translate-y-24' : ''}`}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6 shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-[18px] md:text-[22px] tracking-wider uppercase mb-1" style={headingStyle}>
                    {project.title}
                  </h3>
                  <p className="text-[12px] tracking-[0.2em] uppercase opacity-60" style={bodyStyle}>
                    {project.category}
                  </p>
                </div>
                <span className="text-[14px] opacity-40 font-serif" style={bodyStyle}>
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-48 px-6 md:px-12 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[24px] md:text-[36px] leading-tight mb-12" style={headingStyle}>
            Thinking about your next project?<br />
            Our team is here to help define your vision.
          </p>
          <button 
            className="px-10 py-4 border border-black text-[13px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all duration-500"
            style={bodyStyle}
          >
            Get in touch
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
