import Link from "next/link";

export default function ContactPage() {
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
        {/* Hero */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
              CONTACT ACA
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
              Let’s connect.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/75 md:text-lg">
              Reach out for general inquiries, convention questions, partnerships,
              sponsorships, membership information, or community support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/membership"
                className="rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6A0F33]"
              >
                Become a Member
              </Link>

              <Link
                href="/convention/2026"
                className="rounded-xl border border-black/10 bg-white/70 px-6 py-3 text-sm font-semibold text-[#4B0B22] backdrop-blur hover:bg-white"
              >
                2026 Convention
              </Link>
            </div>
          </div>

          {/* Contact card */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <div className="h-2 w-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />

              <div className="p-7 md:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
                  Get in touch
                </div>

                <h2 className="mt-3 text-2xl font-extrabold text-[#1A0610]">
                  We’d love to hear from you
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-black/70">
                  Add your official contact details below. Once you send them, I can
                  plug them in cleanly across this page and the footer.
                </p>

                <div className="mt-6 grid gap-4">
                  <ContactRow
                    label="Email"
                    value="Add official email"
                    href="mailto:your@email.com"
                  />
                  <ContactRow
                    label="Phone"
                    value="Add official phone"
                    href="tel:+10000000000"
                  />
                  <ContactRow
                    label="Address"
                    value="Add mailing address"
                  />
                </div>

                <div className="mt-6 rounded-3xl bg-[#FBF5F7] p-5 ring-1 ring-black/5">
                  <div className="text-sm font-semibold text-[#4B0B22]">
                    Best reasons to contact us
                  </div>

                  <ul className="mt-3 grid gap-3 text-sm text-black/70">
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      Convention sponsorship and advertising
                    </li>
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      Membership and community involvement
                    </li>
                    <li className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
                      Donations, support, and project inquiries
                    </li>
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="mailto:your@email.com"
                    className="inline-flex items-center justify-center rounded-xl bg-[#4B0B22] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#6A0F33]"
                  >
                    Send Email
                  </a>

                  <a
                    href="tel:+10000000000"
                    className="inline-flex items-center justify-center rounded-xl bg-[#D6B15A] px-5 py-3 text-sm font-semibold text-[#4B0B22] shadow hover:brightness-95"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact options */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <InfoCard
            title="General Inquiries"
            text="Questions about ACA, our mission, community activities, or ongoing initiatives."
          />
          <InfoCard
            title="Convention & Events"
            text="Reach out for tickets, hotel information, advertising, sponsorships, and event support."
          />
          <InfoCard
            title="Partnerships & Support"
            text="Connect with us to collaborate, contribute, or support development projects."
          />
        </div>

        {/* Contact form placeholder */}
        <div className="mt-12 rounded-[32px] bg-white/75 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur md:p-8">
          <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
            Contact form
          </div>

          <h3 className="mt-3 text-2xl font-extrabold text-[#1A0610]">
            Add a form when ready
          </h3>

          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70 md:text-base">
            This section is ready for a form later. When you want, I can build a clean
            form with fields for name, email, subject, message, and submission handling.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-[#FBF5F7] p-4 ring-1 ring-black/5">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                Name
              </div>
              <div className="mt-2 h-11 rounded-xl bg-white ring-1 ring-black/5" />
            </div>

            <div className="rounded-2xl bg-[#FBF5F7] p-4 ring-1 ring-black/5">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                Email
              </div>
              <div className="mt-2 h-11 rounded-xl bg-white ring-1 ring-black/5" />
            </div>

            <div className="rounded-2xl bg-[#FBF5F7] p-4 ring-1 ring-black/5 md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                Subject
              </div>
              <div className="mt-2 h-11 rounded-xl bg-white ring-1 ring-black/5" />
            </div>

            <div className="rounded-2xl bg-[#FBF5F7] p-4 ring-1 ring-black/5 md:col-span-2">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
                Message
              </div>
              <div className="mt-2 h-36 rounded-2xl bg-white ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-2xl bg-[#FBF5F7] p-4 ring-1 ring-black/5">
      <div className="text-xs font-semibold uppercase tracking-[0.22em] text-black/50">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-[#1A0610]">
        {value}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition hover:-translate-y-[1px]">
        {content}
      </a>
    );
  }

  return content;
}

function InfoCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
        Contact
      </div>
      <div className="mt-3 text-xl font-extrabold text-[#1A0610]">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{text}</p>
      <div className="mt-5 h-1.5 w-full rounded-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A] opacity-80" />
    </div>
  );
}