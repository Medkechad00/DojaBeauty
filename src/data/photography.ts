export interface Photo { src: string; alt: string; position: string; width: number; height: number }

const photos = {
  "brushing": {
    "src": "/images/photography/hair-styling.webp",
    "alt": "Brushing à la brosse ronde et au sèche-cheveux",
    "position": "50% 50%",
    "width": 1800,
    "height": 1200
  },
  "manucure": {
    "src": "/images/photography/manicure.webp",
    "alt": "Travail de précision sur les ongles pendant une manucure",
    "position": "50% 50%",
    "width": 1800,
    "height": 2696
  },
  "epilationVisage": {
    "src": "/images/photography/eyebrow-care.webp",
    "alt": "Épilation des sourcils à la pince",
    "position": "50% 44%",
    "width": 1800,
    "height": 1200
  },
  "coupe": {
    "src": "/images/services/coiffure-coupe.webp",
    "alt": "Coupe de cheveux aux ciseaux et au peigne",
    "position": "50% 50%",
    "width": 1333,
    "height": 2000
  },
  "coloration": {
    "src": "/images/services/coiffure-coloration.webp",
    "alt": "Application de couleur au pinceau sur les racines",
    "position": "50% 42%",
    "width": 1333,
    "height": 2000
  },
  "balayage": {
    "src": "/images/services/coiffure-balayage.webp",
    "alt": "Application de couleur sur une mèche posée sur une feuille d’aluminium",
    "position": "50% 45%",
    "width": 1333,
    "height": 2000
  },
  "lissage": {
    "src": "/images/services/coiffure-lissage.webp",
    "alt": "Passage du fer à lisser et du peigne sur une mèche de cheveux",
    "position": "50% 40%",
    "width": 1333,
    "height": 2000
  },
  "pedicure": {
    "src": "/images/services/onglerie-pedicure.webp",
    "alt": "Travail de précision sur les ongles des pieds pendant une pédicure",
    "position": "50% 58%",
    "width": 1600,
    "height": 1067
  },
  "vernis": {
    "src": "/images/services/onglerie-vernis-permanent.webp",
    "alt": "Application de vernis sur un ongle avec un pinceau fin",
    "position": "50% 54%",
    "width": 1333,
    "height": 2000
  },
  "gel": {
    "src": "/images/services/onglerie-extensions-gel.webp",
    "alt": "Mise en forme à la lime d’un ongle allongé",
    "position": "50% 48%",
    "width": 1335,
    "height": 2000
  },
  "demiJambes": {
    "src": "/images/services/epilation-demi-jambes.webp",
    "alt": "Application de cire à la spatule sur le bas d’une jambe",
    "position": "50% 62%",
    "width": 1506,
    "height": 2000
  },
  "jambes": {
    "src": "/images/services/epilation-jambes.webp",
    "alt": "Retrait d’une bande de cire sur une jambe",
    "position": "50% 55%",
    "width": 1333,
    "height": 2000
  },
  "corps": {
    "src": "/images/services/epilation-corps.webp",
    "alt": "Préparation de cire violette avec une spatule et des gants",
    "position": "50% 50%",
    "width": 1600,
    "height": 1067
  },
  "visage": {
    "src": "/images/services/esthetique-soin-visage.webp",
    "alt": "Nettoyage du visage avec des éponges douces",
    "position": "50% 46%",
    "width": 1333,
    "height": 2000
  },
  "cils": {
    "src": "/images/services/esthetique-extensions-cils.webp",
    "alt": "Pose précise d’extensions de cils avec une pince",
    "position": "50% 52%",
    "width": 1600,
    "height": 1067
  },
  "maquillage": {
    "src": "/images/services/esthetique-maquillage.webp",
    "alt": "Application de maquillage sur les lèvres au pinceau",
    "position": "50% 45%",
    "width": 1600,
    "height": 1067
  },
  "hero": {
    "src": "/images/editorial/beaute-maquillage.webp",
    "alt": "Maquillage du regard au pinceau dans une lumière douce",
    "position": "50% 44%",
    "width": 1600,
    "height": 1067
  },
  "hairDetail": {
    "src": "/images/gallery/coiffure-brushing-detail.webp",
    "alt": "Travail à la brosse ronde et au sèche-cheveux",
    "position": "50% 45%",
    "width": 1600,
    "height": 1067
  },
  "hairColourDetail": {
    "src": "/images/gallery/coiffure-couleur-detail.webp",
    "alt": "Préparation d’une couleur au pinceau dans un bol",
    "position": "50% 48%",
    "width": 1600,
    "height": 1067
  },
  "hairFoils": {
    "src": "/images/gallery/coiffure-meches-detail.webp",
    "alt": "Travail de couleur sur des mèches séparées par des feuilles d’aluminium",
    "position": "50% 45%",
    "width": 1333,
    "height": 2000
  },
  "nailDetail": {
    "src": "/images/gallery/onglerie-vernis-rouge.webp",
    "alt": "Détail de mains avec un vernis rouge",
    "position": "50% 42%",
    "width": 1333,
    "height": 2000
  },
  "nailColour": {
    "src": "/images/gallery/onglerie-manucure-detail.webp",
    "alt": "Détail de mains aux ongles limés et vernis dans un ton naturel",
    "position": "50% 50%",
    "width": 1333,
    "height": 2000
  },
  "feetDetail": {
    "src": "/images/gallery/onglerie-pedicure-detail.webp",
    "alt": "Une pédicure réalisée dans un espace de soin",
    "position": "50% 55%",
    "width": 1333,
    "height": 2000
  },
  "waxDetail": {
    "src": "/images/gallery/epilation-bande-cire.webp",
    "alt": "Application d’une bande de cire sur la jambe",
    "position": "50% 50%",
    "width": 1333,
    "height": 2000
  },
  "skinDetail": {
    "src": "/images/gallery/epilation-jambes-detail.webp",
    "alt": "Composition de jambes sur un fond gris clair",
    "position": "50% 50%",
    "width": 1335,
    "height": 2000
  },
  "waxTools": {
    "src": "/images/gallery/epilation-cire-detail.webp",
    "alt": "Une bande de cire prête pour l’épilation",
    "position": "50% 50%",
    "width": 1600,
    "height": 1067
  },
  "skincareDetail": {
    "src": "/images/gallery/esthetique-masque.webp",
    "alt": "Application d’un masque sur le visage avec un pinceau",
    "position": "50% 50%",
    "width": 1333,
    "height": 2000
  },
  "lashesDetail": {
    "src": "/images/gallery/esthetique-cils-detail.webp",
    "alt": "Brossage des cils avec un goupillon",
    "position": "50% 50%",
    "width": 1600,
    "height": 1068
  },
  "legalDetail": {
    "src": "/images/editorial/details-soin.webp",
    "alt": "Flacons de soin ambrés sur un fond clair",
    "position": "50% 58%",
    "width": 1333,
    "height": 2000
  }
} as const satisfies Record<string, Photo>;

export const photography = { ...photos, hair: photos.brushing, nails: photos.manucure, face: photos.epilationVisage, treatment: photos.visage, brows: photos.maquillage } as const;
export type PhotoId = keyof typeof photography;
export const photoForSource = (src: string): Photo | undefined => Object.values(photography).find((photo) => photo.src === src);
