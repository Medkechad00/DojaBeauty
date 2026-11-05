export type VerificationStatus = "unverified" | "approved";

interface Business {
  name: string;
  language: "fr";
  locale: "fr_MA";
  address: {
    full: string;
    street: string;
    locality: string;
    postalCode: string;
    countryCode: string;
    locationLabel: string;
  };
  phone: { display: string; international: string; whatsappDigits: string };
  mapsUrl: string;
  instagram: { url: string; label: string };
  hours: {
    status: VerificationStatus;
    schedule: { days: string; display: string; opens: string; closes: string; schemaDays: string[] }[];
  };
}

export const business: Business = {
  name: "DOJA BEAUTY",
  language: "fr",
  locale: "fr_MA",
  address: {
    full: "Douar Sidi Moussa, Tassoultante, Route d'Ourika, Marrakesh 40000, Morocco",
    street: "Douar Sidi Moussa, Tassoultante, Route d'Ourika",
    locality: "Marrakesh",
    postalCode: "40000",
    countryCode: "MA",
    locationLabel: "Sidi Moussa · Route d’Ourika · Marrakech",
  },
  phone: { display: "+212 6 16 86 01 94", international: "+212616860194", whatsappDigits: "212616860194" },
  mapsUrl: "https://maps.app.goo.gl/tFZRCMv9g93NTJjbA",
  instagram: {
    url: "https://www.instagram.com/reel/CnUffAahxXE/?igshid=YmMyMTA2M2Y=",
    label: "Voir une réalisation sur Instagram",
  },
  hours: {
    status: "approved",
    schedule: [
      { days: "Du lundi au jeudi", display: "10 h 30 – 22 h", opens: "10:30", closes: "22:00", schemaDays: ["Monday", "Tuesday", "Wednesday", "Thursday"] },
      { days: "Du vendredi au dimanche", display: "10 h 30 – 23 h", opens: "10:30", closes: "23:00", schemaDays: ["Friday", "Saturday", "Sunday"] },
    ],
  },
};
