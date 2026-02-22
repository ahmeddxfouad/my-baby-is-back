const timelineData = [
  {
    date: "Feb 7",
    entries: [
      "Late night busy with midterm series.",
      "\"Sbah elkheer babe\" ☀️",
      "Miguel came today.",
      "\"I miss you my babe 🥹🥹\"",
    ],
  },
  {
    date: "Feb 8",
    entries: ["\"Sbah elkheer babe\" ☀️", "Went on a hike."],
  },
  {
    date: "Feb 9",
    entries: ["\"Sbah elkheer babe\" ☀️", "Exam today."],
  },
  {
    date: "Feb 10",
    entries: [
      "\"Sbah elkheer babe\" ☀️",
      "Tomorrow's last exam.",
      "\"اول مره 😢\"",
    ],
  },
  {
    date: "Feb 11",
    entries: [
      "\"Sbah elkheer my babe 🥹\"",
      "\"I miss youu\"",
      "Last exam at 3 PM.",
      "🎉 \"Gbt 26/30!\"",
      "Felt emotional after the call — missed you, felt stuck, didn't know what to do.",
    ],
  },
  {
    date: "Feb 12",
    entries: [
      "\"Sbah elkheer babe\" ☀️",
      "Unsure what to do, wanted to send something.",
      "Waiting for moms to coordinate.",
      "Looked for a post office — couldn't find it, felt frustrated.",
      "Lazy day.",
    ],
  },
  {
    date: "Feb 14 — Valentine's Day 💕",
    entries: [
      "Saw Maryouma on TV! → youtu.be/LkzPf5qFFts",
      "\"Sbah elkheer my love 😘\"",
      "\"Happy Valentine's Day… next year together in our home ❤️❤️\"",
      "Felt lonely but sending all my love. Always and forever.",
    ],
  },
  {
    date: "Feb 15",
    entries: [
      "Sent something to your mom — hope it reaches you, hope you like it.",
      "\"We'll make up for all this when you're back.\"",
      "Gym motivation — body in bad shape, lost weight.",
    ],
  },
  {
    date: "Feb 16",
    entries: [
      "\"Sbah elkheer amarz\" ☀️",
      "\"Counting down the days\"",
    ],
  },
  {
    date: "Feb 17",
    entries: [
      "\"Sbah elkheer ya babe\" ☀️",
      "Cake/card confusion — they messed up the order 😤",
      "\"Ramadan kareem ya baby ❤️❤️… ربنا يهونها عليكي\"",
    ],
  },
  {
    date: "Feb 18",
    entries: [
      "\"Sbah elkheer ya amora ❤️❤️\"",
      "\"I miss you 🥹🥹🥹\"",
      "\"Did you see the thing hehe\"",
    ],
  },
  {
    date: "Feb 19",
    entries: [
      "\"Sbah elkheer\" ☀️",
      "First day fasting 🌙",
      "Wore half-sleeves, sunny, hung laundry early morning.",
    ],
  },
  {
    date: "Feb 20",
    entries: [
      "\"Sbah elkheer\" ☀️",
      "\"Today is sunny 😂😂😂\"",
      "\"Are you not talking today or what?\" 😤😂",
    ],
  },
  {
    date: "Feb 21",
    entries: [
      "\"Sbah elkheer babe\" ☀️",
      "Played football — body sore.",
      "Woke up with a cold 😢",
      "\"7 days to go\" ⏳❤️",
    ],
  },
];

const TimelineSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl text-foreground mb-6 text-center">
        📝 Little Updates From Me
      </h2>
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-rose-medium rounded-full" />

        {timelineData.map((day, i) => (
          <div key={i} className="mb-6 relative">
            {/* Dot */}
            <div className="absolute -left-4 top-1.5 w-3 h-3 rounded-full bg-timeline-dot border-2 border-background" />

            <h3 className="font-semibold text-foreground mb-2 font-sans text-sm">
              {day.date}
            </h3>
            <ul className="space-y-1">
              {day.entries.map((entry, j) => (
                <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                  {entry.includes("youtu.be") ? (
                    <>
                      Saw Maryouma on TV! →{" "}
                      <a
                        href="https://youtu.be/LkzPf5qFFts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        youtu.be/LkzPf5qFFts
                      </a>
                    </>
                  ) : (
                    entry
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
