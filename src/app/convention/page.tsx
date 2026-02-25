import Image from "next/image";
import Link from "next/link";
import { conventions } from "./conventionData";

export default function ConventionIndexPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
            PAST CONVENTIONS
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
            Conventions by Year
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 md:text-lg">
            Select a year to view the flyer and (soon) a full photo gallery.
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {conventions.map((c) => (
            <Link
              key={c.year}
              href={`/convention/${c.year}`}
              className="group overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(0,0,0,0.18)]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={c.flyer}
                  alt={`${c.year} Convention Flyer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-sm font-semibold text-white/85">
                    {c.city}
                  </div>
                  <div className="text-2xl font-extrabold text-white">
                    {c.year}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="inline-flex items-center rounded-full bg-[#4B0B22] px-4 py-2 text-sm font-semibold text-[#F7E9D3]">
                  View details →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}