import { ReactNode } from "react";

// The layout expects the page to export a default config object
export default function ProductsLayout({ children }: { children: ReactNode }) {
  // The page will render the sections using the config, so just render children
  return <>{children}</>;
}
