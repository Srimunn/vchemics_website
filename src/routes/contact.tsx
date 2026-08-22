import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContactSection } from "@/components/site/ContactSection";

const title = "Contact V Chemics India Solutions | Padi, Chennai";
const description =
  "Talk to our technical team about admixtures, grouts, waterproofing or repair. Omsakthi Street, Kumaran Nagar Extn-I, Padi, Chennai - 600050. +91 99423-54602.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get In Touch"
        intro="Send us your requirement — mix, quantity, timeline — and our team will come back with a recommendation and a quote."
      />
      <ContactSection />
    </>
  );
}
