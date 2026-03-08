export default function TermsPage() {
  return (
    <main className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[420px] w-[620px] rounded-full bg-[#D6B15A]/14 blur-3xl" />
      </div>

      <section className="mx-auto max-w-4xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        <div className="inline-flex items-center rounded-full bg-[#4B0B22] px-5 py-2 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3]">
          LEGAL
        </div>

        <h1 className="mt-5 text-4xl font-extrabold text-[#4B0B22] md:text-5xl">
          Terms of Use & Privacy Policy
        </h1>

        <p className="mt-4 text-black/70">
          These terms govern your use of the Awkuzu Cultural Association (ACA)
          website and services.
        </p>

        {/* Terms of Use */}
        <div className="mt-10 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-[#1A0610]">
            Terms of Use
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            This website must be used in accordance with all applicable laws and
            regulations. You may not use this website for any unlawful purpose or
            in any way that could harm, disable, overburden, or impair the website
            or interfere with the interests of the Awkuzu Cultural Association
            (ACA) or its members.
          </p>

          <p className="mt-4 text-black/70 leading-relaxed">
            Unauthorized access to any part of the website, its systems, or
            networks is strictly prohibited. All content, design, and materials
            on this website are protected. Reproduction, redistribution, or
            unauthorized use of website content without permission is prohibited.
          </p>

          <p className="mt-4 text-black/70 leading-relaxed">
            By continuing to use this website or interacting with ACA through
            this platform, you acknowledge that our Privacy Policy applies to you.
          </p>
        </div>

        {/* Privacy Policy */}
        <div className="mt-8 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-[#1A0610]">
            Privacy Policy
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            This Privacy Policy governs data collection and usage for the ACA
            website. By submitting personal information or interacting with our
            website, you acknowledge and agree to the processing of your personal
            information as described in this policy. If you do not agree with this
            policy, you should discontinue use of the website.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#4B0B22]">
            Collection of Personal Information
          </h3>

          <p className="mt-2 text-black/70 leading-relaxed">
            We may collect personal information such as your name, email address,
            phone number, and state when you voluntarily submit it through forms
            on our website.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#4B0B22]">
            Use of Personal Information
          </h3>

          <ul className="mt-3 list-disc pl-6 text-black/70 space-y-2">
            <li>Respond to your inquiries and fulfill your requests.</li>
            <li>
              Send newsletters, announcements, and other information related to
              ACA activities.
            </li>
            <li>Provide updates about events, programs, and initiatives.</li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-[#4B0B22]">
            Cookies
          </h3>

          <p className="mt-2 text-black/70 leading-relaxed">
            This website may use cookies to understand how visitors interact with
            the site and improve user experience. By using this website, you
            agree to the use of cookies.
          </p>

          <p className="mt-3 font-semibold text-[#4B0B22]">
            We do not sell your personal data.
          </p>
        </div>

        {/* Security */}
        <div className="mt-8 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-[#1A0610]">
            Security of Personal Information
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal information during transmission and storage. However, no
            method of internet transmission or electronic storage is completely
            secure. While we strive to protect your personal information, we
            cannot guarantee absolute security.
          </p>
        </div>

        {/* Data storage */}
        <div className="mt-8 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-[#1A0610]">
            Data Storage and Processing
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            Information collected through this website is processed and stored in
            secure databases located within the United States.
          </p>
        </div>

        {/* Policy changes */}
        <div className="mt-8 rounded-3xl bg-white/70 p-8 ring-1 ring-black/5 backdrop-blur">
          <h2 className="text-2xl font-extrabold text-[#1A0610]">
            Changes to This Policy
          </h2>

          <p className="mt-4 text-black/70 leading-relaxed">
            ACA may update this Privacy Policy periodically. When significant
            updates occur, this page will be updated to reflect the changes.
            Continued use of this website after updates indicates acceptance of
            the revised policy.
          </p>
        </div>
      </section>
    </main>
  );
}