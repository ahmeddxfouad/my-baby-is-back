import { useState } from "react";

import us1 from "@/assets/us-1.png";
import us2 from "@/assets/us-2.png";
import us3 from "@/assets/us-3.png";

/**
 * To add your own photos:
 * 1. Place images in src/assets/ as us-1.png, us-2.png, etc.
 * 2. Import them above and update the photos array below.
 * 3. For images in public/images/, use "/images/us-4.jpg" as the src.
 */
const photos = [
  { src: us1, caption: "Making it official ✨" },
  { src: us2, caption: "Boss moves only 💼" },
  { src: us3, caption: "Family vibes 🥰" },
  { src: "/images/us-4.jpg", caption: "Coffee date ☕" },
  { src: "/images/us-5.jpg", caption: "That time we laughed nonstop 😂" },
  { src: "/images/us-6.jpg", caption: "Paris night walk 🌙" },
];

const PhotoGallery = () => {
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleError = (index: number) => {
    setFailedImages((prev) => new Set(prev).add(index));
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl text-foreground mb-5 text-center">Us Together 📸</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {photos.map((photo, i) => (
          <div key={i} className="rounded-xl overflow-hidden bg-card border border-border">
            {failedImages.has(i) ? (
              <div className="aspect-square bg-muted flex items-center justify-center">
                <span className="text-3xl">📷</span>
              </div>
            ) : (
              <img
                src={photo.src}
                alt={photo.caption}
                loading="lazy"
                onError={() => handleError(i)}
                className="aspect-square object-cover w-full"
              />
            )}
            <p className="text-xs text-muted-foreground text-center py-2 px-2">
              {photo.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
