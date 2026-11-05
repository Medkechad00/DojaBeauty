import type { Metadata } from "next";
import { business } from "../data/business.ts";
import { categories, categoryHref } from "../data/categories.ts";

function configuredOrigin(): string | undefined {
  const value = process.env.SITE_URL?.trim();
  if (!value) return undefined;
  const url = new URL(value);
  if (url.protocol !== "https:" || url.pathname !== "/" || url.search || url.hash || url.username || url.password) {
    throw new Error("SITE_URL must be an HTTPS origin with no path, credentials, query, or fragment.");
  }
  return url.origin;
}

export const siteUrl = configuredOrigin();
const isProductionDeployment = !process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production";
export const isIndexable = Boolean(siteUrl) && process.env.SITE_INDEXABLE === "true" && isProductionDeployment;
export const publicPaths = ["/", "/prestations", ...categories.map(({ id }) => categoryHref(id)), "/institut", "/contact"];

export function pageMetadata(title: string, description: string, path: string, allowIndex = true): Metadata {
  const url = siteUrl ? new URL(path, siteUrl).href : undefined;
  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    robots: { index: isIndexable && allowIndex, follow: true },
    openGraph: {
      title, description, siteName: business.name, locale: business.locale, type: "website",
      ...(url ? { url, images: [{ url: new URL("/images/social/doja-beauty.png", siteUrl).href, width: 1200, height: 630, alt: `${business.name} — Institut de beauté à Marrakech` }] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(siteUrl ? { images: [new URL("/images/social/doja-beauty.png", siteUrl).href] } : {}) },
  };
}

export function businessSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: business.name,
    telephone: business.phone.international,
    address: { "@type": "PostalAddress", streetAddress: business.address.street, addressLocality: business.address.locality, postalCode: business.address.postalCode, addressCountry: business.address.countryCode },
    hasMap: business.mapsUrl,
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(business.hours.status === "approved" ? { openingHoursSpecification: business.hours.schedule.map((row) => ({ "@type": "OpeningHoursSpecification", dayOfWeek: row.schemaDays, opens: row.opens, closes: row.closes })) } : {}),
  };
}
