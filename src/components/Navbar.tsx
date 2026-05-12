"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const calcLinks = [
  { href: "/calculators/repayments", label: "Repayments Calculator" },
  { href: "/calculators/stamp-duty", label: "Stamp Duty Calculator" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const calcRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (calcRef.current && !calcRef.current.contains(e.target as Node)) {
        setCalcOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 h-[72px] flex items-center justify-between font-[family-name:var(--font-space-grotesk)]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/icon-text-white-bg.png"
            alt="MB Credit Consulting"
            width={200}
            height={40}
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-gray-400">
          <Link href="/" className="hover:text-[#1C1C1E] transition-colors">
            Home
          </Link>

          {/* Calculators dropdown */}
          <div ref={calcRef} className="relative">
            <button
              onClick={() => setCalcOpen(!calcOpen)}
              className="uppercase hover:text-[#1C1C1E] transition-colors inline-flex items-center gap-1"
            >
              Calculators
              <svg
                className={`w-3 h-3 transition-transform ${calcOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {calcOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white border border-gray-100 shadow-lg py-2 min-w-[220px]">
                {calcLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-2.5 text-[12px] tracking-wide text-gray-400 hover:text-[#1C1C1E] hover:bg-[#F7F8FA] transition-colors"
                    onClick={() => setCalcOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-[#1C1C1E] transition-colors">
            Contact
          </Link>
          <a href="tel:0402434333" className="text-[#1C1C1E] font-semibold tracking-normal normal-case">
            0402 434 333
          </a>
          <Link
            href="/contact"
            className="bg-[#1C1C1E] text-white px-6 py-2.5 text-[12px] font-bold tracking-wider hover:bg-[#119DA4] transition-colors"
          >
            GET STARTED
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-[#1C1C1E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 font-[family-name:var(--font-space-grotesk)]">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className="block py-3 text-[13px] font-medium tracking-wide uppercase text-gray-400 hover:text-[#1C1C1E]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div className="py-3">
              <p className="text-[13px] font-medium tracking-wide uppercase text-gray-400 mb-2">Calculators</p>
              {calcLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 pl-4 text-[12px] tracking-wide text-gray-400 hover:text-[#1C1C1E]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="block py-3 text-[13px] font-medium tracking-wide uppercase text-gray-400 hover:text-[#1C1C1E]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
            <a href="tel:0402434333" className="block py-3 text-[13px] font-semibold text-[#1C1C1E]">
              0402 434 333
            </a>
            <Link
              href="/contact"
              className="block mt-2 bg-[#1C1C1E] text-white text-center px-6 py-3 text-[12px] font-bold tracking-wider uppercase hover:bg-[#119DA4] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              GET STARTED
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
