import { business } from "./business";

export interface FAQ { question: string; answer: string }

export const faqs: FAQ[] = [
  { question: "Comment prendre rendez-vous ?", answer: "Choisissez une prestation puis écrivez-nous sur WhatsApp. Votre message est prérempli avec la prestation, son tarif et sa durée. L’institut vous répond pour convenir d’un créneau. Le rendez-vous est confirmé uniquement après cet échange." },
  { question: "Où se trouve l’institut ?", answer: `${business.name} se trouve à ${business.address.street}, à Marrakech. Retrouvez le lien d’itinéraire Google Maps sur notre page Contact.` },
  { question: "Comment connaître le tarif et la durée d’une prestation ?", answer: "Chaque prestation présente son prix et sa durée sur la carte. Les prix de départ en coiffure varient selon la longueur, la densité des cheveux et le travail à réaliser. L’institut précise ces éléments avec vous avant le rendez-vous." },
  { question: "Peut-on venir sans rendez-vous ?", answer: "Contactez l’institut sur WhatsApp ou par téléphone avant de vous déplacer pour connaître les possibilités d’accueil." },
];
