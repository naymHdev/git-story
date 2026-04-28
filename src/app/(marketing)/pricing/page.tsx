import type { Metadata } from "next";
import PricingPage from "./_components";

export const metadata: Metadata = {
  title: "Pricing | GitPost AI — Simple, honest pricing",
  description:
    "Free forever for individuals. Pro and Team plans for developers who want unlimited AI posts, analytics, and multi-platform publishing.",
  openGraph: {
    title: "GitPost AI Pricing",
    description:
      "Start free. Upgrade when you're ready. No hidden fees.",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <PricingPage />
    </>
  );
};

export default page;
