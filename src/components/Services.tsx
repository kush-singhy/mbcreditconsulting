import Link from "next/link";

const services = [
  {
    title: "Home Loans",
    description:
      "We'll find the right loan to suit your needs and budget, with access to competitive rates from over 30 lenders.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Refinancing",
    description:
      "Already have a home loan? We'll review your current deal and help you switch to a better rate and save thousands.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M21.015 4.356v4.992" />
      </svg>
    ),
  },
  {
    title: "First Home Buyer Support",
    description:
      "Navigating your first purchase can be overwhelming. We'll guide you through every step, including grants and incentives.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
  {
    title: "SMSF Lending",
    description:
      "Looking to buy property through your super fund? We'll guide you through the requirements and find a loan that fits your SMSF strategy.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F7F8FA] font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#119DA4]" />
            <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            How We Can Help You
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed font-[family-name:var(--font-sora)]">
            We offer a full range of mortgage broking services to help you at every stage of your property journey.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
          {services.map((service) => (
            <div key={service.title} className="bg-[#F7F8FA] p-10 group">
              <div className="text-[#1C1C1E] group-hover:text-[#119DA4] transition-colors mb-5">
                {service.icon}
              </div>
              <h3 className="text-[17px] font-bold text-[#1C1C1E] tracking-tight">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-gray-400 font-[family-name:var(--font-sora)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <p className="text-gray-400 font-[family-name:var(--font-sora)]">
            Not sure which loan is right for you?
          </p>
          <Link
            href="/contact"
            className="group bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 hover:bg-[#119DA4] transition-colors inline-flex items-center gap-3"
          >
            Let&apos;s Chat
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
