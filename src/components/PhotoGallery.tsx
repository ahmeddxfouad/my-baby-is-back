import { useState } from "react";

import us1 from "@/assets/us-1.png";
import us2 from "@/assets/us-2.png";
import us3 from "@/assets/us-3.png";
import us4 from "@/assets/us-4.png";
import us5 from "@/assets/us-5.png";
import us6 from "@/assets/us-6.png";
import us7 from "@/assets/us-7.png";

const photos = [
  { src: us1, caption: "Archive Photo 1", message: "The day everything changed. I knew you were the one, amora." },
  { src: us2, caption: "Archive Photo 2", message: "Look at us being all grown up and professional." },
  { src: us3, caption: "Archive Photo 3", message: "My favorite people in the whole world, all in one place." },
  { src: us4, caption: "Archive Photo 4", message: "We were freezing but your smile kept me warm, wallahi." },
  { src: us5, caption: "Archive Photo 5", message: "You looked like a dream. I still can't believe you're mine." },
  { src: us6, caption: "Archive Photo 6", message: "Simple moments with you are my favorite." },
  { src: us7, caption: "Archive Photo 7", message: "Before everything, there was us. Some things never change." },
];

const PhotoGallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section>
      <h3 className="text-sm font-sans-news font-bold uppercase tracking-wide text-news-red mb-3">
        Multimedia
      </h3>
      <div className="grid grid-cols-2 gap-1.5">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="relative cursor-pointer overflow-hidden group"
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="w-full aspect-square object-cover group-hover:opacity-80 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-2 py-1">
              <p className="text-white text-[10px] font-sans-news truncate">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-card max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selected].src}
              alt={photos[selected].caption}
              className="w-full max-h-[60vh] object-contain bg-black/10"
            />
            <div className="p-5">
              <h4 className="text-lg font-bold text-foreground mb-1">
                {photos[selected].caption}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {photos[selected].message}
              </p>
              <button
                onClick={() => setSelected(null)}
                className="mt-3 text-xs text-news-red font-sans-news hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
