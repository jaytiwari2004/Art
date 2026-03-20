"use client";
import React from 'react';

export default function ServicesSection() {
  return (
    <section className="bg-[#f0ede6] py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top: Title + Description */}
        <div className="mb-16">
          <h2
            style={{
              fontFamily: "var(--font-elicyon), 'Playfair Display', Georgia, serif",
              fontSize: "48px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "58px",
              color: "rgb(0, 0, 0)",
              letterSpacing: "0em",
            }}
          >
            OUR<br />SERVICES
          </h2>
          <p
            style={{
              fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
              fontSize: "14px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "17px",
              color: "rgb(0, 0, 0)",
              maxWidth: "310px",
              marginTop: "20px",
            }}
          >
            We craft only the most thoughtful and visionary interiors, spanning
            residential, commercial, and landmark developments across the globe.
            Each space is defined not by trend, but by intent, shaped with
            precision, narrative and considered vision.
          </p>
        </div>

        {/* Staggered Image Cards — centered */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {/* Card 1: INTERIOR DESIGN — starts higher */}
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "280px",
              flexShrink: 0,
              marginTop: "0px",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <img
              src="/img1.jpg"
              alt="Interior Design"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.22)",
              }}
            />
            {/* Title always visible */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textAlign: "center",
                  lineHeight: "1.7",
                  fontWeight: 400,
                }}
              >
                INTERIOR<br />DESIGN
              </span>
            </div>
          </div>

          {/* Card 2: ARCHITECTURE — tallest, shifted down */}
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "340px",
              flexShrink: 0,
              marginTop: "60px",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <img
              src="/img2.jpg"
              alt="Architecture"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.22)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textAlign: "center",
                  lineHeight: "1.7",
                  fontWeight: 400,
                }}
              >
                ARCHITECTURE
              </span>
            </div>
          </div>

          {/* Card 3: PROJECT MANAGEMENT — medium, shifted slightly down */}
          <div
            style={{
              position: "relative",
              width: "200px",
              height: "280px",
              flexShrink: 0,
              marginTop: "30px",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <img
              src="/img3.jpg"
              alt="Project Management"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.22)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#fff",
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "11px",
                  letterSpacing: "0.3em",
                  textAlign: "center",
                  lineHeight: "1.7",
                  fontWeight: 400,
                }}
              >
                PROJECT<br />MANAGEMENT
              </span>
            </div>
          </div>
        </div>

        {/* Bottom right: text block + explore link */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "56px" }}>
          <div style={{ maxWidth: "320px", marginLeft: "auto", marginRight: "0px" }}>


            {/* Descriptive paragraph */}
            <p
              style={{
                fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                fontSize: "14px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "22px",
                color: "rgb(0, 0, 0)",
                marginBottom: "32px",
              }}
            >
              At Elicyon, we take pride in offering a comprehensive suite of
              services that infuse every space with curated luxury, thoughtful
              consideration, and a deeply personal touch.
            </p>

            {/* EXPLORE OUR SERVICES underlined link */}
            <button
              style={{
                fontFamily: "var(--font-antique), 'EB Garamond', Georgia, serif",
                fontSize: "13px",
                fontWeight: 400,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                background: "none",
                border: "none",
                cursor: "pointer",
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
