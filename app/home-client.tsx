"use client";

import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";
import Clients from "@/components/clients";
import Metrics from "@/components/metrics";
import CTA from "@/components/cta";

const HomeClient = () => {
  return (
    <>
      <Hero />
      <Metrics />
      <Clients />
      <HowItWorks />
      <Testimonials />
      <CTA />
    </>
  );
};

export default HomeClient;
