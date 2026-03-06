import newsEducation from "@/assets/news-education.jpg";
import newsValentine from "@/assets/news-valentine.jpg";

const articles = [
  {
    category: "Education",
    title: "Local Student Scores 26/30 in Final Exam After Grueling Midterm Series",
    summary:
      "After a week of intense studying from Feb 7 to 11, the last exam concluded with a celebrated score of 26/30. The student described the result as a milestone achievement following a demanding academic period.",
    image: newsEducation,
  },
  {
    category: "Holidays",
    title: "Valentine's Day Sees Record Expressions of Long-Distance Affection Nationwide",
    summary:
      "On Feb 14, amid widespread feelings of longing across separated families, heartfelt messages were exchanged. \"Next year together in our home,\" one resident promised, echoing a sentiment shared by thousands.",
    image: newsValentine,
  },
];

const smallArticles = [
  {
    category: "Religion",
    title: "Ramadan Kareem: First Fasting Day Observed Amid Unseasonably Warm Weather",
    summary: "Sunny conditions and early morning routines marked the beginning of the holy month across the region.",
  },
  {
    category: "Sports",
    title: "Local Football Match Leaves Players Sore; Gym Attendance on the Rise",
    summary: "Community sports participation continues to grow despite physical toll on amateur athletes.",
  },
  {
    category: "Weather",
    title: "Unexpected Sunny Spell Brings Half-Sleeve Weather to the Region",
    summary: "Meteorologists report ideal conditions for outdoor activities as temperatures climb above seasonal averages.",
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
