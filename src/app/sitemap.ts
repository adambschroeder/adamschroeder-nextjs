import type { MetadataRoute } from "next";
import { siteUrl } from "@/src/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, changeFrequency: "yearly", priority: 1 }];
}
