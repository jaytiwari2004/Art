"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function ServicesPage() {
  const headingStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const heroHeadingStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: 400,
    color: "rgb(244, 242, 238)",
    fontSize: "64px",
    lineHeight: "77px",
    textTransform: "uppercase",
    letterSpacing: "0.1em"
  };

  const narrativeHeadingStyle = {
    fontFamily: '"__elicyon_df1f4c", "__elicyon_Fallback_df1f4c", "Elicyon", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "48px",
    lineHeight: "58px",
    textTransform: "uppercase",
  };

  const narrativeBodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
    fontSize: "14px",
    lineHeight: "17px",
  };

  const bodyStyle = {
    fontFamily: '"__antiqueLegacy_623eb9", "__antiqueLegacy_Fallback_623eb9", "AntiqueLegacy", serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const services = [
    {
      title: "INTERIOR DESIGN",
      description: "Our award-winning interior design team creates bespoke environments that reflect the unique personality and lifestyle of our clients. From conceptual sketches to final installation, we manage every detail with precision and care.",
      features: ["Space Planning", "Furniture Procurement", "Custom Cabinetry", "Material Selection"]
    },
    {
      title: "ARCHITECTURE",
      description: "We provide comprehensive architectural services that blend innovative design with functional excellence. Our approach ensures that every structure Harmonizes with its surroundings while exceeding technical requirements.",
      features: ["Concept Design", "Planning Applications", "Structural Coordination", "Building Regulations"]
    },
    {
      title: "PROJECT MANAGEMENT",
      description: "Our dedicated project managers ensure that every vision is realized exactly as planned. We handle timelines, budgets, and contractor coordination, allowing our clients to enjoy the creative journey without the stress of logistics.",
      features: ["Budget Management", "Timeline Oversight", "Quality Control", "Contractor Liaison"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f3f0]">
      <Navbar />

      {/* Hero Section with Background Image */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services-hero.png')" }} 
        />
        {/* Subtle Dark Overlay */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        
        {/* Centered Heading */}
        <div className="relative z-20 text-center px-6">
          <h1 style={heroHeadingStyle}>
            SERVICES
          </h1>
        </div>
      </section>

      {/* New Narrative Section */}
      <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
        <div className="mb-24">
          <h2 style={narrativeHeadingStyle} className="max-w-[1000px]">
            REALISATION of EXTRAORDINARY <br />
            DETAIL and an UNRIVALLED <br />
            DEDICATION to MATERIAL.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:w-2/3 ml-auto">
          <div style={narrativeBodyStyle}>
            <p className="mb-6">
              Elicyon is an award-winning design studio renowned for crafting spaces that combine individuality, refinement and enduring quality. From elegant residences to innovative workplaces and landmark developments, we create environments that balance function and beauty, while reflecting the unique identity of each client. As a leading luxury design studio, our work spans the full spectrum of design and delivery, from initial concept and spatial planning to architectural detailing, bespoke interior design and final installation.
            </p>
          </div>
          <div style={narrativeBodyStyle}>
            <p className="mb-6">
              With in-house expertise across interior design, architecture and project management, we offer a fully integrated service that ensures every project is cohesive, meticulously executed and tailored to its purpose. We collaborate with an international network of artisans, suppliers and craftspeople, sourcing materials and creating pieces that are both timeless and distinctive. Every decision is made with intention, considering sustainability, longevity and the story a space will tell.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-12 max-w-[1600px] mx-auto pb-48">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col border-t border-black/10 pt-12 group hover:border-black transition-colors duration-700">
              <span className="text-[12px] opacity-40 mb-8" style={bodyStyle}>0{idx + 1}</span>
              <h2 
                className="text-[32px] md:text-[42px] uppercase mb-8 leading-tight"
                style={headingStyle}
              >
                {service.title}
              </h2>
              <p 
                className="text-[14px] md:text-[16px] opacity-70 mb-12 leading-relaxed"
                style={bodyStyle}
              >
                {service.description}
              </p>
              <ul className="mt-auto space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li 
                    key={fIdx} 
                    className="text-[12px] uppercase tracking-widest flex items-center gap-3 opacity-50 font-medium"
                    style={bodyStyle}
                  >
                    <span className="w-1.5 h-1.5 bg-black/20 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <ContactForm />
      <Footer />
    </main>
  );
}
