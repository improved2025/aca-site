"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<null | "about" | "groups" | "convention">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileConventionOpen, setMobileConventionOpen] = useState(false);
  const [mobileGroupsOpen, setMobileGroupsOpen] = useState(false);

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
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
        setMobileAboutOpen(false);
        setMobileConventionOpen(false);
        setMobileGroupsOpen(false);
      }
    };

    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileAboutOpen(false);
    setMobileConventionOpen(false);
    setMobileGroupsOpen(false);
  }

  return (
    <header className="sticky top-[40px] z-40 bg-[#4B0B22]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:py-5">
        {/* Logo + Name */}
        <Link href="/" className="flex min-w-0 items-center gap-3 md:gap-4" onClick={closeMobileMenu}>
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white ring-2 ring-[#D6B15A] md:h-14 md:w-14">
            <Image
              src="/brand/logo.png"
              alt="Awkuzu Cultural Association"
              fill
              className="object-contain p-1"
              priority
            />
          </div>

          <div className="min-w-0 leading-tight">
            <div className="truncate text-base font-bold text-white md:text-lg">
              Awkuzu Cultural Association
            </div>
            <div className="truncate text-xs tracking-wide text-[#F7E9D3] md:text-sm">
              Unity and Progress
            </div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* About dropdown */}
          <div ref={aboutRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "about" ? null : "about")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 transition hover:text-[#D6B15A]"
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

          <Link href="/impact" className="text-base font-medium text-white/90 transition hover:text-[#D6B15A]">
            Impact
          </Link>

          {/* Convention dropdown */}
          <div ref={conventionRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "convention" ? null : "convention")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 transition hover:text-[#D6B15A]"
              aria-haspopup="menu"
              aria-expanded={open === "convention"}
            >
              Convention
              <span className={`text-white/70 transition ${open === "convention" ? "rotate-180" : ""}`}>▾</span>
            </button>

            {open === "convention" && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                <DropdownLink
                  href="/convention/2026"
                  label="2026 — Maryland (Metro Points Hotel)"
                  onPick={() => setOpen(null)}
                />
                <div className="h-px bg-black/10" />
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

          <Link href="/membership" className="text-base font-medium text-white/90 transition hover:text-[#D6B15A]">
            Membership
          </Link>

          {/* Groups dropdown */}
          <div ref={groupsRef} className="relative">
            <button
              type="button"
              onClick={() => setOpen(open === "groups" ? null : "groups")}
              className="inline-flex items-center gap-2 text-base font-medium text-white/90 transition hover:text-[#D6B15A]"
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

          <Link href="/contact" className="text-base font-medium text-white/90 transition hover:text-[#D6B15A]">
            Contact
          </Link>

          {/* Donate Button */}
          <Link
            href="/donate"
            className="rounded-xl bg-[#D6B15A] px-6 py-2.5 text-base font-semibold text-[#4B0B22] shadow transition hover:bg-[#E7C874]"
          >
            Donate
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation Panel */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#3A091A] px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-3">
            {/* About */}
            <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setMobileAboutOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
              >
                <span>About</span>
                <span className={`transition ${mobileAboutOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {mobileAboutOpen && (
                <div className="border-t border-white/10">
                  <MobileLink href="/about/who-we-are" label="Who we are" onPick={closeMobileMenu} />
                  <MobileLink href="/about/mission" label="Mission" onPick={closeMobileMenu} />
                  <MobileLink href="/about/vision" label="Vision" onPick={closeMobileMenu} />
                  <MobileLink href="/about/leadership" label="Leadership" onPick={closeMobileMenu} />
                </div>
              )}
            </div>

            <MobileLink href="/impact" label="Impact" onPick={closeMobileMenu} />

            {/* Convention */}
            <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setMobileConventionOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
              >
                <span>Convention</span>
                <span className={`transition ${mobileConventionOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {mobileConventionOpen && (
                <div className="border-t border-white/10">
                  <MobileLink href="/convention/2026" label="2026 — Maryland" onPick={closeMobileMenu} />
                  <MobileLink href="/convention" label="Past conventions (2018–2025)" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2025" label="2025 — Ohio" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2024" label="2024 — Atlanta" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2023" label="2023 — Houston" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2022" label="2022 — Maryland/Washington DC" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2020" label="2020 — Maryland/Washington DC" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2019" label="2019 — Kansas City" onPick={closeMobileMenu} />
                  <MobileLink href="/convention/2018" label="2018 — Boston" onPick={closeMobileMenu} />
                </div>
              )}
            </div>

            <MobileLink href="/membership" label="Membership" onPick={closeMobileMenu} />

            {/* Groups */}
            <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <button
                type="button"
                onClick={() => setMobileGroupsOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white"
              >
                <span>Groups</span>
                <span className={`transition ${mobileGroupsOpen ? "rotate-180" : ""}`}>▾</span>
              </button>
              {mobileGroupsOpen && (
                <div className="border-t border-white/10">
                  <MobileLink href="/groups/afg" label="AFG — ACA Future Generation" onPick={closeMobileMenu} />
                  <MobileLink href="/groups/ahg" label="AHG — ACA Health Group" onPick={closeMobileMenu} />
                </div>
              )}
            </div>

            <MobileLink href="/contact" label="Contact" onPick={closeMobileMenu} />

            <Link
              href="/donate"
              onClick={closeMobileMenu}
              className="mt-1 inline-flex items-center justify-center rounded-2xl bg-[#D6B15A] px-5 py-3 text-sm font-bold text-[#4B0B22] shadow hover:brightness-95"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
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
      className="block px-4 py-3 text-sm font-semibold text-[#1A0A12] transition hover:bg-[#4B0B22] hover:text-white"
    >
      {label}
    </Link>
  );
}

function MobileLink({
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
      className="block px-4 py-3 text-sm font-medium text-white/90 transition hover:bg-white/10"
    >
      {label}
    </Link>
  );
}