import { business } from "@/data/business";
import { Icon } from "@/components/ui/Icon";
import Link from "next/link";

export function OpeningHours({ compact = false }: { compact?: boolean }) {
  return <div className={compact ? "" : "hours"}>
    {!compact && <p className="eyebrow">Horaires communiqués</p>}
    <dl>{business.hours.schedule.map((row) => <div className="hours-row" key={row.days}><dt>{row.days}</dt><dd>{row.display}</dd></div>)}</dl>
    {business.hours.status !== "approved" && <p className="hours-note">Horaires à confirmer auprès de l’institut avant votre visite.</p>}
  </div>;
}

export function DirectionsCard() {
  return <div className="location-card"><Icon name="pin" className="location-mark" /><div><p className="eyebrow mb-4">Marrakech Sud</p><h3>Marrakech.<br />Côté Ourika.</h3><p className="small muted">Retrouvez l’itinéraire vers l’institut et préparez votre venue sur la route de l’Ourika.</p></div><a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="button button-secondary">Ouvrir l’itinéraire <Icon name="external" /></a></div>;
}

export function LocationSection() {
  return <section className="section" aria-labelledby="location-heading"><div className="site-container location-grid">
    <div className="location-copy"><p className="eyebrow section-label">Une adresse, votre parenthèse</p><h2 id="location-heading">Retrouvez-nous<br />à Sidi Moussa.</h2><address>{business.address.full}</address><a href={`tel:${business.phone.international}`} className="text-link"><Icon name="phone" />{business.phone.display}</a><OpeningHours /><Link href="/contact" className="text-link mt-5">Toutes les informations pratiques <Icon name="arrow" /></Link></div>
    <DirectionsCard />
  </div></section>;
}
