import us1 from "@/assets/us-1.png";
import us5 from "@/assets/us-5.png";
import us3 from "@/assets/us-3.png";

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Lead story */}
      <div>
        <span className="text-news-red text-sm font-bold font-sans-news uppercase tracking-wide">
          Breaking News
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mt-2 mb-4">
          My Baby Is Back 🪖: A Special Report on Love, Distance & Counting Days
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
          In a developing story that has captivated exactly one heart, sources confirm
          that the most beautiful girl in the world is completing her service — and her
          boyfriend couldn't be prouder. "I miss you more than words can say," said Ahmed,
          visibly counting down every single day.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Sbah elkheer, babe — this edition is dedicated entirely to you. Coverage
          spans Feb 7–21, 2026 with exclusive updates, photos, and at least one Valentine's
          Day message that will make you cry. ❤️
        </p>
        <p className="text-news-red text-sm font-sans-news mt-3 cursor-default">
          Full coverage below ↓
        </p>
      </div>

      {/* Hero images grid */}
      <div className="grid grid-cols-2 gap-2">
        <img
          src={us5}
          alt="Featured photo"
          className="col-span-2 w-full h-64 object-cover"
        />
        <img
          src={us1}
          alt="Photo 1"
          className="w-full h-32 object-cover"
        />
        <img
          src={us3}
          alt="Photo 2"
          className="w-full h-32 object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
