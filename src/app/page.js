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
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ElicyonTextSection />
      <ProjectSection />
      <ServicesSection />
      <VisionSection />
      <InsightsSection />
      <ObjectsOfDesire />
      <ContactSection />
      <Footer />
    </main>
  );
}
