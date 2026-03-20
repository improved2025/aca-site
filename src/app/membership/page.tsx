"use client";

import { useState } from "react";

const villages = [
  "Amikpo",
  "Ifite",
  "Iruowelle",
  "Enugwu",
  "Other",
];

export default function MembershipPage() {
  const [form, setForm] = useState({
    firstName: "",
    familyName: "",
    phone: "",
    email: "",
    maritalStatus: "",
    sex: "",
    village: "",
    cityState: "",
    occupation: "",
    nextOfKin: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Membership form structure is ready. Submission handling will be connected next.");
  }

  return (
    <main className="relative">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#FBF5F7]" />
        <div className="absolute -top-24 left-1/2 h-[420px] w-[920px] -translate-x-1/2 rounded-full bg-[#4B0B22]/14 blur-3xl" />
        <div className="absolute -bottom-40 left-10 h-[380px] w-[520px] rounded-full bg-[#B1165A]/12 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-[420px] w-[620px] rounded-full bg-[#D6B15A]/14 blur-3xl" />
      </div>

      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-5 md:pb-24 md:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left copy */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#4B0B22] px-5 py-2.5 text-[10px] font-semibold tracking-[0.22em] text-[#F7E9D3] shadow sm:text-xs">
              MEMBERSHIP
            </div>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-[#4B0B22] sm:text-4xl md:text-6xl">
              Join the community.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base md:text-lg">
              Become part of a united network of Awkuzu sons, daughters, and friends
              committed to culture, connection, and community development across the
              United States and back home.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoCard
                title="Belong"
                text="Connect with fellow members, families, and leaders across states."
              />
              <InfoCard
                title="Participate"
                text="Take part in conventions, cultural programs, community projects, and group initiatives."
              />
              <InfoCard
                title="Build"
                text="Help strengthen Awkuzu through unity, heritage, and meaningful impact."
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
              <div className="h-2 w-full bg-gradient-to-r from-[#4B0B22] via-[#B1165A] to-[#D6B15A]" />

              <div className="p-6 sm:p-8">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
                  Membership Form
                </div>
                <h2 className="mt-3 text-2xl font-extrabold text-[#1A0610]">
                  Membership Application
                </h2>
                <p className="mt-2 text-sm text-black/70">
                  Fill in your details below. Submission can be connected once you are ready.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="First Name"
                    value={form.firstName}
                    onChange={(v) => update("firstName", v)}
                  />
                  <Field
                    label="Family Name"
                    value={form.familyName}
                    onChange={(v) => update("familyName", v)}
                  />

                  <Field
                    label="Phone"
                    value={form.phone}
                    onChange={(v) => update("phone", v)}
                    type="tel"
                  />
                  <Field
                    label="Email"
                    value={form.email}
                    onChange={(v) => update("email", v)}
                    type="email"
                  />

                  <SelectField
                    label="Marital Status"
                    value={form.maritalStatus}
                    onChange={(v) => update("maritalStatus", v)}
                    options={["Single", "Married", "Divorced", "Widowed"]}
                  />
                  <SelectField
                    label="Sex"
                    value={form.sex}
                    onChange={(v) => update("sex", v)}
                    options={["Male", "Female"]}
                  />

                  <SelectField
                    label="Village in Awkuzu"
                    value={form.village}
                    onChange={(v) => update("village", v)}
                    options={villages}
                  />
                  <Field
                    label="City and State"
                    value={form.cityState}
                    onChange={(v) => update("cityState", v)}
                  />

                  <Field
                    label="Occupation"
                    value={form.occupation}
                    onChange={(v) => update("occupation", v)}
                  />
                  <Field
                    label="Next of Kin"
                    value={form.nextOfKin}
                    onChange={(v) => update("nextOfKin", v)}
                  />

                  <div className="sm:col-span-2 pt-2">
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#4B0B22] px-6 py-3 text-sm font-semibold text-white shadow hover:bg-[#6A0F33]"
                    >
                      Submit Membership Application
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="mt-6 rounded-3xl bg-white/70 p-5 text-sm text-black/70 ring-1 ring-black/5 backdrop-blur">
              This page is ready for backend connection. Next step is to decide where submissions should go:
              email, Google Sheets, Supabase, or database storage.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl bg-white/75 p-5 ring-1 ring-black/5 backdrop-blur">
      <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#B1165A]">
        Membership
      </div>
      <div className="mt-2 text-lg font-extrabold text-[#1A0610]">{title}</div>
      <p className="mt-2 text-sm leading-relaxed text-black/70">{text}</p>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
        {label}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-[#FBF5F7] px-4 py-3 text-sm text-[#1A0610] outline-none transition focus:border-[#4B0B22] focus:bg-white"
      />
    </label>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="block">
      <div className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-black/55">
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-2xl border border-black/10 bg-[#FBF5F7] px-4 py-3 text-sm text-[#1A0610] outline-none transition focus:border-[#4B0B22] focus:bg-white"
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}