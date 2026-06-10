import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { Icons } from "@/components/home/ui";
import {
  ServiceBody,
  HowWeHelp,
  RelatedServices,
  GreenCTABand,
  ProcessTimeline,
} from "@/components/ServiceSections";
import ServiceFAQ from "@/components/ServiceFAQ";
import { buildPageGraph } from "@/lib/site-schema";

const TITLE = "Auto Injury in Eugene, OR | Absolute Wellness Center";
const DESCRIPTION =
  "Auto accident injury care in Eugene, OR. Chiropractic adjustments and rehab to prevent chronic pain after a crash. Absolute Wellness Center — (541) 484-5777.";
const URL = "https://www.awceugene.com/auto-injury/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: "Absolute Wellness Center",
    locale: "en_US",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const pageSchema = buildPageGraph({
  url: URL,
  name: TITLE,
  description: DESCRIPTION,
  breadcrumb: [
    { name: "Home", item: "https://www.awceugene.com/" },
    { name: "Services", item: "https://www.awceugene.com/services/" },
    { name: "Auto Injury" },
  ],
});

export default function AutoInjuryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />

      <PageHero
        title="Auto Injury"
        subtitle="Early treatment after a crash is the best way to prevent long-term pain and disability."
        badge="Auto Accident Care"
        image="/images/Auto-Injuri.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Auto Injury" },
        ]}
      />

      <ServiceBody
        pill="Auto Injury"
        pillIcon={Icons.shield("h-3.5 w-3.5")}
        headingLead="Auto Injury Care in"
        headingAccent="Eugene, OR"
        image="/images/Auto-Injuri.jpg"
        imageAlt="Auto injury recovery and chiropractic care at Absolute Wellness Center"
        paragraphs={[
          "Even a \"minor\" crash can result in serious injuries like ligament sprains. This can lead to chronic pain and disability if not treated properly. In fact, research shows that early treatment is the best way to prevent long-term symptoms.",
          "Chiropractic adjustments are effective because they help restore the healthy, normal function of your nervous system without the use of drugs or surgery.",
          "Our team coordinates your post-accident care from start to finish — gentle adjustments, soft-tissue work, and rehab exercises designed to get you back to feeling normal.",
        ]}
      />

      <HowWeHelp
        heading="How We Help After"
        accent="an Accident"
        cards={[
          {
            icon: Icons.clock,
            title: "Early Treatment",
            body: "Get evaluated quickly — early care is the best defense against long-term pain.",
          },
          {
            icon: Icons.spine,
            title: "Chiropractic Adjustments",
            body: "Restore healthy nervous system function without drugs or surgery.",
          },
          {
            icon: Icons.figure,
            title: "Full Recovery Plan",
            body: "Rehab exercises and soft-tissue work to get you back to everyday life.",
          },
        ]}
      />

      <ProcessTimeline
        steps={[
          { title: "Immediate Evaluation", body: "We see auto-injury patients quickly to assess injuries and start care.", icon: Icons.stetho },
          { title: "Imaging & Documentation", body: "We coordinate any needed imaging and thoroughly document findings.", icon: Icons.shield },
          { title: "Recovery Treatment", body: "Your plan can include chiropractic, PT and other therapies as needed.", icon: Icons.hands },
          { title: "Insurance Coordination", body: "We help coordinate with your insurance and attorney throughout.", icon: Icons.calendar },
        ]}
      />

      <RelatedServices currentHref="/auto-injury/" />

      <ServiceFAQ
        faqs={[
          { q: "How soon should I see you after an accident?", a: "As soon as possible — many auto injuries don't show symptoms immediately, and early treatment leads to better outcomes." },
          { q: "Do you work with insurance after an accident?", a: "Yes. We help coordinate documentation with your insurance and attorney as needed." },
          { q: "What conditions do you treat?", a: "Whiplash, back and neck pain, headaches, soft-tissue injuries, and related auto-injury complications." },
          { q: "What if my pain started weeks after the crash?", a: "Delayed symptoms are very common. Come in — we can still evaluate and start treatment." },
        ]}
      />

      <GreenCTABand
        heading="Were you in an accident?"
        body="Don't wait for symptoms to worsen — call our Eugene clinic to start your recovery today."
      />
    </>
  );
}
