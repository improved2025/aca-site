"use client";

import { useState } from "react";
import Link from "next/link";

const ZELLE_EMAIL = "awkuzuconvention@gmail.com";

export default function DonatePage() {
  const [copied, setCopied] = useState(false);

  async function copyZelle() {
    await navigator.clipboard.writeText(ZELLE_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const mailto = `mailto:${ZELLE_EMAIL}?subject=Donation%20Notification&body=Hello%20ACA,%0A%0AI%20just%20sent%20a%20donation%20via%20Zelle.%0A%0AName:%20%0AAmount:%20%0APurpose:%20%0A%0AThank%20you.`;

  return (
    <main className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[420px] w-[620px] rounded-full bg-[#D6B15A]/14 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">

        {/* HERO */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">

          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
              SUPPORT ACA
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
              Give with purpose
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
              Your support strengthens our mission to promote unity, preserve
              Awkuzu heritage, and support development projects both at home
              and across the diaspora.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/impact"
                className="rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6A0F33]"
              >
                See Our Impact
              </Link>

              <Link
                href="/convention/2026"
                className="rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#4B0B22] backdrop-blur hover:bg-white"
              >
                2026 Convention
              </Link>
            </div>
          </div>

          {/* DONATION CARD */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/5">

              <div className="h-2 w-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />

              <div className="p-7 md:p-8">

                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
                  Donate via Zelle
                </div>

                <div className="mt-3 text-2xl font-extrabold text-[#1A0610]">
                  Quick and secure giving
                </div>

                <p className="mt-3 text-sm text-black/70">
                  Send your donation through Zelle using the email below.
                </p>

                {/* Zelle Email Box */}
                <div className="mt-6 rounded-3xl bg-[#4B0B22] p-5 text-[#F7E9D3]">
                  <div className="text-xs tracking-[0.22em] text-[#F7E9D3]/80">
                    ZELLE EMAIL
                  </div>

                  <div className="mt-2 text-lg font-extrabold break-all">
                    {ZELLE_EMAIL}
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={copyZelle}
                  className="mt-4 w-full rounded-xl bg-[#D6B15A] px-5 py-3 text-sm font-bold text-[#4B0B22] shadow hover:brightness-95"
                >
                  {copied ? "Copied" : "Copy Zelle Email"}
                </button>

                {/* Instructions */}
                <div className="mt-6 rounded-3xl bg-[#FBF5F7] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-[#4B0B22]">
                    How to donate
                  </div>

                  <ol className="mt-3 grid gap-3 text-sm text-black/70">
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      1. Open your banking app.
                    </li>
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      2. Select Zelle.
                    </li>
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      3. Send to <strong>{ZELLE_EMAIL}</strong>.
                    </li>
                  </ol>
                </div>

                {/* Notify Button */}
                <a
                  href={mailto}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-[#4B0B22] px-5 py-3 text-sm font-semibold text-[#4B0B22] hover:bg-[#4B0B22] hover:text-white transition"
                >
                  Notify Us After Sending Donation
                </a>

              </div>
            </div>
          </div>

        </div>

        {/* TRUST SECTION */}
        <div className="mt-14 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <div className="text-sm font-semibold tracking-[0.22em] text-[#B1165A]">
            THANK YOU
          </div>

          <h2 className="mt-3 text-2xl font-extrabold text-[#1A0610] md:text-3xl">
            Every contribution strengthens our community.
          </h2>

          <p className="mt-3 max-w-3xl text-sm text-black/70 md:text-base">
            Awkuzu Cultural Association exists to promote unity, culture,
            and meaningful development. Your generosity helps us continue
            projects that uplift our people and support the next generation.
          </p>
        </div>

      </section>
    </main>
  );
}