// app/about/leadership/page.tsx
import Image from "next/image";

type Leader = {
  name: string;
  role: string;
  photo?: string; // "/leaders/name.png"
};

const leaders: Leader[] = [
  { name: "Chief Dr. Obum Billy Okoye", role: "President", photo: "/leaders/obum-okoye.png" },
  { name: "Bishop Cyril Nwoye", role: "Vice President", photo: "/leaders/cyril-nwoye.png" },
  { name: "Mr Cyril Ekwalor", role: "Secretary", photo: "/leaders/cyril-ekwalor.png" },
  { name: "Lady Amaka Tabugbo", role: "Financial Secretary", photo: "/leaders/amaka-tabugbo.png" },
  { name: "Lady Nwamaka Ikefuna", role: "Asst. Secretary", photo: "/leaders/nwamaka-ikefuna.png" },
  { name: "Lady Edith Nwaopara", role: "Treasurer", photo: "/leaders/edith-nwaopara.png" },
  { name: "Lady Gloria Nkemaka-Azie", role: "Public Relation Officer", photo: "/leaders/gloria-nkemaka-azie.png" },
  { name: "Lady Ifeoma Ilodigwe", role: "Provost", photo: "/leaders/ifeoma-ilodigwe.png" },
  { name: "Sir Charles Makachi Esq", role: "Legal Advisor", photo: "/leaders/charles-makachi.png" },
];

function initials(name: string) {
  const parts = name.replace(/[^a-zA-Z\s]/g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts[parts.length - 1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export default function LeadershipPage() {
  return (
    <main className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/12 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[420px] w-[620px] rounded-full bg-[#D6B15A]/14 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-14 md:pb-24 md:pt-16">
        {/* Title */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-[#F7E9D3] shadow">
            ACA LEADERSHIP
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-[#4B0B22] md:text-6xl">
            Our Leadership
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 md:text-lg">
            Meet the team serving Awkuzu Cultural Association across the United States.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((p) => (
            <div
              key={p.name}
              className="group relative overflow-hidden rounded-[28px] bg-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] ring-1 ring-black/5 transition duration-200 hover:-translate-y-2 hover:shadow-[0_34px_95px_rgba(0,0,0,0.18)]"
            >
              {/* decorative header band */}
              <div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />
              <div className="absolute inset-x-0 top-14 h-px bg-black/5" />

              {/* card inner */}
              <div className="relative p-7 pt-10">
                {/* Avatar (switch to rounded-rectangle + face-safe crop) */}
                <div className="relative mx-auto -mt-8 h-44 w-44">
                  {/* glow */}
                  <div className="absolute inset-0 rounded-3xl bg-[#4B0B22]/18 blur-2xl opacity-0 transition group-hover:opacity-100" />

                  {/* double ring frame */}
                  <div className="relative h-44 w-44 overflow-hidden rounded-3xl bg-white ring-[6px] ring-[#D6B15A] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
                    <div className="absolute inset-[6px] rounded-3xl ring-2 ring-[#4B0B22]/25" />

                    {p.photo ? (
                      <Image
                        src={p.photo}
                        alt={p.name}
                        fill
                        className="object-cover object-top"
                        sizes="176px"
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center rounded-3xl bg-gradient-to-br from-[#4B0B22] via-[#6A0F33] to-[#1A0610] text-4xl font-extrabold tracking-wide text-[#F7E9D3]">
                        {initials(p.name)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Text */}
                <div className="mt-6 text-center">
                  <div className="mx-auto max-w-[22ch] text-[20px] font-extrabold leading-snug tracking-tight text-[#1A0610] md:text-[22px]">
                    {p.name}
                  </div>

                  <div className="mt-3 inline-flex items-center justify-center rounded-full bg-[#4B0B22] px-4 py-2 text-sm font-semibold tracking-wide text-[#F7E9D3] shadow-sm ring-1 ring-black/10">
                    {p.role.toUpperCase()}
                  </div>
                </div>

                {/* Hover shine */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/18 blur-3xl" />
                  <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[#D6B15A]/22 blur-3xl" />
                </div>

                {/* subtle bottom accent */}
                <div className="mt-6 h-1.5 w-full rounded-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A] opacity-70" />
              </div>
            </div>
          ))}
        </div>

        
      </section>
    </main>
  );
}
