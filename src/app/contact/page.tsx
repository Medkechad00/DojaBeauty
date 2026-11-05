import { Artwork } from "@/components/ui/Artwork";
import { photography } from "@/data/photography";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/data/business";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { DirectionsCard, OpeningHours } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata = pageMetadata("Contact & itinéraire", "Adresse, téléphone et horaires de DOJA BEAUTY à Sidi Moussa, Tassoultante. Retrouvez l’itinéraire et demandez un rendez-vous sur WhatsApp.", "/contact");

export default function ContactPage() {
  return <><div className="site-container"><Breadcrumbs items={[{ label: "Contact" }]} /><div className="contact-intro"><div className="page-intro"><p className="eyebrow section-label">Au plaisir d’échanger</p><h1>On se retrouve<br />à Sidi Moussa ?</h1><p>Une question sur une prestation, un tarif ou votre venue ? Écrivez-nous sur WhatsApp ou appelez l’institut.</p></div><Artwork src={photography.hair.src} priority sizes="(min-width: 900px) 24vw, 92vw" /></div>
    <div className="location-grid pb-16"><div className="contact-details"><section className="contact-detail"><h2>Écrivez-nous ou appelez-nous</h2><div className="actions"><WhatsAppLink>Écrire sur WhatsApp</WhatsAppLink><a className="text-link" href={`tel:${business.phone.international}`}><Icon name="phone" />{business.phone.display}</a></div><p className="small muted mt-4">Le rendez-vous est confirmé par l’institut après votre échange.</p></section><section className="contact-detail"><h2>L’adresse</h2><p>{business.name}</p><address>{business.address.full}</address></section><section className="contact-detail"><h2>Les horaires</h2><OpeningHours compact /></section><section><h2 className="mb-2">Une réalisation à découvrir</h2><a href={business.instagram.url} target="_blank" rel="noopener noreferrer" className="text-link">{business.instagram.label}<Icon name="external" /></a></section></div><DirectionsCard /></div>
  </div><FAQSection /></>;
}
