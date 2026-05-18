import Link from "next/link";

const impactItems = [
  {
    title: "Water Supply Project",
    category: "Infrastructure",
    text: "Supporting reliable access to clean water for families and public spaces in Awkuzu.",
  },
  {
    title: "Community Library Project",
    category: "Education",
    text: "Strengthening literacy, learning, and academic support for the next generation.",
  },
  {
    title: "COVID-19 Palliatives",
    category: "Relief",
    text: "Providing essential support to vulnerable households during a critical season.",
  },
  {
    title: "Maternity Support Project",
    category: "Health",
    text: "Supporting mothers and local healthcare needs with practical resources.",
  },
  {
    title: "Imaging Center Equipment Donation",
    category: "Healthcare",
    text: "Helping expand diagnostic capacity through medical equipment support.",
  },
  {
    title: "Community School Fence Project",
    category: "Safety",
    text: "Improving school safety through perimeter and infrastructure support.",
  },
];

export default function ImpactPage() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-5 md:pb-24 md:pt-16">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
            OUR IMPACT
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#4B0B22] sm:text-4xl md:text-6xl">
            Community-driven impact
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base md:text-lg">
            ACA supports projects that preserve culture, strengthen families, and improve lives in Awkuzu and across the diaspora.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {impactItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.14)]"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
                {item.category}
              </div>

              <h2 className="mt-3 text-xl font-extrabold text-[#1A0610]">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-black/70">
                {item.text}
              </p>

              <div className="mt-6 h-1.5 w-full rounded-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl bg-[#4B0B22] p-7 text-[#F7E9D3] shadow-lg">
          <h2 className="text-2xl font-extrabold">Support the next project.</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#F7E9D3]/85">
            Your giving helps us continue meaningful work in healthcare, education, infrastructure, and community development.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/donate"
              className="rounded-xl bg-[#D6B15A] px-6 py-3 text-sm font-bold text-[#4B0B22] hover:brightness-95"
            >
              Donate
            </Link>

            <Link
              href="/membership"
              className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white hover:bg-white/15"
            >
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}