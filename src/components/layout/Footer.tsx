import Link from "next/link";
import { business } from "@/data/business";
import { navigation } from "@/data/navigation";
import { Wordmark } from "./Header";
import { OpeningHours } from "@/components/sections/LocationSection";

export function Footer() {
  return <footer className="site-footer"><div className="site-container">
    <p className="footer-masthead" aria-hidden="true">DOJA BEAUTY</p><div className="footer-grid">
      <div><Wordmark /><p className="small muted mt-5">Un temps pour vous,<br />tout près de chez vous.</p></div>
      <div><p className="footer-heading">Explorer</p><nav className="footer-links" aria-label="Navigation de pied de page">{navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}</nav></div>
      <div className="footer-contact"><p className="footer-heading">Nous retrouver</p><address>{business.address.full}</address><div className="footer-links"><a href={`tel:${business.phone.international}`}>{business.phone.display}</a><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer">Itinéraire Google Maps ↗</a><a href={business.instagram.url} target="_blank" rel="noopener noreferrer">{business.instagram.label} ↗</a></div></div>
      <div><p className="footer-heading">Les horaires</p><OpeningHours compact /></div>
    </div>
    <div className="footer-bottom"><span className="flex items-center">© {new Date().getFullYear()} {business.name}</span><div className="footer-legal"><Link href="/mentions-legales">Mentions légales</Link><Link href="/politique-de-confidentialite">Confidentialité</Link></div></div>
  </div></footer>;
}
