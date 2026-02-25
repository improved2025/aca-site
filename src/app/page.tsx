import HeroCarousel from "@/components/HeroCarousel";
import ConventionCountdownStrip from "@/components/ConventionCountdownStrip";
import ImpactMarquee from "@/components/ImpactMarquee";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <HeroCarousel />

      {/* Promo countdown (thin, premium, clickable) */}
      <ConventionCountdownStrip />

      {/* Quick actions (more visual, less text) */}
      <section className="relative mt-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 pb-10 md:grid-cols-4">
          <QuickCard title="Donate" hint="Support projects" href="/donate" icon="heart" />
          <QuickCard title="Tickets" hint="Convention access" href="/tickets" icon="ticket" />
          <QuickCard title="Raffle" hint="Buy raffle entries" href="/raffle" icon="spark" />
          <QuickCard title="Hotel" hint="Reservation link" href="/events/2026-convention" icon="building" />
        </div>
      </section>

      {/* Moving Impact */}
      <ImpactMarquee />
    </main>
  );
}

function QuickCard({
  title,
  hint,
  href,
  icon,
}: {
  title: string;
  hint: string;
  href: string;
  icon: "heart" | "ticket" | "spark" | "building";
}) {
  const iconChar =
    icon === "heart" ? "♥" : icon === "ticket" ? "⌁" : icon === "spark" ? "✦" : "▦";

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-black/10 backdrop-blur transition hover:-translate-y-[2px] hover:bg-white hover:shadow-md"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B44A6A]/10 blur-2xl transition group-hover:bg-[#D6B15A]/15" />
      <div className="flex items-start justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
            Quick action
          </div>
          <div className="mt-2 text-lg font-semibold text-[#5A102A]">{title}</div>
          <div className="mt-1 text-sm text-black/70">{hint}</div>
        </div>

        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black/5 text-lg text-[#5A102A] ring-1 ring-black/10">
          {iconChar}
        </div>
      </div>

      <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-black/80">
        Open <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </Link>
  );
}