import type { Metadata } from "next";
import InnovationClient from "./innovation-client";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Innovation | iWebTechno",
  description:
    "Discover the innovative technologies and approaches that power iWebTechno's solutions",
};

const InnovationPage = () => {
  return <InnovationClient />;
};

export default InnovationPage;
