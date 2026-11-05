import Link from "next/link";
import { business } from "@/data/business";
import { Navigation } from "./Navigation";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function Wordmark() {
  return <Link href="/" className="wordmark">
    <span className="wordmark-name">{business.name}</span>
    <span className="wordmark-caption">Institut de beauté · Marrakech</span>
    <span className="sr-only">Accueil</span>
  </Link>;
}

export function Header() {
  return <>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="site-header"><div className="site-container header-inner">
      <Wordmark /><Navigation /><div className="desktop-cta"><WhatsAppLink /></div>
    </div></header>
    <div className="mobile-contact"><WhatsAppLink>Écrire sur WhatsApp</WhatsAppLink></div>
  </>;
}
