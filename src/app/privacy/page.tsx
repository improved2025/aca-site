export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-extrabold tracking-tight text-[#4B0B22]">
        Privacy Policy
      </h1>

      <p className="mt-6 text-sm leading-relaxed text-black/70">
        Awkuzu Cultural Association (ACA) respects your privacy and is committed
        to protecting any personal information you share with us. This Privacy
        Policy explains how we collect, use, and safeguard your information when
        you visit our website or interact with our organization.
      </p>

      {/* Information We Collect */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#4B0B22]">Information We Collect</h2>

        <p className="mt-3 text-sm leading-relaxed text-black/70">
          We may collect personal information that you voluntarily provide when
          you:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-black/70">
          <li>Contact us through forms or email</li>
          <li>Register for events or conventions</li>
          <li>Make a donation</li>
          <li>Subscribe to updates or communications</li>
        </ul>

        <p className="mt-4 text-sm text-black/70">
          This information may include your name, email address, phone number,
          and other details necessary to support your request.
        </p>
      </section>

      {/* How We Use Information */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#4B0B22]">How We Use Information</h2>

        <p className="mt-3 text-sm leading-relaxed text-black/70">
          The information collected may be used to:
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-6 text-sm text-black/70">
          <li>Respond to inquiries and provide support</li>
          <li>Process donations and event registrations</li>
          <li>Share updates about ACA programs and activities</li>
          <li>Improve our website and community outreach efforts</li>
        </ul>
      </section>

      {/* Data Protection */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#4B0B22]">Data Protection</h2>

        <p className="mt-3 text-sm leading-relaxed text-black/70">
          ACA takes reasonable measures to protect your information from
          unauthorized access, misuse, or disclosure. We do not sell, rent, or
          trade your personal information to third parties.
        </p>
      </section>

      {/* Third Party Links */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#4B0B22]">Third-Party Links</h2>

        <p className="mt-3 text-sm leading-relaxed text-black/70">
          Our website may contain links to external websites such as event
          registration platforms or hotel reservation pages. ACA is not
          responsible for the privacy practices or content of these external
          websites.
        </p>
      </section>

      {/* Changes */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-[#4B0B22]">Policy Updates</h2>

        <p className="mt-3 text-sm leading-relaxed text-black/70">
          This policy may be updated from time to time to reflect changes in our
          practices or legal requirements. Updates will be posted on this page.
        </p>
      </section>

      {/* Contact */}
      <section className="mt-10 rounded-2xl bg-[#4B0B22]/5 p-6 ring-1 ring-black/5">
        <h2 className="text-lg font-bold text-[#4B0B22]">Contact Us</h2>

        <p className="mt-2 text-sm text-black/70">
          If you have questions about this Privacy Policy, please contact the
          Awkuzu Cultural Association.
        </p>

        <div className="mt-4 rounded-xl bg-[#4B0B22] px-4 py-3 text-sm font-semibold text-white">
          awkuzuconvention@gmail.com
        </div>
      </section>
    </main>
  );
}