"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What does a mortgage broker do?",
    a: "A mortgage broker acts as an intermediary between you and lenders. We compare home loan products from multiple lenders to find the best option for your situation, saving you time and potentially money.",
  },
  {
    q: "How much does it cost to use a mortgage broker?",
    a: "Our service is typically free for you. We're paid a commission by the lender once your loan settles. We're required by law to clearly disclose how we're remunerated, so you'll always know where you stand.",
  },
  {
    q: "How long does the home loan process take?",
    a: "From initial application to settlement, the process usually takes 4–6 weeks. However, this can vary depending on the complexity of your application and the lender's processing times.",
  },
  {
    q: "What documents do I need to apply for a home loan?",
    a: "Generally you'll need proof of identity, proof of income (payslips, tax returns), bank statements, and details of your assets and liabilities. We'll provide you with a complete checklist.",
  },
  {
    q: "Can you help if I have a low credit score?",
    a: "Absolutely. We work with a wide range of lenders, including those who specialise in helping borrowers with less-than-perfect credit histories. We'll explore all available options for you.",
  },
  {
    q: "Do I need a deposit to buy a home?",
    a: "Most lenders require a deposit of at least 5–20% of the property's value. If your deposit is less than 20%, you may need to pay Lenders Mortgage Insurance (LMI). First home buyers may be eligible for government schemes like the First Home Guarantee or First Home Owner Grant. We'll walk you through your options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#119DA4]" />
            <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-16 max-w-3xl">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-gray-100">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className="text-[15px] font-bold text-[#1C1C1E] pr-8 group-hover:text-[#119DA4] transition-colors">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-400 leading-relaxed font-[family-name:var(--font-sora)]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <p className="text-gray-400 font-[family-name:var(--font-sora)]">
            Still have questions?
          </p>
          <Link
            href="/contact"
            className="group bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 hover:bg-[#119DA4] transition-colors inline-flex items-center gap-3"
          >
            Speak With Us
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
