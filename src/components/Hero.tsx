import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-[72px] bg-[#F7F8FA] font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-[#119DA4]" />
              <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
                Your Trusted Mortgage Broker
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[64px] font-bold text-[#1C1C1E] leading-[1.05] tracking-tight">
              Simple, Reliable
              <br />
              Mortgage Advice
              <br />
              for <span className="text-[#119DA4]">Your Situation</span>
            </h1>
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl font-[family-name:var(--font-sora)]">
              From first homes to refinancing, investing, construction, and SMSF, we compare 30+ lenders to find the right loan for you.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-start gap-5">
              <a
                href="#contact"
                className="group bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase px-10 py-4 hover:bg-[#119DA4] transition-colors inline-flex items-center gap-3"
              >
                Book a Free Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <span className="text-sm text-gray-400 pt-3 font-[family-name:var(--font-sora)]">
                or call <a href="tel:0402434333" className="text-[#1C1C1E] font-semibold hover:text-[#119DA4]">0402 434 333</a>
              </span>
            </div>
          </div>

          <div className="hidden lg:flex justify-end">
            <Image
              src="/images/hero-consultation.png"
              alt="Mortgage consultation"
              width={560}
              height={560}
              priority
              className="w-full max-w-[560px] h-auto"
            />
          </div>
        </div>
      </div>
      <div className="h-[2px] bg-gradient-to-r from-[#119DA4] via-[#119DA4]/30 to-transparent" />
    </section>
  );
}
