"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email address";
    if (!form.phone.trim()) e.phone = "Phone is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n; });
  }

  const inputClass =
    "w-full px-4 py-3 bg-white border border-gray-200 text-sm text-[#1C1C1E] placeholder:text-gray-300 focus:outline-none focus:border-[#119DA4] transition-colors font-[family-name:var(--font-sora)]";

  return (
    <section id="contact" className="py-24 bg-[#F7F8FA] font-[family-name:var(--font-space-grotesk)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#119DA4]" />
              <span className="text-[#119DA4] text-xs font-bold tracking-[0.2em] uppercase">
                Contact Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1C1C1E] tracking-tight">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mt-4 text-gray-400 text-lg leading-relaxed font-[family-name:var(--font-sora)]">
              Ready to take the next step? Fill out the form and we&apos;ll get back to you shortly.
            </p>

            <div className="mt-12 space-y-6">
              <p className="text-xs font-bold tracking-wider uppercase text-gray-400">
                Or contact us directly
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#119DA4]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:manisha@mbcreditconsulting.com.au" className="text-sm text-gray-400 hover:text-[#119DA4] transition-colors font-[family-name:var(--font-sora)]">
                  manisha@mbcreditconsulting.com.au
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gray-200 flex items-center justify-center text-[#119DA4]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <a href="tel:0402434333" className="text-sm text-gray-400 hover:text-[#119DA4] transition-colors font-[family-name:var(--font-sora)]">
                  0402 434 333
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white border border-[#119DA4]/20 p-10 text-center">
                <div className="w-12 h-12 bg-[#119DA4]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#119DA4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1E]">Thanks for reaching out!</h3>
                <p className="mt-2 text-sm text-gray-400 font-[family-name:var(--font-sora)]">
                  We&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-bold tracking-wider uppercase text-[#119DA4] hover:text-[#0e8a90] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={inputClass}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClass}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="04XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={inputClass}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>
                <div>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1C1C1E] text-white font-bold text-sm tracking-wider uppercase py-4 hover:bg-[#119DA4] transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
