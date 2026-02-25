"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<null | "about" | "groups" | "convention">(null);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const groupsRef = useRef<HTMLDivElement | null>(null);
  const conventionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;

      if (open === "about" && aboutRef.current && !aboutRef.current.contains(t)) setOpen(null);
      if (open === "groups" && groupsRef.current && !groupsRef.current.contains(t)) setOpen(null);
      if (open === "convention" && conventionRef.current && !conventionRef.current.contains(t)) setOpen(null);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };

    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-[40px] z-40 bg-[#4B0B22]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white ring-2 ring-[#D6B15A]">
            <Image
              src="/brand/logo.png"
              alt="Awkuzu Cultural Association"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="leading-tight">
            <div className="text-lg font-bold text-white">Awkuzu Cultural Association</div>
            <div className="text-sm tracking-wide text-[#F7E9D3]">Unity and Progress</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* About dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "about" ? null : "about")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-[#D6B15A] transition"
              aria-haspopup="menu"
              aria-expanded={open === "about"}
            >
              About
              <span className={`text-white/70 transition ${open === "about" ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open === "about" && (
              <div className="absolute right-0 mt-3 w-64 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                <DropdownLink href="/about/who-we-are" label="Who we are" onPick={() => setOpen(null)} />
                <DropdownLink href="/about/mission" label="Mission" onPick={() => setOpen(null)} />
                <DropdownLink href="/about/vision" label="Vision" onPick={() => setOpen(null)} />
                <DropdownLink href="/about/leadership" label="Leadership" onPick={() => setOpen(null)} />
              </div>
            )}
          </div>

          <Link href="/impact" className="text-base font-medium text-white/90 hover:text-[#D6B15A] transition">
            Impact
          </Link>

          {/* Convention dropdown */}
          <div ref={conventionRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "convention" ? null : "convention")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-[#D6B15A] transition"
              aria-haspopup="menu"
              aria-expanded={open === "convention"}
            >
              Convention
              <span className={`text-white/70 transition ${open === "convention" ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open === "convention" && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                {/* 2026 promo page */}
                <DropdownLink
                  href="/convention/2026"
                  label="2026 — Maryland (Metro Points Hotel)"
                  onPick={() => setOpen(null)}
                />

                <div className="h-px bg-black/10" />

                {/* archives */}
                <DropdownLink href="/convention" label="Past conventions (2018–2025)" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2025" label="2025 — Ohio" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2024" label="2024 — Atlanta" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2023" label="2023 — Houston" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2022" label="2022 — Maryland/Washington DC" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2020" label="2020 — Maryland/Washington DC" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2019" label="2019 — Kansas City" onPick={() => setOpen(null)} />
                <DropdownLink href="/convention/2018" label="2018 — Boston" onPick={() => setOpen(null)} />
              </div>
            )}
          </div>

          <Link href="/membership" className="text-base font-medium text-white/90 hover:text-[#D6B15A] transition">
            Membership
          </Link>

          {/* Groups dropdown */}
          <div ref={groupsRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "groups" ? null : "groups")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 hover:text-[#D6B15A] transition"
              aria-haspopup="menu"
              aria-expanded={open === "groups"}
            >
              Groups
              <span className={`text-white/70 transition ${open === "groups" ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open === "groups" && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                <DropdownLink href="/groups/afg" label="AFG — ACA Future Generation" onPick={() => setOpen(null)} />
                <DropdownLink href="/groups/ahg" label="AHG — ACA Health Group" onPick={() => setOpen(null)} />
              </div>
            )}
          </div>

          <Link href="/contact" className="text-base font-medium text-white/90 hover:text-[#D6B15A] transition">
            Contact
          </Link>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="rounded-xl bg-[#D6B15A] px-6 py-2.5 text-base font-semibold text-[#4B0B22] shadow hover:bg-[#E7C874] transition"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

function DropdownLink({
  href,
  label,
  onPick,
}: {
  href: string;
  label: string;
  onPick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onPick}
      className="block px-4 py-3 text-sm font-semibold text-[#1A0A12] hover:bg-[#4B0B22] hover:text-white transition"
    >
      {label}
    </Link>
  );
}