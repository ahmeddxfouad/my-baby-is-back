const moreNews = [
  {
    category: "Daily Life",
    title: "\"Sbah Elkheer\" — Morning Greetings Continue Uninterrupted for 15 Consecutive Days",
  },
  {
    category: "Logistics",
    title: "Surprise Delivery Attempt Fails After Local Shop Reportedly Mishandles Order",
  },
  {
    category: "Entertainment",
    title: "Local Celebrity Spotted on National Television; Clip Shared Widely Online",
  },
  {
    category: "Health",
    title: "Common Cold Strikes on Final Day of Coverage Period; Physical Activity Cited as Factor",
  },
  {
    category: "Society",
    title: "Family Coordination Underway to Deliver Care Package Across Regions",
  },
  {
    category: "Opinion",
    title: "\"We Will Make Up for All This\" — Editorial on Patience and Reunion",
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
