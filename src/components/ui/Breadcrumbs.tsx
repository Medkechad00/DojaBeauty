import Link from "next/link";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteUrl } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  const all = [{ label: "Accueil", href: "/" }, ...items];
  return <>
    <nav aria-label="Fil d’Ariane"><ol className="breadcrumbs">{all.map((item, index) => <li key={item.label}>
      {index > 0 && <span aria-hidden="true">/</span>}
      {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
    </li>)}</ol></nav>
    {siteUrl && <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: all.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: new URL(item.href, siteUrl).href } : {}) })) }} />}
  </>;
}
