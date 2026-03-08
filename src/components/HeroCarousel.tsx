"use client";

import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  type: "video";
  src: string;
};

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const slides: Slide[] = [
    { type: "video", src: "/hero/hero.mp4" },
    { type: "video", src: "/hero/hero2.mp4" },
  ];

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
              <div className="relative h-[68vh] min-h-[460px] w-full md:h-[75vh] md:min-h-[520px]">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/40" />

                {/* CTA layer */}
                <div className="absolute inset-x-0 bottom-12 md:bottom-14">
                  <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 sm:px-5 md:flex-row md:items-end">
                    <div className="max-w-2xl">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-white/70 sm:text-xs">
                        Welcome to ACA • Unity and Progress
                      </div>

                      <h1 className="mt-3 max-w-[13ch] text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-2 md:max-w-none md:text-5xl">
                        Awkuzu Cultural Association (USA)
                      </h1>

                      <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:max-w-xl md:text-base">
                        A 501(c)(3) nonprofit serving community development, culture, and impact.
                      </p>
                    </div>

                    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                      <Link
                        href="/donate"
                        className="inline-flex items-center justify-center rounded-xl bg-cream px-6 py-3 text-sm font-semibold text-wine hover:bg-white"
                      >
                        Donate
                      </Link>

                      <Link
                        href="/convention/2026"
                        className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:border-white/50"
                      >
                        Convention
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0">
                  <div className="mx-auto flex max-w-6xl gap-2 px-4 sm:px-5">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
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