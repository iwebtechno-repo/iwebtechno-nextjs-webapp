import type { Metadata } from "next";
import ScheduleDemoClient from "./schedule-demo-client";

export const metadata: Metadata = {
  title: "Schedule a Demo | iWebTechno",
  description:
    "Schedule a personalized demo of iWebTechno's campus digitization solutions",
};

const ScheduleDemoPage = () => {
  return <ScheduleDemoClient />;
};

export default ScheduleDemoPage;
