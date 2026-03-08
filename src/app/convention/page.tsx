import Image from "next/image";
import Link from "next/link";
import { conventions } from "./conventionData";

export default function ConventionIndexPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-5 md:pb-24 md:pt-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-[10px] font-semibold tracking-[0.22em] text-[#F7E9D3] shadow sm:text-xs">
            PAST CONVENTIONS
          </div>

          <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#4B0B22] sm:text-4xl md:text-6xl">
            Conventions by Year
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-black/70 sm:text-base md:text-lg">
            Select a year to view the flyer and a photo gallery where available.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {conventions.map((c) => (
            <Link
              key={c.year}
              href={`/convention/${c.year}`}
              className="group overflow-hidden rounded-[24px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition hover:-translate-y-1.5 hover:shadow-[0_34px_95px_rgba(0,0,0,0.18)] sm:rounded-[28px] sm:hover:-translate-y-2"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={c.flyer}
                  alt={`${c.year} Convention Flyer`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-semibold text-white/85 sm:text-sm">
                    {c.city}
                  </div>
                  {c.subtitle && (
                    <div className="mt-0.5 text-[11px] text-white/75 sm:text-xs">
                      {c.subtitle}
                    </div>
                  )}
                  <div className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                    {c.year}
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-5">
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