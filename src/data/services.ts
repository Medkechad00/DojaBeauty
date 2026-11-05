import type { CategoryId } from "./categories.ts";
import type { VerificationStatus } from "./business.ts";
import type { PhotoId } from "./photography.ts";

export type ContentStatus = VerificationStatus | "proposed";
export type PriceMode = "range" | "from" | "fixed" | "on_request";
export interface ServicePrice { status: ContentStatus; mode: PriceMode; minMad?: number; maxMad?: number; fixedMad?: number }
export interface BeautyService {
  id: string; categoryId: CategoryId; name: string; description: string;
  status: ContentStatus; duration: { status: ContentStatus; min: number; max: number };
  price: ServicePrice; image: PhotoId; visible: boolean; featured: boolean;
}

// Development menu explicitly requested on 4 November 2026. Proposed is not final approval.
// See BUSINESS_CONTENT_TO_CONFIRM.md before production.
function service(id: string, categoryId: CategoryId, name: string, description: string, amount: number, minutes: number, image: PhotoId, mode: "fixed" | "from" = "fixed", featured = false): BeautyService {
  return { id, categoryId, name, description, image, status: "proposed", duration: { status: "proposed", min: minutes, max: minutes }, price: { status: "proposed", mode, ...(mode === "fixed" ? { fixedMad: amount } : { minMad: amount }) }, visible: true, featured };
}

export const services: BeautyService[] = [
  service("brushing", "coiffure", "Brushing", "Une mise en forme à la brosse et au sèche-cheveux, pour une finition souple, lisse ou avec du mouvement.", 80, 40, "brushing", "fixed", true),
  service("coupe", "coiffure", "Coupe", "Rafraîchir les pointes, redessiner les contours ou changer de longueur : la coupe se prépare autour de vos envies.", 150, 45, "coupe"),
  service("coloration-racines", "coiffure", "Coloration / racines", "Une application de couleur sur les racines ou les longueurs, selon la nuance choisie et votre couleur actuelle.", 350, 120, "coloration", "from"),
  service("balayage-meches", "coiffure", "Balayage / mèches", "Un travail de couleur sur des mèches sélectionnées pour créer des reflets et du relief dans la chevelure.", 550, 180, "balayage", "from"),
  service("lissage", "coiffure", "Kératine / lissage protéiné", "Un travail de lissage des longueurs, mèche par mèche. Le protocole est choisi avec vous selon la nature de vos cheveux.", 950, 180, "lissage", "from"),
  service("manucure", "onglerie", "Manucure classique", "Mise en forme des ongles et travail du contour pour des mains soignées jusque dans les détails.", 100, 40, "manucure"),
  service("pedicure", "onglerie", "Pédicure classique", "Un entretien esthétique des pieds, avec une attention portée à la forme des ongles et à leur contour.", 130, 50, "pedicure"),
  service("vernis-permanent", "onglerie", "Vernis permanent", "Préparation des ongles et application d’un vernis permanent dans la teinte de votre choix.", 180, 60, "vernis", "fixed", true),
  service("extensions-gel", "onglerie", "Extensions gel", "Une construction en gel pour allonger les ongles et dessiner la forme souhaitée, du plus discret au plus affirmé.", 350, 105, "gel"),
  service("epilation-visage", "epilation", "Sourcils + lèvre supérieure", "Une épilation des deux zones pour entretenir la ligne des sourcils et retirer les poils de la lèvre supérieure.", 50, 20, "epilationVisage"),
  service("epilation-demi-jambes", "epilation", "Demi-jambes", "Une épilation ciblée du bas des jambes, des chevilles aux genoux.", 90, 30, "demiJambes"),
  service("epilation-jambes", "epilation", "Jambes complètes", "L’épilation des jambes sur toute leur longueur, des chevilles jusqu’aux cuisses.", 150, 45, "jambes"),
  service("epilation-corps", "epilation", "Corps complet", "Une séance regroupant plusieurs zones du corps. Précisez les zones souhaitées lors de votre demande de rendez-vous.", 350, 90, "corps"),
  service("soin-visage", "esthetique-maquillage", "Soin visage classique", "Un nettoyage et des gestes de soin pour le visage, avec une attention portée aux besoins de votre peau.", 300, 60, "visage", "fixed", true),
  service("extensions-cils", "esthetique-maquillage", "Extensions de cils", "Une pose d’extensions sur les cils pour composer le regard souhaité. La longueur et le style se choisissent ensemble.", 450, 105, "cils"),
  service("maquillage", "esthetique-maquillage", "Maquillage soirée / événement", "Travail du teint, des yeux et des lèvres pour un maquillage accordé à votre tenue, à l’occasion et à vos préférences.", 300, 60, "maquillage"),
];
export const visibleServices = services.filter((item) => item.visible);
export const getCategoryServices = (id: CategoryId) => visibleServices.filter((item) => item.categoryId === id);
export const catalogueApproved = visibleServices.every((item) => item.status === "approved" && item.price.status === "approved" && item.duration.status === "approved");
