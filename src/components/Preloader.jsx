"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = "MALMAR".split("");

const Preloader = ({ onComplete }) => {
  const [isExpanding, setIsExpanding] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#fcefd4" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="relative flex flex-col items-center justify-center w-full h-full">

        {/* 1. MALMAR Text Reveal & Move to Logo Position */}
        <motion.div
          className="flex z-30 pointer-events-none mb-4 absolute"
          animate={isExpanding ? {
            top: "40px",
            scale: 0.35,
            color: "#ffffff", // Change to white to match the Hero logo
            opacity: 0, // Fade out so the actual logo can take over
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          } : {
            top: "50%",
            y: "-50%",
            scale: 1,
            opacity: 1,
            color: "#000000"
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="text-5xl md:text-7xl font-light tracking-tighter text-black"
              style={{ fontFamily: "'SageNav', sans-serif" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>

        {/* 2. The "Window" Opening */}
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={isExpanding
            ? { width: "100%", height: "100%", borderRadius: 0 }
            : { width: "400px", height: "180px" }
          }
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
            delay: isExpanding ? 0 : 0.8
          }}
          onAnimationComplete={() => {
            if (!isExpanding) {
              // Transition immediately to expansion
              setIsExpanding(true);
            } else {
              // Finish immediately after expansion
              onComplete();
            }
          }}
          className="absolute z-10 overflow-hidden shadow-2xl bg-white"
        >
          <video
            src="/MMM.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          />
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Preloader;
