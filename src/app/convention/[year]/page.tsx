import Image from "next/image";
import Link from "next/link";
import { conventions } from "../conventionData";

export default async function ConventionYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const y = Number(year);

  const c = conventions.find((x) => x.year === y);

  if (!c) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-[#4B0B22]">Convention not found</h1>
        <p className="mt-3 text-black/70">
          That year isn’t in the list. (Note: there is no 2021.)
        </p>
        <Link href="/convention" className="mt-6 inline-flex rounded-xl bg-[#4B0B22] px-5 py-3 text-sm font-semibold text-white">
          Back to past conventions
        </Link>
      </main>
    );
  }

  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
              CONVENTION {c.year}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
              {c.city}
            </h1>
            <p className="mt-3 max-w-2xl text-black/70 md:text-lg">
              Official flyer and photo gallery (coming soon).
            </p>
          </div>

          <Link
            href="/convention"
            className="inline-flex rounded-xl bg-[#4B0B22] px-5 py-3 text-sm font-semibold text-white hover:bg-[#6A0F33]"
          >
            Back to all years →
          </Link>
        </div>

        {/* Flyer */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={c.flyer}
              alt={`${c.year} Convention Flyer`}
              fill
              className="object-contain bg-white"
              sizes="(max-width: 1024px) 100vw, 1100px"
              priority
            />
          </div>
        </div>

        {/* Gallery placeholder */}
        <div className="mt-12 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur">
          <div className="text-sm font-semibold text-[#4B0B22]">Photo gallery</div>
          <p className="mt-2 text-sm text-black/70">
            Add pictures later. This page is already structured for a gallery section.
          </p>

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