import type { BeautyService } from "@/data/services";
import { photography } from "@/data/photography";
import { formatDuration, formatPrice } from "@/lib/formatters";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

export function ServiceCard({ service, index, sizes }: { service: BeautyService; index: number; sizes: string }) {
  return (
    <article className="service-card photo-panel" data-service={service.id} aria-labelledby={`service-${service.id}`}>
      <Artwork src={photography[service.image].src} className="service-card-photo" sizes={sizes} />
      <span className="service-index" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
      <div className="service-card-content">
        <h3 id={`service-${service.id}`}>{service.name}</h3>
        <p className="service-card-description">{service.description}</p>
        <div className="service-card-terms">
          <p className="service-card-price">{formatPrice(service.price)}</p>
          <p className="service-card-duration"><Icon name="clock" />{formatDuration(service.duration)}</p>
        </div>
        <WhatsAppLink service={service} variant="text" className="service-card-booking">Réserver sur WhatsApp</WhatsAppLink>
      </div>
    </article>
  );
}
