import Link from "next/link";

export const metadata = {
  title: "2026 ACA Raffle Draw | Awkuzu Cultural Association",
  description:
    "Purchase a 2026 ACA raffle ticket for a chance to win a brand-new HP laptop and support healthcare delivery in Awkuzu.",
};

const zeffyUrl =
  "https://www.zeffy.com/en-US/ticketing/purchase-2026-aca-raffle-ticket-for-a-chance-to-win-a-brand-new-hp-laptop-and-make-a-difference";

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
            <div className="rounded-[2rem] bg-[#4B0B22] p-5 text-white shadow-[0_24px_70px_rgba(75,11,34,0.24)] ring-1 ring-black/10 sm:p-6">
              <div className="rounded-[1.5rem] bg-[#5A102A] p-6 ring-1 ring-white/10">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-xs font-black uppercase tracking-[0.25em] text-[#F7E9D3]/75">
                      Raffle Ticket
                    </div>
                    <div className="mt-3 text-5xl font-black text-[#F7E9D3]">2026</div>
                  </div>
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#D6B15A] text-2xl text-[#4B0B22] shadow-lg">
                    💻
                  </div>
                </div>

                <div className="mt-7 rounded-3xl bg-[#FBF3E7] p-5 text-[#4B0B22]">
                  <div className="text-sm font-black">Brand-New HP Laptop</div>
                  <div className="mt-2 text-4xl font-black">$10</div>
                  <div className="mt-3 text-sm font-semibold text-black/65">
                    Proceeds support healthcare delivery in Awkuzu.
                  </div>
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
