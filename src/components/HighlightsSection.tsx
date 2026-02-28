import us2 from "@/assets/us-2.png";
import us4 from "@/assets/us-4.png";

const articles = [
  {
    category: "Education",
    title: "Local Student Scores 26/30 in Final Exam After Grueling Midterm Series",
    summary:
      "After a week of intense studying from Feb 7–11, the last exam concluded with a celebrated score of 26/30. \"Hard work paid off, babe,\" the student reportedly said.",
    image: us4,
  },
  {
    category: "Holidays",
    title: "Valentine's Day: \"Next Year Together in Our Home,\" Promises Long-Distance Boyfriend",
    summary:
      "On Feb 14, amid feelings of longing, a heartfelt message was sent: \"Happy Valentine's Day… next year together in our home ❤️❤️.\" Celebrations were reportedly solo but full of love.",
    image: us2,
  },
];

const smallArticles = [
  {
    category: "Religion",
    title: "Ramadan Kareem: First Fasting Day Observed with Half-Sleeves & Early Laundry",
    summary: "\"ربنا يهونها عليكي\" — sunny weather reported, laundry hung at dawn.",
  },
  {
    category: "Sports",
    title: "Football Match Leaves Local Man Sore; Gym Motivation at All-Time High",
    summary: "Body in bad shape, weight lost — but spirits remain unbreakable.",
  },
  {
    category: "Weather",
    title: "Unexpected Sunny Spell Brings Half-Sleeve Weather to the Region",
    summary: "\"Today is sunny 😂😂😂\" — sources report perfect conditions for outdoor activities.",
  },
];

const HighlightsSection = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 mb-6">
        Top Stories
      </h3>

      {/* Big articles */}
      <div className="space-y-6 mb-8">
        {articles.map((a, i) => (
          <article key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src={a.image}
              alt={a.title}
              className="w-full h-48 object-cover md:col-span-1"
            />
            <div className="md:col-span-2">
              <span className="text-news-red text-xs font-bold font-sans-news uppercase">
                {a.category}
              </span>
              <h4 className="text-xl font-bold text-foreground leading-snug mt-1 mb-2">
                {a.title}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.summary}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Small articles row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {smallArticles.map((a, i) => (
          <article key={i} className="border-t border-news pt-4">
            <span className="text-news-red text-xs font-bold font-sans-news uppercase">
              {a.category}
            </span>
            <h4 className="text-base font-bold text-foreground leading-snug mt-1 mb-1">
              {a.title}
            </h4>
            <p className="text-xs text-muted-foreground">{a.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
