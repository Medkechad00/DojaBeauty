import { photography, type PhotoId } from "./photography.ts";

export type CategoryId = "coiffure" | "onglerie" | "epilation" | "esthetique-maquillage";

export interface ServiceCategory {
  id: CategoryId;
  name: string;
  shortDescription: string;
  introduction: string;
  heading: string;
  image: string;
  number: string;
  gallery: PhotoId[];
  galleryTitle: string;
  bookingHeading: string;
  faq: { question: string; answer: string };
}

export const categories: ServiceCategory[] = [
  {
    id: "coiffure", gallery: ["hairDetail", "hairColourDetail", "hairFoils"], galleryTitle: "La couleur, le mouvement.", bookingHeading: "Une nouvelle envie pour vos cheveux ?", name: "Coiffure", number: "01",
    shortDescription: "Coupe, brushing & couleur",
    heading: "Vos envies, vos cheveux.",
    introduction: "Une coupe, un brushing ou un projet de couleur ? Parcourez les prestations de coiffure et échangez avec l’institut pour préciser votre demande.",
    image: photography.hair.src,
    faq: { question: "Comment préparer ma demande de coiffure ?", answer: "Indiquez la prestation souhaitée et la longueur de vos cheveux dans votre message. Vous pouvez aussi partager une photo d’inspiration sur WhatsApp pour expliquer votre envie. Pour une couleur, un balayage ou un lissage, ces précisions aident à évaluer le travail à réaliser." },
  },
  {
    id: "onglerie", gallery: ["nailDetail", "nailColour", "feetDetail"], galleryTitle: "Jusqu’au bout des ongles.", bookingHeading: "Quelle sera votre prochaine couleur ?", name: "Onglerie", number: "02",
    shortDescription: "Mains, pieds & vernis",
    heading: "Le sens du détail.",
    introduction: "Manucure, pédicure, vernis ou gel : retrouvez les prestations pour les mains et les pieds. Précisez votre envie à l’institut avant de convenir d’un rendez-vous.",
    image: photography.nails.src,
    faq: { question: "Que préciser pour un rendez-vous d’onglerie ?", answer: "Mentionnez la prestation souhaitée et indiquez si vous portez déjà du vernis ou des extensions. L’institut pourra vous renseigner sur les étapes à prévoir et préparer votre rendez-vous." },
  },
  {
    id: "epilation", gallery: ["waxDetail", "skinDetail", "waxTools"], galleryTitle: "Les détails du soin.", bookingHeading: "Préparons votre séance.", name: "Épilation", number: "03",
    shortDescription: "Visage & corps",
    heading: "Une attention à chaque zone.",
    introduction: "Consultez les prestations d’épilation du visage et du corps. Écrivez à l’institut pour préciser les zones souhaitées et les modalités de votre rendez-vous.",
    image: photography.face.src,
    faq: { question: "Comment choisir ma prestation d’épilation ?", answer: "Précisez les zones concernées dans votre message. Pour une prestation regroupant plusieurs zones, demandez à l’institut ce qui est inclus. Signalez également toute sensibilité de la peau." },
  },
  {
    id: "esthetique-maquillage", gallery: ["skincareDetail", "lashesDetail", "hero"], galleryTitle: "Le visage en lumière.", bookingHeading: "Un soin ou une occasion à préparer ?", name: "Esthétique & maquillage", number: "04",
    shortDescription: "Visage, regard & mise en beauté",
    heading: "À chaque envie, sa mise en beauté.",
    introduction: "Soin du visage, beauté du regard ou maquillage pour un événement : découvrez les prestations et contactez l’institut pour préparer votre venue.",
    image: photography.treatment.src,
    faq: { question: "Comment préparer une demande de maquillage ?", answer: "Indiquez la date de votre événement, l’heure à laquelle vous souhaitez être prête et le style de maquillage envisagé. L’institut vous répondra pour convenir du rendez-vous et du style souhaité." },
  },
];

export const categoryHref = (id: CategoryId) => `/prestations/${id}`;
