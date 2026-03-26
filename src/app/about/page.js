"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const textStyle = {
    fontFamily: 'var(--font-elicyon), serif',
    fontWeight: 400,
    color: "rgb(0, 0, 0)",
  };

  const bodyStyle = {
    fontFamily: 'var(--font-antique), serif',
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.7)",
  };

  return (
    <main className="min-h-screen bg-[#f0ede6] selection:bg-stone-200">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 md:pt-48 pb-20 px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Branding Image */}
          <div className="relative h-[400px] md:h-[700px] w-full group overflow-hidden shadow-2xl">
            <img
              src="/img3.jpg"
              alt="Luxury Interior Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Right: Intro Text */}
          <div className="flex flex-col space-y-12">
            <div>
              <h1
                className="text-[48px] md:text-[64px] leading-[56px] md:leading-[72px] uppercase mb-8"
                style={textStyle}
              >
                Welcome in<br />our world
              </h1>
              <p
                className="text-[18px] md:text-[22px] leading-[28px] md:leading-[32px] font-normal"
                style={textStyle}
              >
                Our architecture and design practice offers only the finest services, drawing from our extensive experience in the industry.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-[14px] md:text-[16px] leading-[24px] tracking-wide" style={bodyStyle}>
                We strongly believe that a home or business should be a genuine expression of your unique individuality or the essence of your entreprise. It should embody the way you aspire to live, encompassing the ideas that define your unique tastes, perspectives, and connections to the world.
              </p>

              <div className="py-12 border-y border-black/10">
                <blockquote className="text-[28px] md:text-[36px] italic leading-tight" style={textStyle}>
                  ”It’s not about space but about time and imagination”
                </blockquote>
              </div>

              <p className="text-[14px] md:text-[16px] leading-[24px] tracking-wide" style={bodyStyle}>
                Its not only about the aesthetics and functionality of a space, but also with how it evolves and adapts over time. The dynamic nature of design and architecture and its ability to shape and be shaped by the passage of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perspective Section */}
      <section className="py-24 bg-stone-900/5 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[32px] md:text-[40px] uppercase mb-12 tracking-[0.2em]" style={textStyle}>
            Our Perspective
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            <div className="space-y-6">
              <p className="text-[16px] leading-[26px]" style={bodyStyle}>
                Our work reflects each client’s unique identity and lifestyle—sometimes bold and dramatic, other times subtle and refined.
              </p>
              <p className="text-[16px] leading-[26px]" style={bodyStyle}>
                With expertise in traditional, contemporary, and local design, our diverse perspective embraces many styles and pushes creative boundaries. We love collaborating with artists and sourcing distinctive pieces to elevate every space.
              </p>
            </div>
            <div className="space-y-6 flex flex-col justify-center">
              <p className="text-[16px] leading-[26px] italic" style={textStyle}>
                We research and apply eco-friendly and sustainable materials where possible to create interiors that harmonize with their natural surroundings and evoke a sense of calm and balance, a true retreat from everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-end">
          <div className="flex-1">
            <h2 className="text-[32px] md:text-[40px] uppercase mb-8" style={textStyle}>
              Our Vision
            </h2>
            <p className="text-[18px] md:text-[24px] leading-relaxed mb-12" style={textStyle}>
              We strive to craft timeless spaces that go beyond trends. Our focus on quality, precision, and sustainability distinguishes us in the realm of interior design.
            </p>
          </div>
          <div className="flex-1 bg-white p-12 md:p-20 shadow-xl border-t-8 border-stone-800">
            <p className="text-[16px] leading-[28px] mb-8" style={bodyStyle}>
              If you aim to turn your home into a harmonious sanctuary that resonates with its surroundings or historical significance, let us infuse that essence into your living space. We will create a design that authentically mirrors your individual style.
            </p>
            <button className="text-[14px] uppercase tracking-[0.3em] font-medium border-b border-black pb-2 hover:opacity-10 transition-all">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
