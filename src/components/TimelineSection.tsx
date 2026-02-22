const updates = [
  {
    emoji: "📚",
    title: "Exam Season Survived",
    desc: "Midterm series wrapped up Feb 7–11. Last exam was on the 11th — scored 26/30! 🎉",
  },
  {
    emoji: "💕",
    title: "Valentine's Day",
    desc: "\"Happy Valentine's Day… next year together in our home ❤️\" — spent the day missing you and sending all my love.",
  },
  {
    emoji: "🌙",
    title: "Ramadan Kareem",
    desc: "\"Ramadan kareem ya baby ❤️ ربنا يهونها عليكي\" — first fasting day was Feb 19, hung laundry at dawn in half-sleeves!",
  },
  {
    emoji: "⚽",
    title: "Staying Active",
    desc: "Went hiking, hit the gym, played football — body's sore but spirits are high.",
  },
  {
    emoji: "🎂",
    title: "Surprise Attempts",
    desc: "Tried sending you something through our moms, fought with a cake/card shop that messed up the order 😤",
  },
  {
    emoji: "☀️",
    title: "Daily Sbah Elkheer",
    desc: "Every single morning, without fail — \"Sbah elkheer babe\" ☀️. Some things never change.",
  },
];

const TimelineSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl text-foreground mb-2 text-center">
        What's Been Happening 📝
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-8">
        A few updates while you've been away
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {updates.map((u, i) => (
          <div
            key={i}
            className="bg-card rounded-xl p-6 border border-border"
          >
            <div className="text-3xl mb-3">{u.emoji}</div>
            <h3 className="font-semibold text-foreground mb-2 text-lg">{u.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
