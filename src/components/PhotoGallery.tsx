import { useState } from "react";

import us1 from "@/assets/us-1.png";
import us2 from "@/assets/us-2.png";
import us3 from "@/assets/us-3.png";
import us4 from "@/assets/us-4.png";
import us5 from "@/assets/us-5.png";
import us6 from "@/assets/us-6.png";
import us7 from "@/assets/us-7.png";

const photos = [
  { src: us1, caption: "Making it official ✨", message: "The day everything changed. I knew you were the one, amora ❤️" },
  { src: us2, caption: "Boss moves only 💼", message: "Look at us being all grown up and professional 😂❤️" },
  { src: us3, caption: "Family vibes 🥰", message: "My favorite people in the whole world, all in one place." },
  { src: us4, caption: "Snow day adventures ❄️", message: "We were freezing but your smile kept me warm, wallahi 🥹" },
  { src: us5, caption: "Our fairytale moment 🌿", message: "You looked like a dream. I still can't believe you're mine." },
  { src: us6, caption: "Coffee date ☕", message: "Simple moments with you are my favorite. Caprese Pesto & you 😍" },
  { src: us7, caption: "The OG duo 👶", message: "Before everything, there was us. Some things never change ❤️" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-foreground mb-2 text-center">Us Together 📸</h2>
      <p className="text-sm text-muted-foreground text-center mb-8">Click on any photo for a little message ❤️</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden bg-card border border-border cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => setSelectedPhoto(selectedPhoto === i ? null : i)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              className="aspect-square object-cover w-full"
            />
            <div className="px-3 py-2">
              <p className="text-sm text-foreground font-medium text-center">
                {photo.caption}
              </p>
              {selectedPhoto === i && (
                <p className="text-xs text-muted-foreground text-center mt-2 pb-1 animate-fade-in">
                  {photo.message}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Overlay for selected photo */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-card rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].caption}
              className="w-full max-h-[60vh] object-contain bg-black/10"
            />
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {photos[selectedPhoto].caption}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {photos[selectedPhoto].message}
              </p>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="mt-4 text-sm text-primary hover:underline"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
