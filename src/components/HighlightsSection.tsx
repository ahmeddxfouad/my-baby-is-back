const highlights = [
  { emoji: "📚", title: "Exams Week", desc: "Survived a brutal midterm series — last exam on Feb 11!" },
  { emoji: "🎉", title: "26/30!", desc: "Celebrated the score. Hard work paid off, babe." },
  { emoji: "💕", title: "Valentine's Day", desc: "\"Happy Valentine's Day… next year together in our home ❤️\"" },
  { emoji: "🌙", title: "Ramadan Kareem", desc: "First fasting day on Feb 19. ربنا يهونها عليكي" },
  { emoji: "☀️", title: "Sunny Days", desc: "Half-sleeves weather, hung laundry at dawn, and played football." },
  { emoji: "⏳", title: "7 Days To Go", desc: "The countdown is on. Almost there, amora." },
];

const HighlightsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl text-foreground mb-6 text-center">✨ Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {highlights.map((h, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-6 border border-border hover:bg-accent transition-colors"
          >
            <div className="text-3xl mb-3">{h.emoji}</div>
            <h3 className="font-semibold text-foreground mb-1 text-lg">{h.title}</h3>
            <p className="text-sm text-muted-foreground">{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighlightsSection;
