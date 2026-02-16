// app/groups/page.tsx
import Link from "next/link";

const groups = [
  {
    href: "/groups/afg",
    title: "AFG",
    subtitle: "ACA Future Generation",
    desc: "Youth, culture, and education support for a stronger Awkuzu future.",
  },
  {
    href: "/groups/ahg",
    title: "AHG",
    subtitle: "ACA Health Group",
    desc: "Medical support and healthcare impact for Awkuzu communities.",
  },
];

export default function GroupsPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 md:pt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
            GROUPS
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
            Our Groups
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 md:text-lg">
            Specialized teams advancing impact through focused missions.
          </p>
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2">
          {groups.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group relative overflow-hidden rounded-[28px] bg-white p-8 shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-[0_34px_95px_rgba(0,0,0,0.18)]"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />

              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold tracking-[0.24em] text-black/60">
                    {g.title}
                  </div>
                  <div className="mt-2 text-2xl font-extrabold text-[#1A0610]">
                    {g.subtitle}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-black/70">
                    {g.desc}
                  </p>
                </div>

                <div className="shrink-0 rounded-2xl bg-[#4B0B22] px-4 py-2 text-sm font-semibold text-[#F7E9D3] shadow-sm transition group-hover:bg-[#6A0F33]">
                  Open →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
