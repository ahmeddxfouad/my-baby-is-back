import newsHero from "@/assets/news-hero.jpg";
import newsWeather from "@/assets/news-weather.jpg";
import newsRamadan from "@/assets/news-ramadan.jpg";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Lead story */}
      <div>
        <span className="text-news-red text-sm font-bold font-sans-news uppercase tracking-wide">
          Breaking News
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2 mb-4">
          National Service Update: A Special Report on Resilience, Distance and Counting Days
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          In a developing story that has captivated the nation, sources confirm
          that service members across the country continue to demonstrate remarkable
          strength and dedication. Family members report an outpouring of support
          and pride as the countdown to reunion enters its final stretch.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          This special edition covers the period of Feb 7 through 21, 2026 with exclusive
          updates from the field, regional developments, and community highlights.
        </p>
        <p className="text-news-red text-sm font-sans-news mt-3 cursor-default">
          Full coverage below
        </p>
      </div>

      {/* Hero images grid */}
      <div className="grid grid-cols-2 gap-2">
        <img
          src={newsHero}
          alt="City street scene"
          className="col-span-2 w-full h-64 object-cover"
        />
        <img
          src={newsWeather}
          alt="Regional weather outlook"
          className="w-full h-32 object-cover"
        />
        <img
          src={newsRamadan}
          alt="Ramadan observances"
          className="w-full h-32 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
