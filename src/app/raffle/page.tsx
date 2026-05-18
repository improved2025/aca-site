import Link from "next/link";

export const metadata = {
  title: "2026 ACA Raffle Draw | Awkuzu Cultural Association",
  description:
    "Purchase a 2026 ACA raffle ticket for a chance to win a brand new HP laptop and support healthcare capacity in Awkuzu.",
};

const zeffyUrl =
  "https://www.zeffy.com/en-US/ticketing/purchase-2026-aca-raffle-ticket-for-a-chance-to-win-a-brand-new-hp-laptop-and-make-a-difference";

export default function RafflePage() {
  return (
    <main className="relative overflow-hidden bg-[#061A33] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_5%,rgba(59,130,246,0.34),transparent_34%),radial-gradient(circle_at_88%_12%,rgba(214,177,90,0.22),transparent_26%),linear-gradient(180deg,#061A33_0%,#082B5F_46%,#F4F8FF_46%,#FFFFFF_100%)]" />
        <div className="absolute -top-28 left-1/2 h-[430px] w-[880px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <section className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-16 sm:px-5 md:pb-20 md:pt-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.24em] text-[#DCEBFF] shadow-lg backdrop-blur">
            Official 2026 ACA Raffle Draw
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl">
            Win a brand new HP laptop. Support a healthier Awkuzu.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
            Purchase a 2026 ACA raffle ticket for a chance to win a brand new HP laptop while supporting the Awkuzu Cultural Association&apos;s healthcare and capacity building project in Awkuzu.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={zeffyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-[#83B5FF] px-7 py-4 text-sm font-black text-[#061A33] shadow-[0_18px_40px_rgba(131,181,255,0.28)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Buy Raffle Ticket
            </a>

            <Link
              href="/convention/2026"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Back to Convention
            </Link>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <FactCard label="Ticket" value="$10" />
            <FactCard label="Prize" value="Brand new HP laptop" />
            <FactCard label="Opens" value="May 30, 7:00 PM" />
            <FactCard label="Closes" value="Aug 29, 8:00 PM EDT" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-[0_30px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:p-6">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#83B5FF]/30 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-[#D6B15A]/25 blur-3xl" />

            <div className="relative rounded-[1.7rem] bg-[#0A3470] p-6 ring-1 ring-white/15">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.25em] text-[#BFD7FF]">
                    ACA Raffle Ticket
                  </div>
                  <div className="mt-3 text-5xl font-black tracking-tight text-white">
                    2026
                  </div>
                </div>
                <div className="grid h-16 w-16 place-items-center rounded-3xl bg-white text-3xl shadow-xl">
                  💻
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-5 text-[#061A33]">
                <div className="text-sm font-black text-[#0B5CAB]">
                  One Ticket. One Laptop. One Healthier Awkuzu.
                </div>
                <div className="mt-3 text-4xl font-black">$10</div>
                <p className="mt-3 text-sm leading-7 text-[#243B58]">
                  Support ACA and enter for a chance to win a brand new HP laptop.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <MiniPanel label="Hosted by" value="ACA USA INC" />
                <MiniPanel label="Purpose" value="Healthcare" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#F4F8FF] px-4 py-16 text-[#061A33] sm:px-5 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-6 shadow-[0_20px_60px_rgba(6,46,99,0.10)] ring-1 ring-[#0B3D78]/10 md:p-8">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-[#0B5CAB]">
                  About this raffle
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  Support a worthy cause and win a brand new HP laptop.
                </h2>

                <p className="mt-5 text-base leading-8 text-[#243B58]">
                  Join the Awkuzu Cultural Association&apos;s annual fundraiser and stand a chance to win a brand new HP laptop. Proceeds from this raffle will support the 2025 project: Improving Capacity and Healthcare Delivery in Awkuzu.
                </p>

                <p className="mt-4 text-base leading-8 text-[#243B58]">
                  As a registered nonprofit in the United States, ACA is committed to empowering our hometown by supporting essential amenities such as rural education and healthcare. Every ticket brings us one step closer to better care and brighter futures in Awkuzu.
                </p>

                <div className="mt-8">
                  <a
                    href={zeffyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-[#0B5CAB] px-7 py-4 text-sm font-black text-white shadow-[0_18px_40px_rgba(11,92,171,0.22)] transition hover:-translate-y-0.5 hover:bg-[#064C91]"
                  >
                    Purchase Ticket on Zeffy
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] bg-[#061A33] p-6 text-white shadow-[0_20px_60px_rgba(6,26,51,0.18)] md:p-8">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-[#BFD7FF]">
                  Campaign details
                </div>

                <div className="mt-6 space-y-4">
                  <DetailItem label="Ticket price" value="$10" />
                  <DetailItem label="Prize" value="Brand new HP laptop" />
                  <DetailItem label="Start date" value="May 30 at 7:00 PM" />
                  <DetailItem label="End date" value="August 29 at 8:00 PM EDT" />
                  <DetailItem label="Hosted by" value="Awkuzu Cultural Association USA INC" />
                </div>
              </div>

              <div className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-[#0B3D78]/10 md:p-8">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-[#0B5CAB]">
                  How to enter
                </div>

                <div className="mt-6 space-y-5">
                  <Step number="01" title="Click the raffle ticket button." />
                  <Step number="02" title="Choose your quantity on Zeffy." />
                  <Step number="03" title="Complete checkout and keep your confirmation." />
                  <Step number="04" title="Wait for the official raffle draw." />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] bg-[#0B5CAB] p-6 text-white shadow-[0_20px_60px_rgba(11,92,171,0.18)] md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="text-xs font-black uppercase tracking-[0.24em] text-[#DCEBFF]">
                  Ready to participate?
                </div>
                <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                  Buy your raffle ticket today.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
                  Your ticket gives you a chance to win and helps ACA make a real impact in Awkuzu.
                </p>
              </div>

              <div className="lg:col-span-4 lg:text-right">
                <a
                  href={zeffyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-sm font-black text-[#0B5CAB] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F7E9D3]"
                >
                  Buy Raffle Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur">
      <div className="text-[10px] font-black uppercase tracking-[0.22em] text-[#BFD7FF]">
        {label}
      </div>
      <div className="mt-2 text-sm font-black leading-snug text-white">{value}</div>
    </div>
  );
}

function MiniPanel({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-white/15">
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#BFD7FF]">
        {label}
      </div>
      <div className="mt-2 text-sm font-black text-white">{value}</div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
      <div className="text-sm font-bold text-white/58">{label}</div>
      <div className="max-w-[210px] text-right text-sm font-black leading-6 text-white">
        {value}
      </div>
    </div>
  );
}

function Step({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-[#0B5CAB] text-xs font-black text-white">
        {number}
      </div>
      <div className="pt-2 text-sm font-black leading-6 text-[#061A33]">{title}</div>
    </div>
  );
}
