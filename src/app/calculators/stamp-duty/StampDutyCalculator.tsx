"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { getStampDuty } from "@/lib/stamp-duty-rates";

const fmt = new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", minimumFractionDigits: 0, maximumFractionDigits: 0 });

const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export default function StampDutyCalculatorClient() {
  const [usage, setUsage] = useState<"owner" | "investment">("owner");
  const [fhb, setFhb] = useState(false);
  const [state, setState] = useState("NSW");
  const [value, setValue] = useState(700000);
  const [conveyancing, setConveyancing] = useState(1200);

  const results = useMemo(() => {
    const { duty, concession } = getStampDuty(state, value, fhb, usage === "investment");
    const netDuty = Math.max(duty - concession, 0);
    const total = netDuty + conveyancing;
    return { duty, concession, netDuty, total };
  }, [state, value, fhb, usage, conveyancing]);

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
          Stamp Duty Calculator
        </h1>
        <p className="mt-4 text-gray-400 text-lg leading-relaxed max-w-2xl font-[family-name:var(--font-sora)]">
          Estimate your stamp duty and upfront costs across all Australian states and territories.
        </p>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Inputs */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <label className={labelClass}>Property Usage</label>
              <div className="flex gap-4">
                {[
                  { value: "owner" as const, label: "Owner-Occupied" },
                  { value: "investment" as const, label: "Investment" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setUsage(opt.value)}
                    className={`flex-1 py-3 text-sm font-bold tracking-wide border transition-colors ${
                      usage === opt.value
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
              <label className={labelClass}>First Home Buyer?</label>
              <div className="flex gap-4">
                {[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ].map((opt) => (
                  <button
                    key={String(opt.value)}
                    onClick={() => setFhb(opt.value)}
                    className={`flex-1 py-3 text-sm font-bold tracking-wide border transition-colors ${
                      fhb === opt.value
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
              <label className={labelClass}>State / Territory</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={inputClass}
              >
                {states.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass}>Property Value</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className={`${inputClass} pl-8`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>Conveyancing Cost</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">$</span>
                <input
                  type="number"
                  value={conveyancing}
                  onChange={(e) => setConveyancing(Number(e.target.value))}
                  className={`${inputClass} pl-8`}
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 p-8 space-y-6 sticky top-[100px]">
              <h3 className="text-xs font-bold tracking-wider uppercase text-gray-400">
                Your Estimated Upfront Costs
              </h3>
              <div className="pb-4 border-b border-gray-50">
                <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">Total</p>
                <p className="text-3xl font-bold text-[#119DA4] tracking-tight mt-1">
                  {fmt.format(results.total)}
                </p>
              </div>

              <div className="pb-4 border-b border-gray-50">
                <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">Stamp Duty</p>
                <p className="text-xl font-bold text-[#1C1C1E] tracking-tight mt-1">
                  {fmt.format(results.netDuty)}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-sora)]">
                  Based on {state} tiered stamp duty rates for a property valued at {fmt.format(value)}.
                </p>
              </div>

              {results.concession > 0 && (
                <div className="pb-4 border-b border-gray-50">
                  <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">Concession</p>
                  <p className="text-xl font-bold text-[#119DA4] tracking-tight mt-1">
                    &minus;{fmt.format(results.concession)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-sora)]">
                    First home buyer concession applied.
                  </p>
                </div>
              )}

              <div>
                <p className="text-xs text-gray-400 font-[family-name:var(--font-sora)]">Conveyancing & Transfers</p>
                <p className="text-xl font-bold text-[#1C1C1E] tracking-tight mt-1">
                  {fmt.format(conveyancing)}
                </p>
                <p className="text-xs text-gray-400 mt-1 font-[family-name:var(--font-sora)]">
                  Estimated conveyancing and transfer fees.
                </p>
              </div>
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

        <p className="mt-12 text-xs text-gray-400 font-[family-name:var(--font-sora)] leading-relaxed max-w-2xl">
          Disclaimer: These calculations are estimates only and should not be relied upon as financial advice. Actual stamp duty and concessions may vary. Please consult a qualified professional for accurate figures.
        </p>
      </div>
    </div>
  );
}
