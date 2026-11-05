import { business } from "../data/business.ts";
import { categories } from "../data/categories.ts";
import type { BeautyService } from "../data/services.ts";
import { formatDuration, formatPrice } from "./formatters.ts";
export function buildWhatsAppUrl(subject?: BeautyService | string): string {
  let message: string;
  if (typeof subject === "object") {
    const category = categories.find(({ id }) => id === subject.categoryId);
    message = ["Bonjour " + business.name + ",", "", "Je souhaite prendre rendez-vous pour la prestation suivante :", "", "Service : " + subject.name, "Catégorie : " + (category?.name ?? ""), "Tarif indicatif : " + formatPrice(subject.price), "Durée estimée : " + formatDuration(subject.duration), "", "Pourriez-vous me communiquer vos disponibilités ?", "", "Merci."].join("\n");
  } else {
    message = subject ? "Bonjour " + business.name + ", je souhaite un rendez-vous en " + subject + ". Pourriez-vous me renseigner sur vos disponibilités ? Merci." : "Bonjour " + business.name + ", je souhaite avoir des renseignements sur vos prestations et prendre rendez-vous. Pourriez-vous m’aider ? Merci.";
  }
  return "https://wa.me/" + business.phone.whatsappDigits + "?text=" + encodeURIComponent(message);
}
