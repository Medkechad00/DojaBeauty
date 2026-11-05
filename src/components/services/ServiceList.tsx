import type { BeautyService } from "@/data/services";
import { formatDuration, formatPrice } from "@/lib/formatters";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Artwork } from "@/components/ui/Artwork";
import { photography } from "@/data/photography";
import { Icon } from "@/components/ui/Icon";
import { ServiceCard } from "./ServiceCard";
export function ServiceList({ services, editorial = false, categoryId = "selection" }: { services: BeautyService[]; editorial?: boolean; categoryId?: string }) {
  if (editorial) {
    return <div className={"service-collection collection-" + categoryId}>{services.map((service, index) => {
      const fullRow = services.length % 2 !== 0 && index === services.length - 1;
      const desktopSize = categoryId === "coiffure" ? (index === 0 ? "60vw" : "32vw") : fullRow ? "92vw" : "54vw";
      const sizes = `(min-width: 900px) ${desktopSize}, (min-width: 640px) ${fullRow ? "92vw" : "46vw"}, 100vw`;
      return <ServiceCard key={service.id} service={service} index={index} sizes={sizes} />;
    })}</div>;
  }
  return <div className="service-list">{services.map((service) => <article className="service-row" key={service.id} data-service={service.id}>
    <div className="service-image"><Artwork src={photography[service.image].src} sizes="112px" /></div>
    <div className="service-body"><div className="service-info"><h3>{service.name}</h3><p>{service.description}</p></div>
    <div className="service-terms"><p className="service-price">{formatPrice(service.price)}</p><p className="duration"><Icon name="clock" />{formatDuration(service.duration)}</p></div>
    <WhatsAppLink service={service} variant="text" className="service-link">Demander un rendez-vous</WhatsAppLink></div>
  </article>)}</div>;
}
