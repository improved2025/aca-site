import Link from "next/link";

export default function MissionPage() {
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
              Our Mission
            </h1>

            <p className="mt-6 text-base leading-relaxed text-black/80 md:text-lg">
              Our mission is to promote Awkuzu culture, support community development,
              and empower Awkuzu families in the United States and in our hometown. We
              achieve this through cultural education, charitable projects, youth
              engagement, and programs that strengthen unity, heritage, and collective
              progress.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-[#D6B15A] px-6 py-3 text-sm font-semibold text-[#4B0B22] hover:brightness-95"
              >
                Support Our Work
              </Link>

              <Link
                href="/about/vision"
                className="rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6A0F33]"
              >
                Our Vision
              </Link>

              <Link
                href="/impact"
                className="rounded-xl border border-[#4B0B22]/20 bg-transparent px-6 py-3 text-sm font-semibold text-[#4B0B22] hover:border-[#4B0B22]/40"
              >
                Projects & Impact
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-white/70 p-7 ring-1 ring-black/10">
              <div className="text-sm font-semibold text-[#4B0B22]">How we do it</div>
              <ul className="mt-4 grid gap-3 text-sm text-black/75">
                <li className="rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
                  Cultural education and heritage programs
                </li>
                <li className="rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
                  Charitable projects with transparent outcomes
                </li>
                <li className="rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
                  Youth engagement and future-generation leadership
                </li>
                <li className="rounded-2xl bg-white/60 p-4 ring-1 ring-black/5">
                  Programs that strengthen unity and collective progress
                </li>
              </ul>
            </div>

            <div className="rounded-3xl bg-[#4B0B22] p-7 text-white shadow-lg">
              <div className="text-sm font-semibold text-[#F7E9D3]">What we value</div>
              <div className="mt-4 grid gap-3 text-sm text-white/85">
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  Service with dignity
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  Unity across differences
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  Heritage that outlives us
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  Progress that can be measured
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
