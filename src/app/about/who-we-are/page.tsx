import Link from "next/link";

export default function WhoWeArePage() {
  return (
    <main className="bg-paper">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#4B0B22]/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#4B0B22]/70">
              About
            </p>

            <h1 className="mt-3 text-3xl font-semibold text-[#4B0B22] md:text-5xl">
              Who We Are
            </h1>

            <p className="mt-6 text-base leading-relaxed text-black/80 md:text-lg">
              We are a united community of Awkuzu sons, daughters, and friends across
              the United States, dedicated to preserving our culture, uplifting our
              people, and supporting development both at home and abroad. Through
              service, charity, and shared heritage, we continue to build a stronger,
              more connected Awkuzu community. Explore our mission, join our
              initiatives, and be part of our growing legacy.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/about/mission"
                className="rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6A0F33]"
              >
                Our Mission
              </Link>

              <Link
                href="/membership"
                className="rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-black hover:border-black/20"
              >
                Become a Member
              </Link>

              <Link
                href="/impact"
                className="rounded-xl border border-[#4B0B22]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#4B0B22] hover:border-[#4B0B22]/40"
              >
                See Our Impact
              </Link>
            </div>
          </div>

          {/* visual panel (placeholder for photo/video later) */}
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/10">
              <div className="text-sm font-semibold text-[#4B0B22]">Culture</div>
              <div className="mt-2 text-sm text-black/70">
                Preserving Awkuzu heritage through shared identity and education.
              </div>
            </div>
            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/10">
              <div className="text-sm font-semibold text-[#4B0B22]">Unity</div>
              <div className="mt-2 text-sm text-black/70">
                Building strong connections across families, states, and generations.
              </div>
            </div>
            <div className="rounded-3xl bg-white/70 p-6 ring-1 ring-black/10">
              <div className="text-sm font-semibold text-[#4B0B22]">Development</div>
              <div className="mt-2 text-sm text-black/70">
                Supporting projects that create real outcomes in Awkuzu and beyond.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
