import Image from "next/image";
import Link from "next/link";
import { conventions } from "../conventionData";

type GalleryImage = {
  src: string;
  alt: string;
  orientation?: "landscape" | "portrait";
};

function getGallery(year: number): GalleryImage[] {
  if (year === 2023) {
    return [
      { src: "/convention/houston/hp1.jpg", alt: "Houston convention photo 1" },
      { src: "/convention/houston/hp2.jpg", alt: "Houston convention photo 2" },
      { src: "/convention/houston/hp3.jpg", alt: "Houston convention photo 3" },
      { src: "/convention/houston/hp4.jpg", alt: "Houston convention photo 4" },
      { src: "/convention/houston/hp5.jpg", alt: "Houston convention photo 5" },
      { src: "/convention/houston/hp6.jpg", alt: "Houston convention photo 6" },
      { src: "/convention/houston/hp7.jpg", alt: "Houston convention photo 7" },
      { src: "/convention/houston/hp8.jpg", alt: "Houston convention photo 8" },
      { src: "/convention/houston/hp9.jpg", alt: "Houston convention photo 9" },
      { src: "/convention/houston/hp10.jpg", alt: "Houston convention photo 10", orientation: "portrait" },
    ];
  }

  if (year === 2024) {
    return [
      { src: "/convention/atlanta/ap1.jpeg", alt: "Atlanta convention photo 1" },
      { src: "/convention/atlanta/ap2.jpeg", alt: "Atlanta convention photo 2" },
      { src: "/convention/atlanta/ap3.jpeg", alt: "Atlanta convention photo 3" },
      { src: "/convention/atlanta/ap4.jpeg", alt: "Atlanta convention photo 4" },
      { src: "/convention/atlanta/ap5.jpeg", alt: "Atlanta convention photo 5" },
      { src: "/convention/atlanta/ap6.jpeg", alt: "Atlanta convention photo 6" },
      { src: "/convention/atlanta/ap7.jpeg", alt: "Atlanta convention photo 7" },
      { src: "/convention/atlanta/ap8.jpeg", alt: "Atlanta convention photo 8" },
      { src: "/convention/atlanta/ap9.jpeg", alt: "Atlanta convention photo 9" },
      { src: "/convention/atlanta/ap10.jpeg", alt: "Atlanta convention photo 10", orientation: "portrait" },
    ];
  }

  if (year === 2022) {
    return [
      { src: "/convention/maryland/mp1.jpeg", alt: "Maryland convention photo 1" },
      { src: "/convention/maryland/mp2.jpeg", alt: "Maryland convention photo 2" },
      { src: "/convention/maryland/mp3.jpeg", alt: "Maryland convention photo 3" },
      { src: "/convention/maryland/mp4.jpeg", alt: "Maryland convention photo 4" },
      { src: "/convention/maryland/mp5.jpeg", alt: "Maryland convention photo 5" },
      { src: "/convention/maryland/mp6.jpeg", alt: "Maryland convention photo 6" },
      { src: "/convention/maryland/mp7.jpeg", alt: "Maryland convention photo 7" },
      { src: "/convention/maryland/mp8.jpeg", alt: "Maryland convention photo 8" },
      { src: "/convention/maryland/mp9.jpeg", alt: "Maryland convention photo 9" },
      { src: "/convention/maryland/mp10.jpeg", alt: "Maryland convention photo 10", orientation: "portrait" },
    ];
  }

  return [];
}

export default async function ConventionYearPage({
  params,
}: {
  params: Promise<{ year: string }>;
}) {
  const { year } = await params;
  const y = Number(year);

  const c = conventions.find((x) => x.year === y);
  const gallery = getGallery(y);

  if (!c) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-[#4B0B22]">Convention not found</h1>
        <p className="mt-3 text-black/70">
          That year isn’t in the list. (Note: there is no 2021.)
        </p>
        <Link
          href="/convention"
          className="mt-6 inline-flex rounded-xl bg-[#4B0B22] px-5 py-3 text-sm font-semibold text-white"
        >
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
              Official flyer and photo gallery from the {c.year} convention.
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

        {/* Gallery */}
        <div className="mt-12 rounded-3xl bg-white/70 p-6 ring-1 ring-black/5 backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#4B0B22]">Photo gallery</div>
              <p className="mt-2 text-sm text-black/70">
                {gallery.length > 0
                  ? `Highlights from the ${c.year} convention in ${c.city}.`
                  : "Gallery photos will be added later."}
              </p>
            </div>
          </div>

          {gallery.length > 0 ? (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gallery.map((img, i) => (
                <div
                  key={img.src}
                  className={`group overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm ${
                    img.orientation === "portrait"
                      ? "sm:col-span-2 lg:col-span-1 lg:row-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full ${
                      img.orientation === "portrait"
                        ? "aspect-[4/5]"
                        : "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      sizes={
                        img.orientation === "portrait"
                          ? "(max-width: 1024px) 100vw, 360px"
                          : "(max-width: 1024px) 100vw, 420px"
                      }
                    />
                  </div>

                  <div className="p-4">
                    <div className="text-sm font-semibold text-[#1A0610]">
                      {c.city} • Photo {i + 1}
                    </div>
                    <div className="mt-1 text-sm text-black/65">
                      Convention gallery highlight
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-2xl bg-black/5 ring-1 ring-black/5 ${
                    i === 9 ? "aspect-[4/5]" : "aspect-[16/10]"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}