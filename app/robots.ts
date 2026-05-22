import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://awceugene.com/sitemap.xml",
    host: "https://awceugene.com",
  };
}
