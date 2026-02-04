import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#4B0B22] text-[#F7E9D3]">
      {/* top accent line */}
      <div className="h-[6px] w-full bg-gradient-to-r from-[#D6B15A] via-[#B1165A] to-[#D6B15A]" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="text-2xl font-semibold leading-tight">
              Awkuzu Cultural Association
            </div>
            <div className="mt-1 text-sm text-[#F7E9D3]/85">Unity and Progress</div>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-[#F7E9D3]/85">
              A 501(c)(3) nonprofit advancing unity, cultural preservation, and real
              community impact in Awkuzu and across the diaspora.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/donate"
                className="rounded-xl bg-[#D6B15A] px-5 py-3 text-sm font-semibold text-[#4B0B22] hover:brightness-95"
              >
                Donate
              </Link>

              <Link
                href="/events/2026-convention"
                className="rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-[#F7E9D3] hover:bg-white/15 hover:border-white/40"
              >
                Convention
              </Link>
            </div>

            {/* subtle badge */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-[#F7E9D3]/85 ring-1 ring-white/15">
              <span className="h-2 w-2 rounded-full bg-[#D6B15A]" />
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

            <div className="mt-12 rounded-3xl bg-white/10 p-6 ring-1 ring-white/15">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold">Contact</div>
                  <div className="mt-1 text-sm text-[#F7E9D3]/85">
                    Add address, email, and phone here when ready.
                  </div>
                </div>

                <div className="hidden h-10 w-10 rounded-full bg-gradient-to-br from-[#D6B15A]/70 via-[#B1165A]/60 to-white/10 ring-1 ring-white/20 sm:block" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-[#F7E9D3]/75 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Awkuzu Cultural Association. All rights reserved.</div>
          <div className="text-[#F7E9D3]/75">Built for community impact.</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-[0.26em] text-[#F7E9D3]/75">
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
      className="text-sm text-[#F7E9D3]/90 hover:text-[#F7E9D3]"
    >
      {label}
    </Link>
  );
}
