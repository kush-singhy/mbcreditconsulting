import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F7F8FA] font-[family-name:var(--font-sora)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          <div className="lg:col-span-2">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/headshot-manisha.jpeg"
                alt="Manisha Bakshi — MFAA Accredited Mortgage Broker"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#1C1C1E] to-transparent">
                <div className="w-8 h-[2px] bg-[#119DA4] mb-3" />
                <p className="text-white font-bold text-lg font-[family-name:var(--font-space-grotesk)]">Manisha Bakshi</p>
                <p className="text-white/50 text-sm mt-1">MFAA Accredited</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#119DA4]" />
              <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase font-[family-name:var(--font-space-grotesk)]">
                Meet Your Broker
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1E] tracking-tight font-[family-name:var(--font-space-grotesk)]">
              Manisha Bakshi
            </h2>
            <p className="mt-8 text-gray-400 text-[16px] leading-[1.8]">
              I&apos;ve spent 12+ years helping Australians find the right home loan, and I take a personalised approach with every client. That means clear guidance and real support from your first call through to settlement.
            </p>
            <p className="mt-5 text-gray-400 text-[16px] leading-[1.8]">
              With access to 30+ lenders, I compare options across residential, SMSF, commercial, and asset finance, so you get a recommendation that actually fits your needs.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              <div className="border border-gray-200 px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#119DA4]" />
                <span className="text-xs font-bold tracking-wider uppercase text-gray-500 font-[family-name:var(--font-space-grotesk)]">MFAA Accredited</span>
              </div>
              <div className="border border-gray-200 px-5 py-3 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#119DA4]" />
                <span className="text-xs font-bold tracking-wider uppercase text-gray-500 font-[family-name:var(--font-space-grotesk)]">Client-First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
