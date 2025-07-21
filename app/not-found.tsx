"use client";

import { ErrorCard } from "@/components/ui/ErrorCard";

export default function NotFound() {
  return (
    <ErrorCard
      iconType="404"
      heading="Page Not Found"
      message="Sorry, the page you are looking for does not exist. It may have been moved or deleted."
      homeButtonText="Go to Home"
    />
  );
}
