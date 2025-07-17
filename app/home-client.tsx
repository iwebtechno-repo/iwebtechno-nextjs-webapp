"use client";

import Hero from "@/components/hero";
import Stats from "@/components/stats";
import HowItWorks from "@/components/how-it-works";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Clients from "@/components/clients";
import CTA from "@/components/cta";

const HomeClient = () => {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <CTA />
    </>
  );
};

export default HomeClient;
