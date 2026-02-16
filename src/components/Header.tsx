"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState<null | "about" | "groups">(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileGroups, setMobileGroups] = useState(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const groupsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      const t = e.target as Node;
      if (open === "about" && aboutRef.current && !aboutRef.current.contains(t)) setOpen(null);
      if (open === "groups" && groupsRef.current && !groupsRef.current.contains(t)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // lock background scroll when mobile menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (mobileOpen) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const closeAll = () => {
    setOpen(null);
    setMobileOpen(false);
    setMobileAbout(false);
    setMobileGroups(false);
  };

  return (
    <header className="sticky top-[40px] z-40 bg-[#4B0B22]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
        {/* Logo + Name */}
        <Link href="/" className="flex items-center gap-4" onClick={() => setMobileOpen(false)}>
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
            <div className="text-lg font-bold text-white">
              Awkuzu Cultural Association
            </div>
            <div className="text-sm tracking-wide text-[#F7E9D3]">
              Unity and Progress
            </div>
          </div>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 md:hidden"
          aria-label="Open menu"
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
              <span className={`text-white/70 transition ${open === "about" ? "rotate-180" : ""}`}>
                ▾
              </span>
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

          <Link
            href="/events/2026-convention"
            className="text-base font-medium text-white/90 transition hover:text-[#D6B15A]"
          >
            Convention
          </Link>

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
              <span className={`text-white/70 transition ${open === "groups" ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>

            {open === "groups" && (
              <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                <DropdownLink
                  href="/groups/afg"
                  label="AFG — ACA Future Generation"
                  onPick={() => setOpen(null)}
                />
                <DropdownLink
                  href="/groups/ahg"
                  label="AHG — ACA Health Group"
                  onPick={() => setOpen(null)}
                />
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

      {/* Mobile panel */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="border-t border-white/10 bg-[#2B0614]">
            <div className="mx-auto max-w-6xl px-4 py-5">
              <div className="grid gap-2">
                {/* About accordion */}
                <button
                  type="button"
                  onClick={() => setMobileAbout((v) => !v)}
                  className="flex w-full items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white ring-1 ring-white/10"
                >
                  <span>About</span>
                  <span className={`text-white/70 transition ${mobileAbout ? "rotate-180" : ""}`}>▾</span>
                </button>
                {mobileAbout && (
                  <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <MobileLink href="/about/who-we-are" label="Who we are" onPick={closeAll} />
                    <MobileLink href="/about/mission" label="Mission" onPick={closeAll} />
                    <MobileLink href="/about/vision" label="Vision" onPick={closeAll} />
                    <MobileLink href="/about/leadership" label="Leadership" onPick={closeAll} />
                  </div>
                )}

                <MobileLink href="/impact" label="Impact" onPick={closeAll} />

                <MobileLink
                  href="/events/2026-convention"
                  label="Convention"
                  onPick={closeAll}
                />

                <MobileLink href="/membership" label="Membership" onPick={closeAll} />

                {/* Groups accordion */}
                <button
                  type="button"
                  onClick={() => setMobileGroups((v) => !v)}
                  className="flex w-full items-center justify-between rounded-2xl bg-white/10 px-4 py-3 text-left text-sm font-semibold text-white ring-1 ring-white/10"
                >
                  <span>Groups</span>
                  <span className={`text-white/70 transition ${mobileGroups ? "rotate-180" : ""}`}>▾</span>
                </button>
                {mobileGroups && (
                  <div className="overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
                    <MobileLink href="/groups/afg" label="AFG — ACA Future Generation" onPick={closeAll} />
                    <MobileLink href="/groups/ahg" label="AHG — ACA Health Group" onPick={closeAll} />
                  </div>
                )}

                <MobileLink href="/contact" label="Contact" onPick={closeAll} />

                <Link
                  href="/donate"
                  onClick={closeAll}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#D6B15A] px-5 py-3 text-sm font-extrabold text-[#2B0614] shadow hover:brightness-95"
                >
                  Donate
                </Link>
              </div>
            </div>
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
  onPick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onPick}
      className="block px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
    >
      {label}
    </Link>
  );
}
