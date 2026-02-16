// app/groups/ahg/page.tsx
import Image from "next/image";

const photos = [
  { src: "/groups/ahg-1.jpg", alt: "AHG photo 1" },
  { src: "/groups/ahg-2.jpg", alt: "AHG photo 2" },
  { src: "/groups/ahg-3.jpg", alt: "AHG photo 3" },
  { src: "/groups/ahg-4.jpg", alt: "AHG photo 4" },
];

export default function AHGPage() {
  return (
    <main className="relative">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 md:pt-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
            AHG
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
            ACA Health Group
          </h1>

          <p className="mt-4 text-base text-black/70 md:text-lg">
            The ACA Health Group is committed to strengthening healthcare in Awkuzu
            by supporting local medical facilities and expanding access to
            essential services. United by purpose, medical professionals across
            our community have come together to improve patient care, provide
            critical resources, and help build a healthier future for our people.
          </p>
        </div>

        {/* Photo grid (4) */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {photos.map((p) => (
            <div
              key={p.src}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5"
            >
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />

              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition duration-200 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0 opacity-40" />
              </div>

              <div className="p-5">
                <div className="text-sm font-semibold text-[#1A0610]">
                  Health Impact
                </div>
                <div className="mt-1 text-sm text-black/65">
                  Add a short caption here later.
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-10 rounded-3xl bg-white/70 p-6 text-sm text-black/70 ring-1 ring-black/5 backdrop-blur">
          <div className="font-semibold text-[#1A0610]">Photo setup</div>
          <div className="mt-2">
            Put your 4 images here:
            <span className="ml-2 font-mono">
              /public/groups/ahg-1.jpg, ahg-2.jpg, ahg-3.jpg, ahg-4.jpg
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
