import type { Metadata } from "next";
import ContactPage from "./_components";

export const metadata: Metadata = {
  title: "Contact | GitPost AI — Let's talk",
  description:
    "Reach out to the GitPost AI team for support, partnerships, feature requests, or just to say hi. We read every message.",
  openGraph: {
    title: "Contact GitPost AI",
    description:
      "Get in touch with our team — we reply within 24 hours.",
    type: "website",
  },
};

const page = () => {
  return (
    <>
      <ContactPage />
    </>
  );
};

export default page;
