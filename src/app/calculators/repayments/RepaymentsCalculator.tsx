"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const fmt = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 0, maximumFractionDigits: 0 });

export default function RepaymentsCalculatorClient() {
  const [price, setPrice] = useState(900000);
  const [deposit, setDeposit] = useState(180000);
  const [rate, setRate] = useState(5.29);
  const [term, setTerm] = useState(30);
  const [type, setType] = useState<"pi" | "io">("pi");

  const results = useMemo(() => {
    const loan = Math.max(price - deposit, 0);
    const monthlyRate = rate / 100 / 12;
    const months = term * 12;

    let monthly: number;
    if (type === "io" || monthlyRate === 0) {
      monthly = monthlyRate === 0 ? loan / months : loan * monthlyRate;
    } else {
      monthly = loan * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    }

    const totalRepayment = monthly * months;
    const totalInterest = totalRepayment - loan;

    return { loan, monthly, totalRepayment, totalInterest };
  }, [price, deposit, rate, term, type]);

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 text-sm text-[#1C1C1E] focus:outline-none focus:border-[#119DA4] transition-colors font-[family-name:var(--font-sora)]";
  const labelClass =
    "block text-xs font-bold tracking-wider uppercase text-gray-400 mb-2 font-[family-name:var(--font-space-grotesk)]";

  return (
    <div className="pt-[72px] bg-[#F7F8FA] min-h-screen font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px] bg-[#119DA4]" />
          <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
            Financial Tools
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight">
          Repayments Calculator
        </h1>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl font-[family-name:var(--font-sora)]">
          Estimate your monthly repayments and total loan costs with our easy-to-use calculator.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <label className={labelClass}>Property Price</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className={`${inputClass} pl-8`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Repayment Type</label>
              <div className="flex gap-4">
                {[
                  { value: "pi" as const, label: "Principal & Interest" },
                  { value: "io" as const, label: "Interest Only" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setType(opt.value)}
                    className={`flex-1 py-3 text-sm font-bold tracking-wide border transition-colors ${
                      type === opt.value
                        ? "bg-[#1C1C1E] text-white border-[#1C1C1E]"
                        : "bg-white text-gray-400 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass}>Down Payment</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  type="number"
                  value={deposit}
                  onChange={(e) => setDeposit(Number(e.target.value))}
                  className={`${inputClass} pl-8`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Interest Rate</label>
              <div className="relative">
                <input
                  type="number"
                  step="0.01"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className={`${inputClass} pr-8`}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">%</span>
              </div>
            </div>

            <div>
              <label className={labelClass}>Loan Term</label>
              <select
                value={term}
                onChange={(e) => setTerm(Number(e.target.value))}
                className={inputClass}
              >
                {[10, 15, 20, 25, 30].map((y) => (
                  <option key={y} value={y}>{y} years</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 p-8 space-y-6 sticky top-[100px]">
              <h3 className="text-xs font-bold tracking-wider uppercase text-gray-400">
                Your Estimate
              </h3>
              {[
                { label: "Loan Amount", value: fmt.format(results.loan) },
                { label: "Monthly Payment", value: fmt.format(results.monthly), highlight: true },
                { label: "Total Repayment", value: fmt.format(results.totalRepayment) },
                { label: "Total Interest Paid", value: fmt.format(results.totalInterest) },
              ].map((item) => (
                <div key={item.label} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">{item.label}</p>
                  <p className={`text-2xl font-bold tracking-tight mt-1 ${item.highlight ? "text-[#119DA4]" : "text-[#1C1C1E]"}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            href="/contact"
            className="group bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 hover:bg-[#119DA4] transition-colors inline-flex items-center gap-3"
          >
            Discuss Your Options
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <span className="text-sm text-gray-400 font-[family-name:var(--font-sora)]">
            or call us on <a href="tel:0402434333" className="text-[#1C1C1E] font-semibold hover:text-[#119DA4]">0402 434 333</a>
          </span>
        </div>
      </div>
    </div>
  );
}
