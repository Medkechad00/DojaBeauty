import type { MetadataRoute } from "next";
import { isIndexable, publicPaths, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable || !siteUrl) return [];
  return publicPaths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
