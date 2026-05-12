import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with MB Credit Consulting. Book a free consultation to discuss your home loan options.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <ContactSection />
    </div>
  );
}
