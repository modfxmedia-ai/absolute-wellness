export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "MedicalBusiness"],
    name: "Absolute Wellness Center",
    url: "https://www.awceugene.com",
    telephone: "+1-541-484-5777",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2286 Oakmont Way",
      addressLocality: "Eugene",
      addressRegion: "OR",
      postalCode: "97401",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "98",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
