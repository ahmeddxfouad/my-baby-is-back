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
    <section className="bg-news-red text-primary-foreground p-6 mb-6">
      <h3 className="text-sm font-sans-news font-bold uppercase tracking-wide mb-3">
        Live Countdown
      </h3>
      <p className="text-5xl font-bold leading-none mb-1">{daysLeft}</p>
      <p className="text-lg">
        {daysLeft === 1 ? "day" : "days"} remaining
      </p>
      <noscript>
        <p className="text-lg mt-2">7 days to go</p>
      </noscript>
    </section>
  );
};

export default CountdownCard;
