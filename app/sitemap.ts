import type { MetadataRoute } from "next";
import { CITIES, SERVICES } from "@/lib/areas";

const ROUTES = [
  "/",
  "/about/",
  "/accessibility/",
  "/appointments/",
  "/areas/",
  "/auto-injury/",
  "/back-pain/",
  "/bioidentical-hormones/",
  "/chiropractic-care/",
  "/conditions/",
  "/contact/",
  "/hormonal-imbalance/",
  "/joint-injections/",
  "/joint-pain/",
  "/knee-pain/",
  "/medical-weight-loss/",
  "/neck-pain/",
  "/neuropathy/",
  "/new-patients/",
  "/nutritional-ivs/",
  "/pain-relief/",
  "/physical-therapy/",
  "/privacy-policy/",
  "/services/",
  "/shoulder-pain/",
  "/sitemap/",
  "/spinal-decompression/",
  "/trigger-point-injections/",
  "/whiplash/",
];

const PRIMARY_PAGES = new Set([
  "/about/",
  "/services/",
  "/conditions/",
  "/contact/",
  "/appointments/",
  "/new-patients/",
  "/areas/",
  "/chiropractic-care/",
  "/nutritional-ivs/",
  "/medical-weight-loss/",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.awceugene.com";
  const now = new Date();

  const core = ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : PRIMARY_PAGES.has(path) ? 0.8 : 0.7,
  }));

  const cityHubs = CITIES.map((c) => ({
    url: `${base}/areas/${c.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const cityServices = CITIES.flatMap((c) =>
    SERVICES.map((s) => ({
      url: `${base}/areas/${c.slug}/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }))
  );

  return [...core, ...cityHubs, ...cityServices];
}
