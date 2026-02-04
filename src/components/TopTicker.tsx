"use client";

export default function TopTicker() {
  return (
    <div className="relative z-50 overflow-hidden bg-[#4B0B22]">
      <div className="whitespace-nowrap py-2">
        <div className="inline-block animate-marquee px-6 text-sm font-semibold tracking-wide text-[#F7E9D3]">
          <span className="mx-10">
            Maryland, get ready. Our 2026 Annual Convention lands July 31–August 2
            at the award-winning Metro Points Hotel in New Carrollton.
          </span>
          <span className="mx-10 text-[#D6B15A]">•</span>
          <span className="mx-10">
            Maryland, get ready. Our 2026 Annual Convention lands July 31–August 2
            at the award-winning Metro Points Hotel in New Carrollton.
          </span>
        </div>
      </div>

      {/* subtle gold bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#D6B15A]/60" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
