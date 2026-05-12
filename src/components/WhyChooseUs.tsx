import Image from "next/image";
import Link from "next/link";

const lenders = [
  { name: "ANZ", src: "/images/lenders/anz.avif" },
  { name: "Bankwest", src: "/images/lenders/bankwest.avif" },
  { name: "Commonwealth Bank", src: "/images/lenders/commbank.avif" },
  { name: "ING", src: "/images/lenders/ing.avif" },
  { name: "Macquarie", src: "/images/lenders/macquarie.avif" },
  { name: "NAB", src: "/images/lenders/nab.avif" },
  { name: "Suncorp", src: "/images/lenders/suncorp.avif" },
  { name: "Westpac", src: "/images/lenders/westpac.avif" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#1C1C1E] tracking-tight">
            30+ lenders with 1,000s of options for a tailored solution.
          </h3>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {lenders.map((lender) => (
              <div
                key={lender.name}
                className="py-6 px-4 flex items-center justify-center"
              >
                <Image
                  src={lender.src}
                  alt={lender.name}
                  width={120}
                  height={40}
                  className="object-contain h-8 w-auto"
                />
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-400 text-sm leading-relaxed max-w-2xl font-[family-name:var(--font-sora)]">
            We have access to a wide panel of over 30 lenders — from the big four banks to specialist and non-bank lenders — so we can compare hundreds of products and find the most competitive deal for your situation.
          </p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <p className="text-gray-400 font-[family-name:var(--font-sora)]">
            Let us find the best deal for you.
          </p>
          <Link
            href="/contact"
            className="group bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 hover:bg-[#119DA4] transition-colors inline-flex items-center gap-3"
          >
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
