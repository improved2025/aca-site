"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Props = {
  startsAtISO?: string; // default below
};

export default function ConventionCountdownStrip({
  startsAtISO = "2026-07-31T18:00:00",
}: Props) {
  const startsAt = useMemo(() => new Date(startsAtISO), [startsAtISO]);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const ms = Math.max(0, startsAt.getTime() - now.getTime());
  const { days, hours, minutes, seconds } = toDHMS(ms);
  const isLive = ms === 0;

  return (
    <section className="bg-[#4B0B22] text-[#F7E9D3]">
      <div className="mx-auto max-w-6xl px-4 py-4">
        <Link
          href="/convention/2026"
          className="group flex flex-col gap-3 rounded-2xl bg-white/10 px-4 py-4 ring-1 ring-white/15 hover:bg-white/12 sm:flex-row sm:items-center sm:justify-between"
          aria-label="View ACA 2026 Convention promo page"
        >
          <div>
            <div className="text-[11px] font-semibold tracking-[0.28em] text-[#F7E9D3]/80">
              ACA 2026 ANNUAL CONVENTION
            </div>
            <div className="mt-1 text-sm font-extrabold sm:text-base">
              {isLive ? "We’re live. Tap for updates." : "Maryland, get ready. Tap to view the promo page."}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <MiniPill label="Days" value={days} />
            <MiniPill label="Hrs" value={hours} />
            <MiniPill label="Min" value={minutes} />
            <MiniPill label="Sec" value={seconds} />
            <span className="ml-1 hidden text-sm font-semibold text-[#D6B15A] group-hover:text-[#E7C874] sm:inline">
              →
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

function MiniPill({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl bg-black/20 px-3 py-2 ring-1 ring-white/10">
      <div className="text-[10px] font-semibold tracking-[0.22em] text-[#F7E9D3]/70">
        {label.toUpperCase()}
      </div>
      <div className="mt-0.5 text-base font-extrabold tabular-nums text-[#F7E9D3]">
        {String(value).padStart(2, "0")}
      </div>
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