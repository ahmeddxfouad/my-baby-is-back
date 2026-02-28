const moreNews = [
  {
    category: "Daily Life",
    title: "\"Sbah Elkheer Babe\" — Morning Greetings Continue Uninterrupted for 15 Days",
  },
  {
    category: "Logistics",
    title: "Surprise Delivery Attempt Fails as Cake Shop Messes Up Order",
  },
  {
    category: "Entertainment",
    title: "Maryouma Spotted on TV; Boyfriend Sends YouTube Link Immediately",
  },
  {
    category: "Health",
    title: "Cold Strikes on Final Day; Football Blamed as Contributing Factor",
  },
  {
    category: "Society",
    title: "Mom-to-Mom Coordination Underway to Deliver Secret Package",
  },
  {
    category: "Motivation",
    title: "\"We'll Make Up for All This When You're Back\" — A Promise Renewed",
  },
];

const TimelineSection = () => {
  return (
    <section>
      <h3 className="text-xl font-bold text-foreground border-b-2 border-foreground pb-1 mb-6">
        More News
      </h3>
      <div className="space-y-4">
        {moreNews.map((n, i) => (
          <article key={i} className="border-b border-news pb-3">
            <span className="text-news-red text-xs font-bold font-sans-news uppercase">
              {n.category}
            </span>
            <h4 className="text-base font-bold text-foreground leading-snug mt-0.5">
              {n.title}
            </h4>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;
