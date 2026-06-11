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

const TITLE = "Auto Injury Care in Eugene, OR — Same-Day Appointments | Absolute Wellness Center";
const DESCRIPTION =
  "Hurt in a crash? Same-day auto injury appointments in Eugene, OR. We coordinate with your PIP insurance and attorney — call (541) 484-5777 now.";
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
        title="Hurt in a Crash? Get Care Today."
        subtitle="Same-day auto injury appointments in Eugene, OR. The longer you wait, the harder it gets — call (541) 484-5777 now and start your recovery."
        badge="Same-Day Appointments"
        image="/images/Auto-Injuri.jpg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services/" },
          { label: "Auto Injury" },
        ]}
      />

      <ServiceBody
        pill="Auto Injury Care"
        pillIcon={Icons.shield("h-3.5 w-3.5")}
        headingLead="Don't Wait. Recovery Starts in the"
        headingAccent="First 72 Hours."
        image="/images/Auto-Injuri.jpg"
        imageAlt="Auto injury recovery and chiropractic care at Absolute Wellness Center in Eugene, OR"
        ctaLabel="Book Same-Day Appointment"
        paragraphs={[
          "Even a \"minor\" fender-bender can tear ligaments, jam joints, and inflame nerves. Skip treatment and a week-old injury can turn into months of headaches, neck pain, and disability. Research is clear: patients who start care within the first 72 hours recover faster and have far fewer long-term symptoms.",
          "We see auto-accident patients on the same day — no waiting weeks for an opening. Our team handles the chiropractic adjustments, soft-tissue therapy, and rehab from start to finish, so you focus on getting better while we handle the paperwork.",
          "Oregon PIP covers up to $15,000 of injury treatment regardless of fault. In most cases there's no out-of-pocket cost to you — we bill PIP directly and coordinate with your attorney if you have one.",
        ]}
        extra={
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              "Same-day appointments available",
              "We bill your PIP insurance directly",
              "Attorney & legal-team coordination",
              "Documented exam, imaging & care notes",
              "Whiplash, back, neck & headache care",
              "Treating crash injuries since 2017",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm font-semibold text-gray-800"
              >
                <span
                  className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "#7E9146" }}
                >
                  {Icons.check("h-3 w-3")}
                </span>
                {item}
              </li>
            ))}
          </ul>
        }
      />

      <HowWeHelp
        heading="What to Do"
        accent="Right Now"
        cards={[
          {
            icon: Icons.phone,
            title: "1. Call Today",
            body: "Phone (541) 484-5777 and ask for a same-day auto-injury visit. We'll get you in fast — even if symptoms feel minor.",
          },
          {
            icon: Icons.stetho,
            title: "2. Get Examined",
            body: "Full evaluation, on-site digital X-ray if needed, and a clear plan to address pain before it becomes chronic.",
          },
          {
            icon: Icons.shield,
            title: "3. We Handle the Rest",
            body: "Chiropractic, rehab, and soft-tissue care — plus direct billing to your PIP insurance and coordination with your attorney.",
          },
        ]}
      />

      <ProcessTimeline
        steps={[
          { title: "Same-Day Visit", body: "Call us and we'll get you in today — no waiting weeks for an evaluation.", icon: Icons.clock },
          { title: "Exam & Imaging", body: "Thorough exam, on-site digital X-ray if indicated, and full documentation of every finding.", icon: Icons.stetho },
          { title: "Active Treatment", body: "Chiropractic adjustments, soft-tissue therapy, and rehab exercises mapped to your injury.", icon: Icons.hands },
          { title: "Insurance & Legal", body: "We bill PIP directly and coordinate records with your attorney so you don't have to.", icon: Icons.shield },
        ]}
      />

      <RelatedServices currentHref="/auto-injury/" />

      <ServiceFAQ
        faqs={[
          { q: "Can I really get a same-day appointment?", a: "Yes. Call (541) 484-5777 and tell us you were in an accident — we hold time on the schedule for new auto-injury patients and will get you in as quickly as possible." },
          { q: "How soon should I be seen after a crash?", a: "As soon as possible — ideally within 72 hours. Many serious auto injuries don't show symptoms right away, and early treatment dramatically lowers your risk of chronic pain." },
          { q: "Will it cost me anything?", a: "In most Oregon auto-accident cases, no. Personal Injury Protection (PIP) is required on every Oregon auto policy and covers up to $15,000 of medical care regardless of who caused the crash. We bill your PIP carrier directly." },
          { q: "Do you work with attorneys?", a: "Yes. If you have an attorney, we coordinate exam findings, treatment notes, and billing records with their office. If you don't have one and need a referral, we can point you to attorneys we trust." },
          { q: "What if my pain didn't start until weeks later?", a: "Delayed-onset pain is extremely common after a crash — adrenaline and inflammation can mask injuries for days or weeks. Come in. We can still evaluate you and start care." },
          { q: "What injuries do you treat?", a: "Whiplash, neck and back pain, headaches, shoulder injuries, low-back strains, sciatica, soft-tissue injuries, and the chronic complications that follow untreated crashes." },
        ]}
      />

      <GreenCTABand
        heading="Were you in an accident? Call now."
        body="Same-day appointments. Direct PIP billing. We coordinate with your attorney. Don't let an injury become a lifelong problem — call (541) 484-5777 today."
      />
    </>
  );
}
