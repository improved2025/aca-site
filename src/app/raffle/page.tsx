import Link from "next/link";

export default function RafflePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <div className="inline-flex rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3]">
        RAFFLE DRAW
      </div>

      <h1 className="mt-6 text-4xl font-extrabold text-[#4B0B22] md:text-6xl">
        Raffle draw coming soon.
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-black/70">
        Raffle information and entry details will be posted here soon.
      </p>

      <Link
        href="/convention/2026"
        className="mt-8 inline-flex rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white hover:bg-[#6A0F33]"
      >
        Back to Convention
      </Link>
    </main>
  );
}