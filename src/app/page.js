"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import HeroSection from "@/components/HeroSection";
import ElicyonTextSection from "@/components/ElicyonTextSection";
import ProjectSection from "@/components/ProjectSection";
import ServicesSection from "@/components/ServicesSection";
import VisionSection from "@/components/VisionSection";
import InsightsSection from "@/components/InsightsSection";
import ObjectsOfDesire from "@/components/ObjectsOfDesire";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-white">
      <AnimatePresence>
        {isLoading && (
          <Preloader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-white"
        >
          <HeroSection />
          <ElicyonTextSection />
          <ProjectSection />
          <ServicesSection />
          <VisionSection />
          <InsightsSection />
          <ObjectsOfDesire />
          <ContactSection />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
