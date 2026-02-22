import { useState, useEffect } from "react";

/**
 * CONFIG: Change this date to update the countdown target.
 * Format: "YYYY-MM-DD"
 */
const TARGET_DATE = "2026-02-28";

const CountdownCard = () => {
  const [daysLeft, setDaysLeft] = useState<number>(() => {
    const now = new Date();
    const target = new Date(TARGET_DATE);
    const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const target = new Date(TARGET_DATE);
      const diff = Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
      setDaysLeft(Math.max(0, diff));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mb-8">
      <div className="bg-rose-soft rounded-2xl p-8 text-center">
        <p className="text-sm text-muted-foreground mb-2">Until we're together again</p>
        <p className="text-6xl font-bold text-primary mb-2" style={{ fontFamily: "Georgia, serif" }}>
          {daysLeft}
        </p>
        <p className="text-lg text-foreground">
          {daysLeft === 1 ? "day to go" : "days to go"} ❤️
        </p>
        <noscript>
          <p className="text-lg text-foreground mt-2">7 days to go ❤️</p>
        </noscript>
      </div>
    </section>
  );
};

export default CountdownCard;
