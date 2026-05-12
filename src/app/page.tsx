import Hero from "@/components/Hero";
import CostSavings from "@/components/CostSavings";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CostSavings />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </>
  );
}
