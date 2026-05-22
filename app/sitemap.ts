import type { MetadataRoute } from "next";

const ROUTES = [
  "/",
  "/about/",
  "/accessibility/",
  "/appointments/",
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
  "/thank-you/",
  "/trigger-point-injections/",
  "/whiplash/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://awceugene.com";
  const now = new Date();
  return ROUTES.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
