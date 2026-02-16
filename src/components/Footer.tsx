import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#2B0614] text-[#F7E9D3]">
      {/* top accent line */}
      <div className="h-[7px] w-full bg-gradient-to-r from-[#D6B15A] via-[#B1165A] to-[#D6B15A]" />

      {/* inner gradient so it feels thick + premium */}
      <div className="bg-gradient-to-b from-[#4B0B22] to-[#2B0614]">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-12 md:grid-cols-12">
            {/* Brand block */}
            <div className="md:col-span-5">
              <div className="text-2xl font-extrabold leading-tight tracking-tight md:text-3xl">
                Awkuzu Cultural Association
              </div>
              <div className="mt-2 text-sm font-medium tracking-wide text-[#F7E9D3]/90">
                Unity and Progress
              </div>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#F7E9D3]/85">
                A 501(c)(3) nonprofit advancing unity, cultural preservation, and
                real community impact in Awkuzu and across the diaspora.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/donate"
                  className="rounded-xl bg-[#D6B15A] px-6 py-3 text-sm font-bold text-[#2B0614] shadow hover:brightness-95"
                >
                  Donate
                </Link>

                <Link
                  href="/events/2026-convention"
                  className="rounded-xl border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-[#F7E9D3] hover:bg-white/15 hover:border-white/45"
                >
                  Convention
                </Link>
              </div>

              {/* badge */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-[#F7E9D3]/90 ring-1 ring-white/15">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D6B15A]" />
                501(c)(3) • Community-driven impact
              </div>
            </div>

            {/* Link columns + contact */}
            <div className="md:col-span-7">
              <div className="grid gap-10 sm:grid-cols-3">
                <FooterCol title="Explore">
                  <FooterLink href="/about" label="About" />
                  <FooterLink href="/impact" label="Impact" />
                  <FooterLink href="/membership" label="Membership" />
                </FooterCol>

                <FooterCol title="Events">
                  <FooterLink href="/events/2026-convention" label="2026 Convention" />
                  <FooterLink href="/tickets" label="Tickets" />
                  <FooterLink href="/raffle" label="Raffle" />
                </FooterCol>

                <FooterCol title="Legal">
                  <FooterLink href="/privacy" label="Privacy" />
                  <FooterLink href="/terms" label="Terms" />
                  <FooterLink href="/donations-policy" label="Donations Policy" />
                </FooterCol>
              </div>

              <div className="mt-12 rounded-3xl bg-black/25 p-6 ring-1 ring-white/12 backdrop-blur">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="text-sm font-bold tracking-wide">Contact</div>
                    <div className="mt-2 text-sm leading-relaxed text-[#F7E9D3]/85">
                      Add address, email, and phone here when ready.
                    </div>
                  </div>

                  <div className="hidden h-11 w-11 rounded-full bg-gradient-to-br from-[#D6B15A]/85 via-[#B1165A]/70 to-white/10 ring-1 ring-white/20 sm:block" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-xs text-[#F7E9D3]/75 md:flex-row md:items-center md:justify-between">
            <div>
              © {new Date().getFullYear()} Awkuzu Cultural Association. All rights reserved.
            </div>
            <div className="text-[#F7E9D3]/75">Built for community impact.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-[0.28em] text-[#F7E9D3]/80">
        {title}
      </div>
      <div className="mt-4 grid gap-3">{children}</div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-[#F7E9D3]/88 transition hover:text-[#D6B15A]"
    >
      {label}
    </Link>
  );
}
