"use client";

import { useEffect } from "react";

export default function Home() {
  // Ensure page scrolls to top on refresh to show "Enter the Circle" section
  useEffect(() => {
    // Scroll to top immediately on page load/refresh
    window.scrollTo({ top: 0, behavior: "instant" });

    // Prevent scroll restoration
    if (
      typeof window !== "undefined" &&
      "scrollRestoration" in window.history
    ) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return (
    <main className="w-full overflow-x-hidden max-w-full">
      <p>hellow</p>
    </main>
  );
}
