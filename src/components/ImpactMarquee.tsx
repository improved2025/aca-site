"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  category: string;
  title: string;
  tone: "wine" | "rose" | "gold";
  summary: string;
  bullets: string[];
  ctaLabel?: string;
  ctaHref?: string;
};

const items: Item[] = [
  {
    category: "Infrastructure",
    title: "Water Supply Project",
    tone: "gold",
    summary: "Reliable access to clean water for families and public spaces.",
    bullets: ["Borehole + storage support", "Community-led maintenance plan", "Ongoing upgrades"],
    ctaLabel: "Support this project",
    ctaHref: "/donate",
  },
  {
    category: "Education",
    title: "Community Library Project",
    tone: "rose",
    summary: "A learning hub to strengthen literacy and academic outcomes.",
    bullets: ["Books + study resources", "After-school learning space", "Volunteer-led programs"],
    ctaLabel: "View impact",
    ctaHref: "/impact",
  },
  {
    category: "Relief",
    title: "COVID-19 Palliatives",
    tone: "wine",
    summary: "Rapid relief for vulnerable households during crisis periods.",
    bullets: ["Food + essentials distribution", "Community coordination", "Transparent delivery"],
    ctaLabel: "See details",
    ctaHref: "/impact",
  },
  {
    category: "Health",
    title: "Maternity Support Project",
    tone: "rose",
    summary: "Support for mothers with essentials and care resources.",
    bullets: ["Mother-care packs", "Local clinic partnerships", "Focused outreach"],
    ctaLabel: "Donate",
    ctaHref: "/donate",
  },
  {
    category: "Healthcare",
    title: "Imaging Center Equipment Donation",
    tone: "gold",
    summary: "Equipment support to expand diagnostics capacity.",
    bullets: ["Equipment contribution", "Operational support", "Community benefit focus"],
    ctaLabel: "Learn more",
    ctaHref: "/impact",
  },
  {
    category: "Safety",
    title: "Community School Fence Project",
    tone: "wine",
    summary: "Improved school safety through perimeter upgrades.",
    bullets: ["Fence construction support", "Community labor coordination", "Long-term safety"],
    ctaLabel: "Support",
    ctaHref: "/donate",
  },
];

function toneClasses(tone: Item["tone"]) {
  switch (tone) {
    case "wine":
      return "from-[#4B0B22] via-[#6A0F33] to-[#1A0610] text-white";
    case "rose":
      return "from-[#B1165A] via-[#7A0D3A] to-[#2A0715] text-white";
    case "gold":
      return "from-[#D6B15A] via-[#A8832E] to-[#2A1E08] text-[#1A0A12]";
  }
}

export default function ImpactMarquee() {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const strip = useMemo(() => [...items, ...items], []);
  const [active, setActive] = useState<Item | null>(null);

  // Smooth autoplay marquee (scrollLeft)
  useEffect(() => {
    const viewport = viewportRef.current;
    const content = contentRef.current;
    if (!viewport || !content) return;

    let raf = 0;
    let last = performance.now();
    const speed = 60; // px/sec

    const tick = (t: number) => {
      // pause when modal open
      if (active) {
        raf = requestAnimationFrame(tick);
        last = t;
        return;
      }

      const dt = (t - last) / 1000;
      last = t;

      viewport.scrollLeft += speed * dt;

      const half = content.scrollWidth / 2;
      if (viewport.scrollLeft >= half) viewport.scrollLeft -= half;

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Prevent background scroll when modal open
  useEffect(() => {
    if (!active) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [active]);

  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold text-[#4B0B22] md:text-3xl">
                Our Impact
              </h2>
              <p className="mt-2 max-w-2xl text-black/70">
                Tap any project to expand details.
              </p>
            </div>

            <Link
              href="/impact"
              className="rounded-xl bg-[#4B0B22] px-4 py-2 text-sm font-semibold text-white hover:bg-[#6A0F33]"
            >
              View all →
            </Link>
          </div>

          <div
            ref={viewportRef}
            className="mt-7 overflow-hidden rounded-3xl bg-white/60 ring-1 ring-black/10 backdrop-blur"
          >
            <div ref={contentRef} className="flex w-max">
              {strip.map((it, idx) => (
                <button
                  key={`${it.title}-${idx}`}
                  type="button"
                  onClick={() => setActive(it)}
                  className="flex-[0_0_320px] p-4 text-left"
                  aria-label={`Open ${it.title}`}
                >
                  <div
                    className={`group relative h-32 overflow-hidden rounded-2xl bg-gradient-to-br ${toneClasses(
                      it.tone
                    )} p-5 shadow-lg transition hover:-translate-y-[2px] hover:shadow-xl`}
                  >
                    <div className="text-[11px] uppercase tracking-wide opacity-80">
                      {it.category}
                    </div>

                    <div className="mt-2 text-base font-semibold">{it.title}</div>

                    <div className="mt-6 text-xs opacity-90">Click to expand →</div>

                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute -left-10 top-6 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
                      <div className="absolute -right-16 -top-10 h-36 w-36 rounded-full bg-white/12 blur-2xl" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Netflix-style modal */}
      {active && (
        <div className="fixed inset-0 z-[80]">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/70"
            onClick={() => setActive(null)}
            aria-label="Close"
          />

          {/* Panel */}
          <div className="relative mx-auto mt-10 w-[92vw] max-w-5xl overflow-hidden rounded-3xl bg-[#0F0610] text-white shadow-2xl ring-1 ring-white/10 md:mt-16">
            {/* Open animation */}
            <div className="animate-[pop_.18s_ease-out]">
              {/* Top media area */}
              <div className="relative h-[260px] md:h-[360px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${toneClasses(active.tone)}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0610] via-black/25 to-black/40" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-xs uppercase tracking-[0.26em] text-white/70">
                    {active.category}
                  </div>
                  <div className="mt-2 text-2xl font-semibold md:text-4xl">
                    {active.title}
                  </div>
                  <div className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
                    {active.summary}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="absolute right-4 top-4 rounded-full bg-black/55 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-black/75"
                >
                  Close
                </button>
              </div>

              {/* Content */}
              <div className="grid gap-8 p-6 md:grid-cols-12 md:p-8">
                <div className="md:col-span-7">
                  <div className="text-sm font-semibold text-white/90">
                    What this includes
                  </div>
                  <ul className="mt-4 grid gap-3">
                    {active.bullets.map((b) => (
                      <li
                        key={b}
                        className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/85 ring-1 ring-white/10"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-5">
                  <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
                    <div className="text-sm font-semibold">Take action</div>
                    <div className="mt-2 text-sm text-white/75">
                      Your support turns projects into real outcomes.
                    </div>

                    <div className="mt-5 flex flex-col gap-3">
                      <Link
                        href={active.ctaHref || "/donate"}
                        className="rounded-xl bg-[#D6B15A] px-5 py-3 text-sm font-semibold text-[#4B0B22] hover:brightness-95"
                      >
                        {active.ctaLabel || "Support this project"}
                      </Link>

                      <Link
                        href="/impact"
                        className="rounded-xl border border-white/20 bg-transparent px-5 py-3 text-sm font-semibold text-white hover:border-white/40"
                      >
                        Browse all impact
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 text-xs text-white/60">
                    Tip: press Esc to close.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* keyframes */}
          <style jsx>{`
            @keyframes pop {
              from {
                transform: translateY(10px) scale(0.98);
                opacity: 0;
              }
              to {
                transform: translateY(0) scale(1);
                opacity: 1;
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
