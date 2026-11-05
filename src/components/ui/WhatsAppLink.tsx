import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { business } from "@/data/business";
import { Icon } from "./Icon";
import type { BeautyService } from "@/data/services";

export function WhatsAppLink({ serviceName, service, children = "Prendre rendez-vous", variant = "primary", className = "" }: {
  serviceName?: string;
  service?: BeautyService;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "text";
  className?: string;
}) {
  const style = variant === "text" ? "text-link" : `button ${variant === "primary" ? "" : `button-${variant}`}`;
  const visibleLabel = typeof children === "string" ? `${children} — ` : "";
  const subject = service?.name ?? serviceName;
  return <a href={buildWhatsAppUrl(service ?? serviceName)} target="_blank" rel="noopener noreferrer" className={`${style} ${className}`} aria-label={`${visibleLabel}Contacter ${business.name} sur WhatsApp${subject ? ` pour ${subject}` : " pour un rendez-vous"} (nouvel onglet)`}>
    {variant !== "text" && <Icon name="message" />}{children}{variant === "text" && <Icon name="external" />}
  </a>;
}
