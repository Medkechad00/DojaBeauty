import type { BeautyService, ServicePrice, ContentStatus } from "../data/services.ts";
const currency = new Intl.NumberFormat("fr-MA", { maximumFractionDigits: 2 });
const valid = (value: number | undefined): value is number => typeof value === "number" && Number.isFinite(value) && value >= 0;
const displayable = (status: ContentStatus) => status === "approved" || status === "proposed";
export const PRICE_PENDING = "Sur demande";
export function formatPrice(price: ServicePrice): string {
  if (!displayable(price.status)) return PRICE_PENDING;
  if (price.mode === "fixed" && valid(price.fixedMad)) return currency.format(price.fixedMad) + " DH";
  if (price.mode === "from" && valid(price.minMad)) return "À partir de " + currency.format(price.minMad) + " DH";
  if (price.mode === "range" && valid(price.minMad) && valid(price.maxMad) && price.maxMad >= price.minMad) return currency.format(price.minMad) + "–" + currency.format(price.maxMad) + " DH";
  return PRICE_PENDING;
}
export function formatMinutes(minutes: number): string {
  if (minutes < 60) return minutes + " min";
  const hours = Math.floor(minutes / 60), rest = minutes % 60;
  return hours + " h" + (rest ? " " + String(rest).padStart(2, "0") : "");
}
export function formatDuration(duration: BeautyService["duration"]): string {
  if (!displayable(duration.status) || !valid(duration.min) || !valid(duration.max) || !Number.isInteger(duration.min) || !Number.isInteger(duration.max) || duration.min === 0 || duration.max < duration.min) return "Durée sur demande";
  return duration.min === duration.max ? formatMinutes(duration.min) : formatMinutes(duration.min) + "–" + formatMinutes(duration.max);
}
