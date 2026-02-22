import { useState } from "react";

const moods = ["😞", "😐", "🙂", "😄"];
const stressLevels = ["low", "medium", "high"];

const HealthCheckSection = () => {
  const [checks, setChecks] = useState({
    sleep: false,
    water: false,
    food: false,
    vitamins: false,
    stretch: false,
  });
  const [mood, setMood] = useState<number | null>(null);
  const [stress, setStress] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const toggle = (key: keyof typeof checks) => {
    setChecks((c) => ({ ...c, [key]: !c[key] }));
  };

  const copyCheckin = () => {
    const lines = [
      `🩺 Health Check-In`,
      `Sleep: ${checks.sleep ? "✅" : "❌"}`,
      `Water: ${checks.water ? "✅" : "❌"}`,
      `Food: ${checks.food ? "✅" : "❌"}`,
      `Vitamins: ${checks.vitamins ? "✅" : "❌"}`,
      `Stretch/Walk: ${checks.stretch ? "✅" : "❌"}`,
      `Mood: ${mood !== null ? moods[mood] : "—"}`,
      `Stress: ${stress || "—"}`,
      note ? `Note: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    navigator.clipboard.writeText(lines).then(() => {
      alert("Copied to clipboard! 💕");
    });
  };

  const checkItems = [
    { key: "sleep" as const, label: "Slept enough 😴" },
    { key: "water" as const, label: "Drank water 💧" },
    { key: "food" as const, label: "Ate something good 🍽️" },
    { key: "vitamins" as const, label: "Took vitamins/meds 💊" },
    { key: "stretch" as const, label: "Did a stretch or walk 🚶‍♀️" },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl text-foreground mb-5 text-center">
        💛 How are you today, my love?
      </h2>
      <div className="bg-warm-gold-soft rounded-2xl p-6 space-y-5">
        {/* Checkboxes */}
        <div className="space-y-3">
          {checkItems.map((item) => (
            <label
              key={item.key}
              className="flex items-center gap-3 cursor-pointer text-sm text-foreground"
            >
              <input
                type="checkbox"
                checked={checks[item.key]}
                onChange={() => toggle(item.key)}
                className="w-4 h-4 rounded accent-primary"
              />
              {item.label}
            </label>
          ))}
        </div>

        {/* Mood */}
        <div>
          <p className="text-sm text-foreground mb-2">Mood check:</p>
          <div className="flex gap-3">
            {moods.map((m, i) => (
              <button
                key={i}
                onClick={() => setMood(i)}
                className={`text-2xl p-1 rounded-lg transition-all ${
                  mood === i ? "bg-accent ring-2 ring-primary scale-110" : "hover:scale-110"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Stress */}
        <div>
          <p className="text-sm text-foreground mb-2">Stress level:</p>
          <div className="flex gap-2">
            {stressLevels.map((level) => (
              <button
                key={level}
                onClick={() => setStress(level)}
                className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                  stress === level
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground border-border hover:bg-accent"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Note */}
        <div>
          <p className="text-sm text-foreground mb-2">Anything you want to tell me?</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write here, amora…"
            rows={3}
            className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Copy button */}
        <button
          onClick={copyCheckin}
          className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
        >
          📋 Copy my check-in
        </button>
      </div>
    </section>
  );
};

export default HealthCheckSection;
