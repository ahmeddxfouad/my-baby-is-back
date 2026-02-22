import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import CountdownCard from "@/components/CountdownCard";
import TimelineSection from "@/components/TimelineSection";
import HealthCheckSection from "@/components/HealthCheckSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";
import PrintButton from "@/components/PrintButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-2xl py-6">
        <PrintButton />
        <HeroSection />
        <HighlightsSection />
        <CountdownCard />
        <TimelineSection />
        <HealthCheckSection />
        <PhotoGallery />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
