import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1E] font-[family-name:var(--font-sora)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Image
              src="/logos/icon-text-white-bg.png"
              alt="MB Credit Consulting"
              width={180}
              height={37}
              className="brightness-0 invert"
            />
            <p className="mt-5 text-sm text-gray-400 leading-relaxed max-w-md">
              Helping Australians achieve their home ownership dreams with expert mortgage broking services.
            </p>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-5 font-[family-name:var(--font-space-grotesk)]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/calculators/repayments" className="hover:text-white transition-colors">Repayments Calculator</Link>
              </li>
              <li>
                <Link href="/calculators/stamp-duty" className="hover:text-white transition-colors">Stamp Duty Calculator</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-bold tracking-wider uppercase mb-5 font-[family-name:var(--font-space-grotesk)]">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="tel:0402434333" className="hover:text-white transition-colors">0402 434 333</a>
              </li>
              <li>
                <a href="mailto:manisha@mbcreditconsulting.com.au" className="hover:text-white transition-colors">
                  manisha@mbcreditconsulting.com.au
                </a>
              </li>
              <li>Sydney, Australia</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} MB Credit Consulting. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
