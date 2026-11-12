# DOJA BEAUTY

Site français statique en priorité : Next.js App Router, TypeScript, Tailwind CSS. Aucun compte, base de données, formulaire de collecte, paiement ou API de réservation.

## Développement

Node.js 24.x et npm. Les versions sont verrouillées dans `package-lock.json`.

```sh
npm ci
npm run dev
```

## Vérification

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm start
# Dans un second terminal, une fois le serveur prêt :
npm run check:site
```

`CHECK_URL` permet de tester une autre origine locale. Les tests couvrent les garde-fous des prix/durées, les messages WhatsApp et la configuration SEO. Le contrôle HTTP vérifie les dix pages, les liens internes, les ancres, les images, les services, les erreurs 404, le sitemap et robots.txt.

## Contenu et design

- `src/data/business.ts` : coordonnées, lien Maps, Reel Instagram et horaires. Les horaires de la dernière demande sont confirmés et intégrés au JSON-LD.
- `src/data/services.ts` : les 16 prestations, descriptions, prix proposés, modes tarifaires, durées et associations photo. La validation finale figure dans BUSINESS_CONTENT_TO_CONFIRM.md.
- `src/lib/formatters.ts` : affiche les valeurs valides de statut `proposed` ou `approved`, conformément à la demande de préproduction. `unverified` reste masqué.
- `src/lib/whatsapp.ts` : messages encodés et numéro centralisés, avec prestation, catégorie, prix et durée issus du catalogue. Cliquer ouvre WhatsApp ; rien n’est envoyé automatiquement.
- `src/data/categories.ts`, `faqs.ts` : textes des catégories et réponses factuelles.
- `src/styles/globals.css` : palette approuvée (noir, blanc, rose, rose profond, blush, neutre), tokens sémantiques et composants, mise en page responsive et réduction du mouvement.
- `src/app/fonts/` : Manrope variable auto-hébergée, avec leurs licences OFL. Aucun appel Google Fonts dans le navigateur ou pendant la compilation.

La navigation et les galeries avec lightbox utilisent des composants clients ; les accordéons utilisent les éléments HTML natifs. Les avis et l’équipe ne sont pas affichés, faute de contenus approuvés.

## Photographies et direction visuelle

La refonte utilise Manrope (400–800), des compositions éditoriales asymétriques et les tokens `--black`, `--white`, `--rose`, `--deep-rose`, `--blush`, `--neutral`. Les liens et le menu conservent leurs interactions natives ; aucun paquet n’a été ajouté.

Les 29 photographies locales sont utilisées sous licence Pexels. Leurs sources et restrictions restent internes ; aucune image n’est attribuée aux locaux, à l’équipe ou aux clientes de DOJA BEAUTY. Les crédits, URL et consignes de remplacement sont dans [IMAGE_SOURCES.md](IMAGE_SOURCES.md).

- `src/data/photography.ts` : chemins, textes alternatifs et positions de recadrage.
- `src/components/ui/Artwork.tsx` : `next/image`, dimensions réservées et chargement adapté à la position dans la page.
- `public/images/photography/`, `services/`, `gallery/` et `editorial/` : fichiers WebP remplaçables, référencés dans un registre unique.
- `images/social/doja-beauty.png` : visuel Open Graph 1200 × 630 ; à remplacer en même temps que les photographies.
- `public/icon.svg` : monogramme typographique provisoire.

Les anciens SVG et polices sont conservés pour préserver le travail précédent, mais ne sont plus utilisés par le site. Ne pas relancer `scripts/create-placeholders.mjs`, ancien générateur d’illustrations.

## Déploiement et indexation

### Vercel

1. Dans Vercel, choisir **Add New → Project** et importer le dépôt privé `Medkechad00/DojaBeauty`. Autoriser l’intégration GitHub Vercel à accéder à ce dépôt si nécessaire.
2. Utiliser la branche de production `main`, le dossier racine `./`, le preset **Next.js** et **Node.js 24.x**. Installation : `npm ci`. Build : `npm run build`. Conserver le dossier de sortie par défaut de Next.js ; ne pas sélectionner `out`.
3. Ajouter `SITE_INDEXABLE=false` pour Production et Preview. Laisser `SITE_URL` absent au premier déploiement si le domaine définitif n’est pas encore connu.
4. Déployer. Dès que l’adresse stable est attribuée (domaine Vercel ou domaine personnalisé), définir `SITE_URL=https://<domaine-réel>` sans chemin, puis redéployer pour générer les canonical et les images de partage. Les variables sont lues pendant le build.
5. Après validation des contenus commerciaux, des droits photo et des mentions légales, passer `SITE_INDEXABLE=true` **en Production uniquement**, puis redéployer. Les déploiements Preview et Development restent `noindex` même si cette variable vaut `true`.

