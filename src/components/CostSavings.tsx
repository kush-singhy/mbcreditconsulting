export default function CostSavings() {
  return (
    <section className="py-24 md:py-32 bg-white font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#1C1C1E] leading-[1.1] tracking-tight">
            Using a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">broker</span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-[#119DA4]/15 -z-0" />
            </span>{" "}
            will cost you nothing.
            <br />
            And could save you{" "}
            <span className="font-extrabold italic text-[#119DA4]">
              thousands!
            </span>
          </h2>
          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl font-[family-name:var(--font-sora)]">
            We&apos;re paid by the lender when your loan settles, so there&apos;s no cost to you at any stage. With access to 30+ lenders and hundreds of products, we find the most competitive deal for your situation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
          {[
            {
              title: "Clear, Jargon-Free Advice",
              description: "No confusing terminology. We explain everything in plain English.",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              ),
            },
            {
              title: "Fast Turnaround",
              description: "Quick, efficient service and clear advice",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              title: "Over 30+ Lenders",
              description: "Access better rates and more features",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21" />
                </svg>
              ),
            },
          ].map((card) => (
            <div key={card.title} className="bg-white p-10 group">
              <div className="text-[#1C1C1E] group-hover:text-[#119DA4] transition-colors mb-5">
                {card.icon}
              </div>
              <h3 className="text-[15px] font-bold text-[#1C1C1E] tracking-tight">
                {card.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 font-[family-name:var(--font-sora)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
