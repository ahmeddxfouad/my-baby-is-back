import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import CountdownCard from "@/components/CountdownCard";
import TimelineSection from "@/components/TimelineSection";
import PhotoGallery from "@/components/PhotoGallery";
import FooterSection from "@/components/FooterSection";
import PrintButton from "@/components/PrintButton";

const navItems = [
  "Home", "Life & Style", "Health", "Sports", "Culture", "Opinion", "World", "Multimedia"
];

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Newspaper Header */}
      <header className="border-b-2 border-foreground">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-none">
              The <span className="text-news-red">Daily</span> Update
            </h1>
            <p className="text-xs text-muted-foreground font-sans-news mt-0.5">
              Your trusted source since Feb 7, 2026
            </p>
          </div>
          <div className="text-right font-sans-news">
            <p className="text-xs text-muted-foreground">Saturday, 28 February 2026</p>
            <PrintButton />
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-news-red text-primary-foreground no-print">
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-0 overflow-x-auto">
          {navItems.map((item) => (
            <span
              key={item}
              className="px-4 py-2 text-sm font-sans-news whitespace-nowrap hover:bg-black/20 cursor-default transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <HeroSection />

        <div className="border-t border-news my-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <HighlightsSection />
            <div className="border-t border-news my-8" />
            <TimelineSection />
          </div>
          <aside className="lg:col-span-1">
            <CountdownCard />
            <div className="border-t border-news my-6" />
            <PhotoGallery />
          </aside>
        </div>

        <div className="border-t border-news my-8" />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
