// Shared schema fragments that mirror the live awceugene.com JSON-LD graph.
// Every subpage embeds WebPage + BreadcrumbList + this WebSite + LocalBusiness.

export const SITE_URL = "https://awceugene.com";

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "Absolute Wellness Center",
  description: "Regenerative Medicine in Eugene, OR",
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        valueName: "search_term_string",
      },
    },
  ],
  inLanguage: "en-US",
};

export const localBusinessSchema = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  name: "Absolute Wellness Center",
  url: SITE_URL,
  image: "/wp-content/uploads/2023/08/Absolute-Wellness-Center-Logo.jpg",
  address: {
    addressLocality: "Eugene",
    addressRegion: "OR",
    postalCode: "97401",
    streetAddress: "2286 Oakmont Way ",
  },
  openingHours:
    "Monday: 9:00 am - 6:00 pm,Tuesday: 9:00 am - 6:00 pm,Wednesday: 9:00 am - 6:00 pm,Thrusday: 9:00 am - 6:00 pm,Friday: Closed,Saturday: Closed,Sunday: Closed",
  priceRange: "$$",
  telephone: "+1-(541) 484-5777",
  description: "Convenient and affordable Regenerative Medicine in Eugene, OR.",
};

export function buildPageGraph(opts: {
  url: string;
  name: string;
  description: string;
  breadcrumb: { name: string; item?: string }[];
  datePublished?: string;
  dateModified?: string;
}) {
  const breadcrumbId = `${opts.url}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": opts.url,
        url: opts.url,
        name: opts.name,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
        ...(opts.dateModified ? { dateModified: opts.dateModified } : {}),
        description: opts.description,
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-US",
        potentialAction: [{ "@type": "ReadAction", target: [opts.url] }],
      },
      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: opts.breadcrumb.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: b.name,
          ...(b.item ? { item: b.item } : {}),
        })),
      },
      websiteSchema,
    ],
  };
}
