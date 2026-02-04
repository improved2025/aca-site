import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/about", label: "About" },
  { href: "/impact", label: "Impact" },
  { href: "/events/2026-convention", label: "Convention" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
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
            <div className="text-lg font-bold text-white">
              Awkuzu Cultural Association
            </div>
            <div className="text-sm text-[#F7E9D3] tracking-wide">
              Unity and Progress
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-base font-medium text-white/90 hover:text-[#D6B15A] transition"
            >
              {i.label}
            </Link>
          ))}

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
