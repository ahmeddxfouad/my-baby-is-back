import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import CountdownCard from "@/components/CountdownCard";
import TimelineSection from "@/components/TimelineSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";
import PrintButton from "@/components/PrintButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-5xl px-6 py-10">
        <PrintButton />
        <HeroSection />
        <HighlightsSection />
        <CountdownCard />
        <TimelineSection />
        <PhotoGallery />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
