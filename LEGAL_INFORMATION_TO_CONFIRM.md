# Informations et démarches juridiques avant production

La configuration unique est src/data/legal.ts. Les pages françaises sont des projets de contenu à faire valider par l’exploitant. Les champs inconnus ne sont ni inventés ni affichés sous forme de placeholders. Le fait que les pages soient visuellement complètes ne vaut pas conformité juridique finalisée.

## Identité et mentions légales

- [ ] Identité exacte du responsable exploitant (personne physique ou morale) et qualité d’éditeur/responsable du traitement.
- [ ] Forme juridique, siège social s’il diffère de l’adresse commerciale.
- [ ] RC, ICE et IF lorsqu’applicables, avec leur libellé exact.
- [ ] Directeur de la publication, si applicable.
- [ ] Adresse électronique officielle si elle existe ; aucune adresse n’a été créée.
- [ ] Hébergeur : raison sociale, adresse, téléphone/contact, URL et pays d’hébergement.
- [ ] Domaine définitif, conditions de disponibilité et responsabilité des informations.
- [ ] Droits des textes, photos et signe de marque ; autorisations des personnes pour les futures images réelles.

## Données personnelles — fonctionnement constaté

L’application n’a ni formulaire, ni compte, ni base de données clients, ni API de réservation, ni paiement. Elle utilise des liens sortants WhatsApp, Google Maps et Instagram. Pas d’iframe, d’outil analytique ou de pixel publicitaire. Les polices et photos sont locales. Le serveur reçoit nécessairement les requêtes techniques de navigation ; l’hébergement définitif n’est pas identifié. Le site n’accède pas aux conversations WhatsApp.

La politique décrit ces faits. Ses principes concernant les pratiques internes de l’institut (accès habilités, traitement des demandes, limitation de conservation, exercice des droits) doivent être validés et mis en œuvre par l’exploitant.

## Vérifications opérationnelles et loi 09-08

- [ ] Identifier les personnes qui consultent les messages et appareils/comptes WhatsApp utilisés ; vérifier si WhatsApp standard ou Business et quelles sauvegardes/synchronisations sont actives.
- [ ] Recenser les données effectivement reçues, les finalités et les destinataires ; confirmer le fondement légal de chaque traitement. Ne pas traiter le seul clic sur un lien comme un consentement général.
- [ ] Définir les durées ou critères précis pour demandes sans suite, rendez-vous, suivi, différends et obligations légales ; documenter suppression et sauvegardes. Aucun délai chiffré n’a été inventé.
- [ ] Vérifier auprès de l’hébergeur les IP, user agents, ressources demandées et autres journaux, leurs finalités, accès, pays, durées et sous-traitants ; publier les pratiques vérifiées via legal.host.technicalLogs et adapter la politique.
- [ ] Définir la procédure téléphonique d’accès/rectification/opposition : vérification proportionnée de l’identité, traitement dans les délais applicables, traçabilité et réponse. Le téléphone fourni est le contact actuel.
- [ ] Mettre en œuvre accès limités, sécurisation des appareils, HTTPS au déploiement et gestion des incidents ; ne pas prétendre à des mesures non vérifiées.
- [ ] Vérifier les formalités de déclaration préalable à la CNDP pour les traitements envisagés, les éventuelles exemptions et cas soumis à autorisation, notamment si des données sensibles ou identifiants particuliers sont collectés.
- [ ] Examiner les transferts internationaux liés à WhatsApp/Meta, à l’hébergement et aux sauvegardes. Déterminer les formalités, garanties et autorisations applicables avec la CNDP/conseil compétent avant exploitation.
- [ ] Fournir toute référence de récépissé/déclaration/autorisation effectivement obtenue lorsqu’elle doit figurer dans l’information ; aucune référence, autorisation ou certification n’est présumée.
- [ ] Vérifier la conformité de l’information lors de la collecte sur WhatsApp, au-delà de la seule page du site.
- [ ] Valider les projets de mentions légales et de confidentialité, puis modifier legal.status en approved et la date de mise à jour. Les pages restent noindex par défaut.
- [ ] Recontrôler le déploiement réel pour détecter tout cookie, traceur, journal ou intégration ajouté par l’hébergeur. Mettre à jour politique et consentement avant activation de services non essentiels.

## Sources officielles consultées

Consultation le 4 novembre 2026 :
- CNDP, conditions relatives au traitement : https://www.cndp.ma/conditions/
- CNDP, textes et lois (loi 09-08 et textes d’application) : https://www.cndp.ma/textes-et-lois/
- CNDP, droits d’information, d’accès, de rectification et d’opposition : https://www.cndp.ma/vos-droits-en-matiere-de-protection-des-donnees-a-caractere-personnel/
- Dépliant officiel fourni : https://www.cndp.ma/wp-content/uploads/2023/01/fiche_CNDP_fr.pdf
- Procédure de plainte : https://www.cndp.ma/deposer-une-plainte/

Les formalités applicables à l’exploitant nécessitent une vérification propre à son activité et à ses prestataires. Aucun numéro de déclaration, accord CNDP, délai d’hébergement ou identité juridique n’a été fabriqué.
