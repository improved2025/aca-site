"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  // For now we only use ONE video slide.
  // Later you can add images easily.
  const slides = [{ type: "video", src: "/hero/hero.mp4" }];

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();

    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="relative bg-black">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex-[0_0_100%]">
              <div className="relative h-[75vh] min-h-[520px] w-full">
                <video
                  className="h-full w-full object-cover"
                  src={slide.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />

                {/* CTA layer */}
                <div className="absolute bottom-12 left-0 right-0">
                  <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                        Welcome to ACA • Unity and Progress
                      </div>

                      <h1 className="mt-2 text-3xl font-semibold text-white md:text-5xl">
                        Awkuzu Cultural Association (USA)
                      </h1>

                      <p className="mt-3 max-w-xl text-sm text-white/75 md:text-base">
                        A 501(c)(3) nonprofit serving community development, culture, and impact.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Link
                        href="/donate"
                        className="rounded-xl bg-cream px-6 py-3 text-sm font-semibold text-wine hover:bg-white"
                      >
                        Donate
                      </Link>

                      <Link
                        href="/events/2026-convention"
                        className="rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/50"
                      >
                        Convention
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Dots (future-ready for multiple slides) */}
                <div className="absolute bottom-4 left-0 right-0">
                  <div className="mx-auto flex max-w-6xl gap-2 px-4">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => emblaApi?.scrollTo(idx)}
                        className={`h-2 w-2 rounded-full transition ${
                          selected === idx ? "bg-cream" : "bg-white/40"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
