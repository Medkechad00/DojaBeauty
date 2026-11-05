# Contenus commerciaux à valider avant production

Version de travail du 4 novembre 2026, demandée explicitement par le propriétaire. Les prix et durées ci-dessous remplacent les estimations du PRD dans cette version de développement. Ils sont affichés sans notice publique, mais restent marqués **proposed**, distincts de **approved**, dans src/data/services.ts.

## Carte proposée — validation finale du salon

| Catégorie | Prestation | Prix proposé | Durée proposée |
| --- | --- | --- | --- |
| Coiffure | Brushing | 80 DH | 40 min |
| Coiffure | Coupe | 150 DH | 45 min |
| Coiffure | Coloration / racines | À partir de 350 DH | 2 h |
| Coiffure | Balayage / mèches | À partir de 550 DH | 3 h |
| Coiffure | Kératine / lissage protéiné | À partir de 950 DH | 3 h |
| Onglerie | Manucure classique | 100 DH | 40 min |
| Onglerie | Pédicure classique | 130 DH | 50 min |
| Onglerie | Vernis permanent | 180 DH | 1 h |
| Onglerie | Extensions gel | 350 DH | 1 h 45 |
| Épilation | Sourcils + lèvre supérieure | 50 DH | 20 min |
| Épilation | Demi-jambes | 90 DH | 30 min |
| Épilation | Jambes complètes | 150 DH | 45 min |
| Épilation | Corps complet | 350 DH | 1 h 30 |
| Esthétique & maquillage | Soin visage classique | 300 DH | 1 h |
| Esthétique & maquillage | Extensions de cils | 450 DH | 1 h 45 |
| Esthétique & maquillage | Maquillage soirée / événement | 300 DH | 1 h |

La donnée applicative unique reste src/data/services.ts. Ce tableau est un relevé de validation, pas une seconde source pour les pages. Après approbation, mettre à jour les statuts du service, du prix et de la durée ; le constructeur actuel applique proposed à l’ensemble de la carte. Le catalogue, les catégories, la sélection de l’accueil et les messages WhatsApp lisent les mêmes objets et formateurs.

## Points à confirmer

- [ ] Approuver chaque service, prix, durée et description.
- [ ] Confirmer les éléments inclus : shampoing/brushing pour une coupe ou une couleur ; soins des cuticules ; vernis inclus ou non ; dépose et éventuels suppléments.
- [ ] Définir les variations de coloration, balayage et lissage selon longueur, densité et travail ; conserver leur mode « à partir de ».
- [ ] Préciser les zones comprises dans « corps complet » et les techniques d’épilation disponibles. Aucune liste de zones supplémentaires n’est inventée.
- [ ] Valider les protocoles du soin visage, du lissage et de la pose de cils ; aucune marque, qualification, appareil ou promesse médicale n’est avancé.
- [ ] Confirmer que les tarifs affichés sont les montants à régler par la clientèle et préciser les éventuelles informations fiscales nécessaires.
- [ ] Valider les images et les droits pour la publication finale ; remplacer par les photos réelles si disponibles. Voir IMAGE_SOURCES.md.
- [ ] Valider l’ensemble des textes et le signe typographique de marque.
- [ ] Fournir un véritable lien de profil Instagram si souhaité. Le lien existant est un Reel, correctement présenté comme une réalisation à consulter.
- [ ] Compléter la liste juridique distincte dans LEGAL_INFORMATION_TO_CONFIRM.md.

## Coordonnées confirmées dans la demande actuelle

DOJA BEAUTY — Douar Sidi Moussa, Tassoultante, Route d'Ourika, Marrakesh 40000, Morocco.
Téléphone et WhatsApp : +212 6 16 86 01 94.
Itinéraire : https://maps.app.goo.gl/tFZRCMv9g93NTJjbA
Reel Instagram : https://www.instagram.com/reel/CnUffAahxXE/?igshid=YmMyMTA2M2Y=

Horaires confirmés par la dernière instruction : lundi–jeudi 10:30–22:00 ; vendredi–dimanche 10:30–23:00. Leur statut est approved dans business.ts et ils figurent dans le JSON-LD.

## Avant ouverture publique

Conserver SITE_INDEXABLE=false tant que la carte, les droits photo et les éléments légaux ne sont pas validés. Choisir le domaine et l’hébergement, renseigner SITE_URL, puis reconstruire et contrôler les liens/metadata. Aucune mise en production n’a été effectuée. Le site n’envoie aucun message automatiquement et tout rendez-vous nécessite l’accord de l’institut.
