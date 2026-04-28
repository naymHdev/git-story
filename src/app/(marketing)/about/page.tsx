import type { Metadata } from "next";
import AboutPage from "./_components";

export const metadata: Metadata = {
  title: "About Us | GitPost AI — Built by developers, for developers",
  description:
    "Learn about the GitPost AI team, our mission to make developer talent visible, our core values, and the journey that brought us here.",
  openGraph: {
    title: "About GitPost AI",
    description:
      "Meet the team turning GitHub activity into professional developer presence.",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <AboutPage />
    </>
  );
};

export default page;

