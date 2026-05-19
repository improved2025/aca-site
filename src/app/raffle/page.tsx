/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const metadata = {
  title: "2026 ACA Raffle Draw | Awkuzu Cultural Association",
  description:
    "Purchase a 2026 ACA raffle ticket for a chance to win a brand-new HP laptop and support healthcare delivery in Awkuzu.",
};

const zeffyUrl =
  "https://www.zeffy.com/en-US/ticketing/purchase-2026-aca-raffle-ticket-for-a-chance-to-win-a-brand-new-hp-laptop-and-make-a-difference";

const laptopImage =
  "data:image/webp;base64,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";

export default function RafflePage() {
  return (
    <main className="relative overflow-hidden bg-[#FBF3E7] text-[#1A0610]">
      <section className="relative mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-28 left-0 h-72 w-72 rounded-full bg-[#4B0B22]/10 blur-3xl" />
          <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-[#D6B15A]/20 blur-3xl" />
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#F7E9D3] shadow-sm">
              2026 ACA Raffle Draw
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-[#4B0B22] sm:text-5xl md:text-6xl">
              Win a brand-new HP laptop.
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-black/70 md:text-lg">
              One ticket. One laptop. One healthier Awkuzu.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={zeffyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#D6B15A] px-8 py-4 text-sm font-black text-[#4B0B22] shadow-[0_18px_40px_rgba(75,11,34,0.18)] transition hover:-translate-y-0.5 hover:bg-[#E7C874]"
              >
                Buy Raffle Ticket
              </a>

              <Link
                href="/convention/2026"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4B0B22] px-8 py-4 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#6A0F33]"
              >
                Back to Convention
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              <QuickFact label="Ticket" value="$10" />
              <QuickFact label="Prize" value="HP Laptop" />
              <QuickFact label="Ends" value="Aug 29" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[2rem] bg-[#4B0B22] p-4 text-white shadow-[0_24px_70px_rgba(75,11,34,0.24)] ring-1 ring-black/10 sm:p-5">
              <div className="overflow-hidden rounded-[1.6rem] bg-[#FBF3E7] p-3 ring-1 ring-[#D6B15A]/45">
                <img
                  src={laptopImage}
                  alt="Brand-new HP laptop raffle prize"
                  className="h-auto w-full rounded-[1.25rem] object-cover shadow-lg"
                />
              </div>

              <div className="mt-4 rounded-[1.5rem] bg-[#5A102A] p-5 ring-1 ring-white/10">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.25em] text-[#F7E9D3]/75">
                      Raffle Prize
                    </div>
                    <div className="mt-2 text-xl font-black text-[#F7E9D3]">
                      Brand-New HP Laptop
                    </div>
                  </div>
                  <div className="text-4xl font-black text-[#D6B15A]">$10</div>
                </div>

                <a
                  href={zeffyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#D6B15A] px-6 py-4 text-sm font-black text-[#4B0B22] transition hover:bg-[#E7C874]"
                >
                  Purchase Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#D6B15A]/45 bg-white/70 px-4 py-10 sm:px-5">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
          <Detail label="Hosted by" value="Awkuzu Cultural Association USA INC" />
          <Detail label="Ticket" value="$10" />
          <Detail label="Prize" value="Brand-new HP laptop" />
          <Detail label="Campaign" value="May 30 – Aug 29" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-5 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-black/5 md:p-8">
            <div className="text-xs font-black uppercase tracking-[0.24em] text-[#B1165A]">
              Purpose
            </div>
            <h2 className="mt-3 text-2xl font-black text-[#4B0B22] md:text-3xl">
              Support healthcare capacity in Awkuzu.
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/70 md:text-base">
              This raffle helps ACA support healthcare delivery and community development projects back home.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#4B0B22] p-6 text-white shadow-sm md:p-8">
            <div className="text-xs font-black uppercase tracking-[0.24em] text-[#F7E9D3]/80">
              How to enter
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <Step number="1" text="Click the ticket button" />
              <Step number="2" text="Checkout on Zeffy" />
              <Step number="3" text="Keep confirmation" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function QuickFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/75 p-5 shadow-sm ring-1 ring-black/5 backdrop-blur">
      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-black/45">
        {label}
      </div>
      <div className="mt-2 text-lg font-black text-[#4B0B22]">{value}</div>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-[#FBF3E7] p-5 ring-1 ring-[#D6B15A]/35">
      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#4B0B22]/55">
        {label}
      </div>
      <div className="mt-2 text-sm font-black leading-6 text-[#4B0B22]">{value}</div>
    </div>
  );
}

function Step({ number, text }: { number: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/10">
      <div className="grid h-9 w-9 place-items-center rounded-2xl bg-[#D6B15A] text-sm font-black text-[#4B0B22]">
        {number}
      </div>
      <div className="mt-3 text-sm font-bold leading-6 text-white/85">{text}</div>
    </div>
  );
}
