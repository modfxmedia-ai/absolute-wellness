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

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://awceugene.com";
  const now = new Date();

  const core = ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: (path === "/" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "/" ? 1 : 0.7,
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