Aucun secret, compte externe ni base de données n’est nécessaire au fonctionnement du site. La configuration Next.js est détectée automatiquement ; aucun `vercel.json` ni export statique n’est nécessaire. `.vercelignore` exclut les skills, références de design et rapports QA du téléversement Vercel. Ces matériaux de travail sont également exclus du dépôt Git. `.gitignore` exclut les variables locales, builds, dépendances, caches et données de liaison Vercel du dépôt.

Pour vérifier un déploiement accessible : définir `CHECK_URL` sur son origine HTTPS et lancer `npm run check:site`. Si Vercel protège le déploiement par authentification, utiliser la vérification locale ou un accès de test autorisé.

### Configuration SEO

Déploiement Next.js standard ; aucun export statique forcé. Copier `.env.example` en `.env.local`, définir `SITE_URL` avec l’origine HTTPS réelle (sans chemin) et reconstruire. Le domaine n’est jamais inventé : sans configuration, aucun canonical ni URL de site dans le JSON-LD n’est émis.

`SITE_INDEXABLE=false` par défaut : robots bloque l’exploration, les pages sont `noindex` et le sitemap est vide. Après validation du contenu et des photos, définir `SITE_INDEXABLE=true` **et** le domaine réel puis reconstruire. Les huit pages principales alimentent alors le sitemap, les URL canoniques et les métadonnées de partage. Les deux pages juridiques restent `noindex` tant qu’elles sont des brouillons ; retirer le paramètre `false` de leur appel `pageMetadata` après validation si leur indexation est souhaitée.

Avant lancement public : approuver définitivement les prestations, prix, durées et descriptions ; valider les photos et le logo/les textes ; fournir les mentions juridiques et les coordonnées vérifiées de Vercel ; choisir le domaine ; confirmer le lien de profil Instagram si disponible. La carte actuelle reste une version de préproduction avec des prix `proposed` affichés : leur validation est nécessaire avant publication publique. `noindex` ne restreint pas l’accès ; utiliser la protection des déploiements Vercel pendant cette validation. Les règles d’accueil sans rendez-vous et d’annulation restent omises. Aucun outil analytique n’est activé.

Les pages légales partagent `src/components/legal/LegalLayout.tsx` et `src/data/legal.ts`. Les données juridiques absentes sont omises ; la liste de publication est dans `LEGAL_INFORMATION_TO_CONFIRM.md`.

Les fichiers de travail locaux `skills/` et `references/` ne sont pas versionnés. `agentRules: false` empêche Next.js d’ajouter automatiquement ses instructions au fichier du projet. La refonte suit la dernière direction demandée par le propriétaire. Cette direction remplace les anciennes consignes de police et de palette du PRD.

L’audit npm des dépendances de production ne rapporte aucune vulnérabilité au 3 novembre 2026. L’audit complet signale 16 alertes modérées issues de `minimatch` dans les outils ESLint. Aucun correctif compatible n’est proposé pour cette chaîne de dépendances ; ne pas appliquer `npm audit fix --force`, qui propose des rétrogradations incompatibles. Réévaluer lors de la mise à jour des outils de lint.
