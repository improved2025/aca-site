// app/convention/2026/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Convention2026Page() {
  // Adjust if you have a more exact start time later
  // Using local time to keep it simple.
  const startsAt = useMemo(() => new Date("2026-07-31T18:00:00"), []);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const ms = Math.max(0, startsAt.getTime() - now.getTime());
  const { days, hours, minutes, seconds } = toDHMS(ms);
  const isLive = ms === 0;

  return (
    <main className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[420px] w-[620px] rounded-full bg-[#D6B15A]/14 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        {/* Promo ribbon */}
        <div className="mb-8 rounded-3xl bg-[#4B0B22] p-5 text-[#F7E9D3] shadow-[0_18px_55px_rgba(0,0,0,0.12)] ring-1 ring-black/10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-xs font-semibold tracking-[0.28em] text-[#F7E9D3]/85">
                ACA 2026 ANNUAL CONVENTION
              </div>
              <div className="mt-2 text-lg font-extrabold md:text-xl">
                {isLive ? "We’re live. See you there." : "Countdown to Maryland."}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <CountPill label="Days" value={days} />
              <CountPill label="Hours" value={hours} />
              <CountPill label="Min" value={minutes} />
              <CountPill label="Sec" value={seconds} />
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
              OFFICIAL 2026 PROMO HUB
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
              Maryland, get ready.
            </h1>

            <p className="mt-4 max-w-xl text-base text-black/70 md:text-lg">
              Our 2026 Annual Convention lands{" "}
              <span className="font-semibold text-[#4B0B22]">July 31–August 2</span>{" "}
              at the award-winning{" "}
              <span className="font-semibold text-[#4B0B22]">Metro Points Hotel</span>{" "}
              in <span className="font-semibold text-[#4B0B22]">New Carrollton</span>.
            </p>

            {/* Event pills */}
            <div className="mt-6 flex flex-wrap gap-3">
              <Pill>July 31 – Aug 2, 2026</Pill>
              <Pill>Metro Points Hotel</Pill>
              <Pill>New Carrollton, Maryland</Pill>
            </div>

            {/* CTA stack */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link
                href="/tickets"
                className="inline-flex items-center justify-center rounded-xl bg-[#D6B15A] px-6 py-3 text-sm font-semibold text-[#4B0B22] shadow hover:brightness-95"
              >
                Get Tickets
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6A0F33]"
              >
                Sponsor or Advertise
              </Link>

              <Link
                href="/events/2026-convention"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#4B0B22] backdrop-blur hover:bg-white"
              >
                View Convention Details
              </Link>

              <Link
                href="/convention"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#4B0B22] backdrop-blur hover:bg-white"
              >
                Past Conventions
              </Link>
            </div>

            {/* Hotel quick facts */}
            <div className="mt-7 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur">
              <div className="text-sm font-semibold text-[#4B0B22]">Venue</div>
              <div className="mt-2 text-base font-extrabold text-[#1A0610]">
                Metro Points Hotel, New Carrollton, MD
              </div>
              <p className="mt-2 text-sm text-black/70">
                Hotel details, room block, and schedule will be posted here as we get closer.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <InfoChip title="Dates" value="Jul 31 – Aug 2" />
                <InfoChip title="City" value="New Carrollton" />
                <InfoChip title="State" value="Maryland" />
              </div>
            </div>
          </div>

          {/* Flyer */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/convention/2026.jpeg"
                  alt="ACA 2026 Convention Flyer"
                  fill
                  className="object-contain bg-white"
                  sizes="(max-width: 1024px) 100vw, 700px"
                  priority
                />
              </div>

              <div className="p-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-semibold text-[#4B0B22]">
                      2026 Convention Flyer
                    </div>
                    <div className="mt-1 text-sm text-black/70">
                      Share this flyer with family and friends.
                    </div>
                  </div>

                  <Link
                    href="/convention/2026"
                    className="inline-flex items-center justify-center rounded-xl bg-[#4B0B22]/10 px-4 py-2 text-sm font-semibold text-[#4B0B22] ring-1 ring-black/5 hover:bg-[#4B0B22]/15"
                  >
                    Promo Link →
                  </Link>
                </div>
              </div>
            </div>

            {/* Promo note */}
            <div className="mt-6 rounded-3xl bg-white/70 p-6 text-sm text-black/70 ring-1 ring-black/5 backdrop-blur">
              This is the official promo hub for 2026. Photos, room info, and full schedule will be added as we get closer.
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <Feature
            title="Culture + Unity"
            text="A gathering that strengthens our identity, relationships, and shared purpose."
          />
          <Feature
            title="Community Development"
            text="Updates on impact projects and where we are heading next as a community."
          />
          <Feature
            title="Next Generation"
            text="A platform to inspire, equip, and connect our youth to heritage and opportunity."
          />
        </div>

        {/* Gallery placeholder */}
        <div className="mt-12 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#4B0B22]">2026 Photo Gallery</div>
              <p className="mt-1 text-sm text-black/70">
                Photos will be added during and after the convention.
              </p>
            </div>
            <Link
              href="/convention"
              className="text-sm font-semibold text-[#4B0B22] hover:text-[#6A0F33]"
            >
              View past conventions →
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-2xl bg-black/5 ring-1 ring-black/5"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full bg-[#4B0B22]/10 px-4 py-2 text-sm font-semibold text-[#4B0B22] ring-1 ring-black/5">
      {children}
    </div>
  );
}

function CountPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/15">
      <div className="text-[10px] font-semibold tracking-[0.26em] text-[#F7E9D3]/80">
        {label.toUpperCase()}
      </div>
      <div className="mt-1 text-xl font-extrabold text-[#F7E9D3] tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
    </div>
  );
}

function InfoChip({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
      <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/50">
        {title}
      </div>
      <div className="mt-1 text-sm font-extrabold text-[#1A0610]">{value}</div>
    </div>
  );
}

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
        Highlight
      </div>
      <div className="mt-3 text-xl font-extrabold text-[#1A0610]">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{text}</p>
      <div className="mt-5 h-1.5 w-full rounded-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A] opacity-80" />
    </div>
  );
}

function toDHMS(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}