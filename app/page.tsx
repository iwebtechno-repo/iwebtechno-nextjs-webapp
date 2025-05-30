import Hero from "@/components/hero";
import Stats from "@/components/stats";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Clients from "@/components/clients";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Clients />
      <CTA />
    </main>
  );
}
