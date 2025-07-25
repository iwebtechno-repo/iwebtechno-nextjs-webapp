// Fix export name to avoid conflict with next/dynamic
export const dynamic = "force-static";

import productConfig from "./product-config";
import { HeroSection } from "../components/HeroSection";
import { ProductFeatureCardListClient } from "../components/ProductFeatureCardListClient";
import { AccordionSection } from "../components/AccordionSection";
import { CtaSectionClient } from "../components/CtaSectionClient";

export default function Page() {
  return (
    <>
      <HeroSection {...productConfig.hero} />
      <ProductFeatureCardListClient features={productConfig.features} />
      <AccordionSection submodules={productConfig.submodules} />
      <CtaSectionClient {...productConfig.cta} />
    </>
  );
}
