# DOJA BEAUTY — Product Requirements Document

**Project:** DOJA BEAUTY website  
**Document type:** Product Requirements Document (PRD) + implementation specification  
**Version:** 1.0  
**Date:** 3 November 2026  
**Initial website language:** French  
**Primary conversion:** WhatsApp appointment enquiries  
**Status:** Ready for implementation, subject to the launch checks in this document

---

## 1. Executive Summary

DOJA BEAUTY is a premium beauty institute located in Douar Sidi Moussa, Tassoultante, on Route d'Ourika, Marrakech. The website will act as a polished digital storefront and service catalogue. Visitors should be able to understand the institute's offer, browse services and prices, see the atmosphere and work of the salon, find the location, and start an appointment conversation through WhatsApp.

The website is not an online booking engine. It will not confirm appointments, manage availability, take payments, or store customer data. A service-specific WhatsApp link will prefill a French message so the visitor can ask DOJA BEAUTY to confirm availability and, where necessary, the final price.

The commercial positioning is **accessible premium beauty**: professional beauty services and a refined experience at approachable prices, close to residents in and around South Marrakech. The brand must not be positioned as a cheap salon, nor should the website imply that it is an ultra-luxury venue if the real experience does not support that claim.

The experience must be mobile-first, minimal, simple, creative, fast, accessible, visually distinctive, and written in natural French. The site should feel human and specific to DOJA BEAUTY rather than like a generic AI-generated salon template.

## 2. Business Information

### 2.1 Confirmed information supplied for the project

| Field | Value |
|---|---|
| Business name | DOJA BEAUTY |
| Business type | Premium beauty institute / beauty salon |
| Address | Douar Sidi Moussa, Tassoultante, Route d'Ourika, Marrakesh 40000, Morocco |
| Phone | +212 6 16 86 01 94 |
| WhatsApp number (international digits) | 212616860194 |
| Google Maps link | https://maps.app.goo.gl/tFZRCMv9g93NTJjbA |
| Instagram content link supplied | https://www.instagram.com/reel/CnUffAahxXE/?igshid=YmMyMTA2M2Y= |
| Website language | French |
| Booking channel | WhatsApp |

The Instagram URL supplied is a Reel, not a confirmed profile URL. Until the actual profile URL is supplied, label the link as **Voir une réalisation sur Instagram** rather than pretending it is the salon's profile page.

### 2.2 Opening hours supplied

| Days | Opening hours |
|---|---|
| Monday–Thursday | 10:30–22:00 |
| Friday–Sunday | 10:30–23:00 |

French display format:

- Du lundi au jeudi : 10 h 30 – 22 h
- Du vendredi au dimanche : 10 h 30 – 23 h

These hours can be entered into the site configuration and displayed, but the salon owner should reconfirm them before production launch.

### 2.3 Booking expectations — not yet confirmed as official salon policy

The following were supplied as local-market guidance, not as verified DOJA BEAUTY rules:

- Advance booking is recommended, especially on weekends and for longer technical services such as keratin or colouring.
- Walk-ins may be possible for shorter services depending on staff availability.
- Some salons request 2–24 hours' notice for cancellations or rescheduling.

**Requirement:** Do not publish these as DOJA BEAUTY policies until the owner confirms the exact wording. The initial website should simply say that appointments are requested through WhatsApp and confirmed by the salon. Do not promise walk-in availability or state a cancellation deadline without approval.

## 3. Goals and Success Criteria

### 3.1 Product goals

1. Present DOJA BEAUTY as an accessible-premium beauty institute serving Sidi Moussa and nearby South Marrakech communities.
2. Make services, durations, and verified prices easy to discover.
3. Turn service interest into qualified WhatsApp appointment enquiries.
4. Help nearby residents quickly understand where the salon is and how to reach it.
5. Build a credible search presence for relevant local and service-specific searches.
6. Provide a maintainable static content structure that the owner/developer can update without a CMS.

### 3.2 Primary conversion

A visitor clicks a WhatsApp CTA, opens WhatsApp with a relevant French message prefilled, and sends the message to DOJA BEAUTY.

A WhatsApp click is **not** a confirmed appointment. The site must never claim that a booking is confirmed automatically.

### 3.3 Success metrics

Track and review the following where analytics is configured:

- WhatsApp clicks from the homepage.
- WhatsApp clicks from each service and category page.
- Click-through rate from service views to WhatsApp.
- Clicks on the directions / Google Maps link.
- Organic impressions, clicks, click-through rate, and indexed pages in Google Search Console.
- Confirmed appointments and repeat bookings, recorded by the salon outside the website if desired.

Do not define website traffic alone as success. The business outcome is qualified enquiries and confirmed appointments.

## 4. Target Audience and Positioning

### 4.1 Primary audience

People living in Sidi Moussa and nearby residential communities around Route d'Ourika / KM10 who:

- Want convenient access to beauty services without necessarily travelling to central Marrakech.
- Value professional work, a pleasant environment, clear information, and fair prices.
- May be regular local clients rather than one-time visitors.
- Use mobile search, Instagram, Google Maps, and WhatsApp to discover and contact local businesses.

### 4.2 Secondary audience

Residents from other parts of Marrakech who are willing to travel for a suitable service, price, experience, or recommendation. This audience is secondary; the site should not be built around a claim that DOJA BEAUTY serves all of Marrakech equally.

### 4.3 Positioning statement

**Premium beauty. Fair prices. Closer to home.**

French creative direction (adapt after the salon validates the tone):

> Des soins beauté réalisés avec attention, dans un cadre agréable à Sidi Moussa, sur la route de l'Ourika. Découvrez nos prestations et leurs tarifs, puis contactez-nous pour organiser votre rendez-vous.

The website should communicate quality, comfort, proximity, and transparent pricing. Avoid claims such as “the best in Marrakech”, “number one”, “medical-grade”, “100% guaranteed results”, or “luxury” unless the business can substantiate them.

## 5. Scope

### 5.1 In scope for the first release

- French-language responsive website.
- Homepage.
- Service catalogue page.
- Service category landing pages.
- About / institute page.
- Contact and location page.
- FAQ section or page, as appropriate.
- Privacy and legal-information placeholders/pages where required before launch.
- Service data managed in local TypeScript/JSON files.
- WhatsApp links with prefilled service-specific messages.
- Google Maps directions link.
- Instagram link to the supplied Reel.
- Technical and on-page SEO foundations.
- Local business structured data using only verified business details.
- Analytics event hooks, optional until a privacy-compliant analytics tool is selected and configured.
- Replaceable local image placeholders for all photography.

### 5.2 Explicitly out of scope

- Database of any kind.
- Separate Express or custom Node.js API server.
- User accounts or authentication.
- Admin dashboard or CMS.
- Online appointment calendar or live availability.
- Automatic booking confirmation.
- Online payments, deposits, or checkout.
- Customer records, CRM, loyalty database, or automated WhatsApp messaging.
- Review collection system.
- Multilingual Arabic or English versions in the first release.
- Blog or large content-marketing system in the first release.

### 5.3 Important technical clarification

Next.js runs on the Node.js runtime. The project does **not** need a second Node/Express backend. Use Next.js App Router with static-first rendering and local content. Do not create API routes, server actions, database integrations, or a separate Express application for this project.

## 6. Technical Stack and Architecture

### 6.1 Required stack

| Layer | Selection | Requirement |
|---|---|---|
| Framework | Next.js | App Router, current stable project version at implementation time |
| Runtime | Node.js | Runtime/build environment for Next.js; no separate API server |
| Language | TypeScript | Strict typing preferred |
| Styling | Tailwind CSS | Centralized design tokens and reusable utility patterns |
| Content | Local TypeScript data | No database or CMS |
| Icons | One consistent lightweight line-icon set | Avoid mixing icon styles |
| Images | Local assets in `/public` | Use Next Image where appropriate; replace placeholders manually |
| Deployment | To be selected | Must support the chosen Next.js rendering/output strategy |

Do not add a component library or animation framework by default. Build a small set of accessible components using the agreed design system. Add a dependency only where it clearly reduces complexity or improves quality.

### 6.2 Rendering strategy

- Use Next.js App Router.
- Prefer statically rendered pages for the homepage, catalogue, category pages, about page, and contact page.
- Keep all business content in local typed data files.
- Avoid unnecessary client components. Use client-side JavaScript only for genuine interactions such as mobile navigation, category filters if used, accordions, galleries/lightboxes, and analytics event dispatch.
- No server-side data fetching is needed for the initial release.
- Do not force `output: "export"` until the hosting provider is chosen. The site should remain compatible with normal Next.js Node hosting; static export can be selected later if the hosting choice supports the required features.

### 6.3 Suggested project structure

Adapt to the repository if one already exists; do not overwrite an existing convention without inspection.

```text
src/
  app/
    layout.tsx
    page.tsx
    prestations/
      page.tsx
      coiffure/page.tsx
      onglerie/page.tsx
      epilation/page.tsx
      esthetique-maquillage/page.tsx
    institut/page.tsx
    contact/page.tsx
    politique-de-confidentialite/page.tsx
    mentions-legales/page.tsx
    sitemap.ts
    robots.ts
  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNavigation.tsx
    sections/
      HeroSection.tsx
      TrustStrip.tsx
      FeaturedCategories.tsx
      PopularServices.tsx
      WhyDojaBeauty.tsx
      GallerySection.tsx
      ReviewsSection.tsx
      BookingSteps.tsx
      LocationSection.tsx
      FAQSection.tsx
    services/
      ServiceCard.tsx
      ServiceList.tsx
      CategoryNavigation.tsx
      PriceDisplay.tsx
    ui/
      Button.tsx
      Accordion.tsx
      SectionHeading.tsx
      WhatsAppLink.tsx
      ImagePlaceholder.tsx
  data/
    business.ts
    services.ts
    categories.ts
    faqs.ts
    navigation.ts
  lib/
    whatsapp.ts
    seo.ts
    analytics.ts
    formatters.ts
  styles/
    globals.css
public/
  images/
    placeholders/
    hero/
    categories/
    services/
    gallery/
  icons/
```

A smaller or larger structure is acceptable if it remains understandable and maintainable. Avoid creating a component for every trivial wrapper.

### 6.4 Configuration-driven business information

Keep editable details in one source of truth, for example `src/data/business.ts`:

- Business name.
- Address.
- Phone display string.
- WhatsApp digits.
- Google Maps URL.
- Instagram URL and link label.
- Opening hours.
- Default language and locale.
- Optional analytics measurement ID.

Do not hardcode the business phone number or address separately in multiple components.

## 7. Information Architecture and Sitemap

### 7.1 Initial sitemap

```text
/
├── /prestations/
│   ├── /prestations/coiffure/
│   ├── /prestations/onglerie/
│   ├── /prestations/epilation/
│   └── /prestations/esthetique-maquillage/
├── /institut/
├── /contact/
├── /politique-de-confidentialite/
└── /mentions-legales/
```

Use French, readable, lowercase, hyphen-separated URLs. Avoid accents in URL slugs.

### 7.2 Navigation

Desktop primary navigation:

- Accueil
- Prestations & tarifs
- L'institut
- Contact

Primary header CTA:

- Prendre rendez-vous

Mobile navigation:

- Compact menu with the same core destinations.
- Persistent but unobtrusive WhatsApp CTA (fixed bottom or fixed header placement; do not obscure content or mobile browser controls).

Footer should contain the business name, address, phone, opening hours, main navigation, Instagram link, directions link, and legal links.

## 8. Page and Section Requirements

### 8.1 Homepage `/`

**Primary purpose:** Make the value proposition and location clear, introduce key services, establish trust, and route users to the catalogue or WhatsApp.

| Order | Section | Content and behavior | Visual composition |
|---:|---|---|---|
| 1 | Header | Wordmark, navigation, WhatsApp CTA | Light, clean, compact; sticky only if it remains unobtrusive |
| 2 | Hero | Clear H1, short natural French description, CTA to services, secondary WhatsApp CTA | Editorial split layout, approximately 45% text / 55% image on desktop; stacked on mobile |
| 3 | Trust / location strip | Sidi Moussa, Route d'Ourika; professional beauty services; clear pricing message only after prices are validated | Slim horizontal strip; 3 concise items maximum |
| 4 | Featured categories | Four real service categories linking to category pages | Image-led grid; 2×2 or asymmetrical grid; avoid identical oversized cards |
| 5 | Popular services | A small selection of high-demand services with duration and verified price | Information-first list/cards; price must be easy to scan |
| 6 | Why DOJA BEAUTY | 2–3 verified reasons to choose the institute | Split image/text; use genuine salon imagery when available |
| 7 | Gallery / work | Selected salon, service, or result photography | Editorial grid or controlled masonry; lightbox optional |
| 8 | Reviews | Genuine customer reviews only | 2–3 concise review cards; hide section if no verified reviews are available |
| 9 | How to book | Choose a service → contact on WhatsApp → salon confirms availability | Three clear steps; no implication of automatic confirmation |
| 10 | Location and hours | Address, opening hours, directions link, phone | Information/map-link composition; avoid heavy map embeds by default |
| 11 | FAQ | Most useful pre-booking questions | Accessible accordion; concise answers |
| 12 | Footer | Contact, navigation, social, directions, legal links | Simple, well-spaced, high-contrast footer |

Homepage content should be concise. The homepage is an entry point, not a long brochure. Link to category pages for detailed service information.

### 8.2 Service catalogue `/prestations/`

**Primary purpose:** Let visitors compare the salon's services, durations, and confirmed prices quickly.

Required elements:

1. Page heading: `Nos prestations et tarifs`.
2. Short introduction explaining that visitors can browse services and contact the institute to confirm an appointment.
3. Clear category navigation (anchor navigation is acceptable).
4. Category groups in this order, subject to owner confirmation:
   - Coiffure
   - Onglerie
   - Épilation
   - Esthétique & maquillage
5. Within each category, list service name, short description, duration, price display, and WhatsApp CTA.
6. A clear note that appointment availability and any variable final price are confirmed by WhatsApp.
7. A final booking CTA and location/contact link.

Do not overload the catalogue with large photos for every item. Use one category image or a small visual introduction per category, then compact, readable service rows/cards.

### 8.3 Category pages

Create one page per supplied category:

- `/prestations/coiffure/`
- `/prestations/onglerie/`
- `/prestations/epilation/`
- `/prestations/esthetique-maquillage/`

Each page must include:

1. Unique H1 and short, specific introduction.
2. One replaceable category hero image.
3. The services belonging to that category, using the same service data source as the main catalogue.
4. Service descriptions, durations, and approved price display.
5. Service-specific WhatsApp CTA.
6. Useful category-specific FAQ only when accurate answers are available.
7. Breadcrumbs back to `Prestations`.
8. Internal links to related categories and contact/location.

Do not create a separate page for every individual service in the first release. Do not create doorway pages for nearby residential developments or neighbourhood names.

### 8.4 About page `/institut/`

**Purpose:** Explain who DOJA BEAUTY is and what a client can expect.

Content blocks:

- Short introduction to the institute.
- Real interior / atmosphere photography placeholder.
- Team block only when names, roles, and real photographs are supplied.
- Service philosophy and approach, based on facts provided by the salon.
- CTA to view services and contact via WhatsApp.

Do not invent the founding story, years of experience, staff qualifications, product brands, or treatment credentials.

### 8.5 Contact and location page `/contact/`

Required content:

- Full address as supplied.
- Click-to-call phone number.
- WhatsApp CTA.
- Opening hours.
- Google Maps directions link.
- Optional map embed only if implemented without an unnecessary API key, excessive load, or privacy issue.
- Instagram Reel link with accurate link text.

Use `tel:+212616860194` for the phone link and the supplied Maps URL for directions.

### 8.6 FAQ

Potential FAQ topics, subject to confirming the answers with the owner:

- Comment prendre rendez-vous ?
- Où se trouve DOJA BEAUTY ?
- Quels sont les horaires d'ouverture ?
- Les tarifs sont-ils fixes ou peuvent-ils varier selon la prestation ?
- Faut-il réserver à l'avance ?
- Peut-on venir sans rendez-vous ?

Until the salon confirms walk-in and cancellation rules, answers should direct visitors to WhatsApp rather than assert a policy.

### 8.7 Legal and privacy pages

Create the routes and a content structure, but do not invent legal entity details, registration numbers, hosting provider, or data-controller contact information. Required legal information must be completed by the business before launch. If analytics or advertising cookies are added, review the applicable consent and privacy requirements before enabling them.

## 9. Service Catalogue Data

### 9.1 Data integrity rule

The supplied prices are **estimates based on local market assumptions**, not verified DOJA BEAUTY prices. They must be treated as provisional internal data.

**Production requirement:** Do not publish these estimated figures as DOJA BEAUTY's confirmed prices. Before launch, the salon must approve each price and any service duration. Until then, show a neutral message such as `Tarif à confirmer auprès de l'institut` or hide the numeric price. Do not label estimates as official prices.

### 9.2 Provisional service dataset supplied for planning

All entries below are provisional and require owner validation.

| Category | Service | Estimated range (MAD) | Estimated duration |
|---|---|---:|---|
| Coiffure | Brushing | 50–150 DH | 30–45 min |
| Coiffure | Coupe | 100–250 DH | 30–45 min |
| Coiffure | Coloration / racines | 300–600 DH | 90–120 min |
| Coiffure | Balayage / mèches | 400–800 DH | 120–180 min |
| Coiffure | Lissage kératine / protéine | 800–1,500 DH | 120–180 min |
| Onglerie | Manucure classique | 80–150 DH | 30–45 min |
| Onglerie | Pédicure classique | 100–200 DH | 45–60 min |
| Onglerie | Vernis permanent | 150–250 DH | 45–60 min |
| Onglerie | Extensions gel | 300–450 DH | 90–120 min |
| Épilation | Visage (sourcils et lèvre supérieure) | 40–80 DH | 15–20 min |
| Épilation | Demi-jambes / jambes complètes | 70–180 DH | 20–45 min |
| Épilation | Épilation corps complet | 300–450 DH | 60–90 min |
| Esthétique & maquillage | Soin du visage classique | 250–400 DH | 60 min |
| Esthétique & maquillage | Extensions de cils | 350–600 DH | 90–120 min |
| Esthétique & maquillage | Maquillage soirée / événement | 200–400 DH | 45–60 min |

Do not add services such as Hydrafacial, massage, laser, microblading, or other treatments unless the salon confirms that they are actually offered.

### 9.3 Suggested service data model

Use a strongly typed local data model. Example:

```ts
export type PriceStatus = "unverified" | "approved";
export type PriceMode = "range" | "from" | "fixed" | "on_request";

export interface BeautyService {
  id: string;
  slug: string;
  categoryId: string;
  nameFr: string;
  descriptionFr: string;
  durationMin?: number;
  durationMax?: number;
  priceStatus: PriceStatus;
  priceMode: PriceMode;
  priceMinMad?: number;
  priceMaxMad?: number;
  priceFixedMad?: number;
  visible: boolean;
  featured?: boolean;
  image?: string;
}
```

Implementation rules:

- Store prices as numbers, not formatted strings.
- Format them consistently in the UI as `50–150 DH` or `À partir de 50 DH` only after approval.
- `priceStatus: "unverified"` must never render numeric values in the public website.
- `visible: false` hides a service from the public catalogue.
- If a service price varies by hair length, material, complexity, or consultation, use `on_request` or a clear owner-approved explanatory note rather than implying a fixed price.
- The main catalogue and category pages must use the same source data to prevent inconsistent prices.

## 10. WhatsApp Booking Flow

### 10.1 Core behavior

Every service-level booking CTA must open WhatsApp with a prefilled message that identifies the service. It must not create or claim a confirmed appointment.

WhatsApp number in URL format:

```text
https://wa.me/212616860194
```

Create one reusable helper, for example:

```ts
export function buildWhatsAppUrl(message: string) {
  const phone = "212616860194";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
```

Read the phone value from the business configuration rather than hardcoding it in the helper.

### 10.2 Service-level French message

Default message when the price is not yet validated:

```text
Bonjour DOJA BEAUTY, je souhaiterais prendre rendez-vous pour la prestation « {serviceName} ». Pourriez-vous m'indiquer vos disponibilités et confirmer le tarif ? Merci.
```

When a verified price is displayed, the message may include it:

```text
Bonjour DOJA BEAUTY, je souhaiterais prendre rendez-vous pour « {serviceName} » (tarif affiché : {price}). Quelles sont vos disponibilités ? Merci.
```

Do not include an unverified price in the WhatsApp message.

### 10.3 General WhatsApp message

```text
Bonjour DOJA BEAUTY, je souhaiterais avoir des renseignements sur vos prestations et prendre rendez-vous. Pourriez-vous m'aider, s'il vous plaît ?
```

### 10.4 Interaction requirements

- Use descriptive CTA labels such as `Réserver sur WhatsApp` or `Demander un rendez-vous`.
- A service button must pass the correct service name and validated price status.
- Open WhatsApp in a new tab/window where appropriate, using safe external-link attributes.
- Ensure the CTA remains usable on mobile and desktop.
- Add an accessible label that identifies the selected service, e.g. `Contacter DOJA BEAUTY sur WhatsApp pour Brushing`.
- Do not collect the visitor's phone number, name, date, or other personal data on the website.
- Do not show a fake success state after clicking. The user is simply being redirected to WhatsApp.

## 11. Visual Identity and Design System

### 11.1 Creative direction

**Direction:** Warm Contemporary Minimalism  
**Keywords:** Editorial, refined, natural, calm, modern, approachable, human, feminine without being overly feminine.

The site should feel like a considered beauty/wellness brand, not a generic pink salon template. Use natural warmth and editorial composition, while keeping service information and pricing highly practical.

### 11.2 Color palette

| Token | Hex | Usage |
|---|---|---|
| Warm Ivory | `#F6F3ED` | Main page background |
| Soft Charcoal | `#25251F` | Main text, dark sections |
| Muted Olive | `#59624D` | Primary brand accent, CTA backgrounds |
| Soft Sage | `#E5E8DF` | Secondary surfaces, subtle panels |
| Muted Terracotta | `#B47B62` | Small decorative accents only |
| Pure White | `#FFFFFF` | Cards and contrast areas |

Suggested initial distribution: 60% ivory/white, 25% sage/neutral surfaces, 10% olive, 5% terracotta. This is a visual guideline, not a rigid pixel calculation.

Contrast requirements:

- Use Soft Charcoal for body text on Warm Ivory, White, and Soft Sage.
- White text may be used on Muted Olive after checking the final rendered contrast.
- Do not use small white text on Muted Terracotta.
- Do not use Terracotta as small body text on Warm Ivory.
- Validate all text, controls, and focus states against WCAG 2.2 AA contrast targets.

### 11.3 Typography

| Role | Font | Usage |
|---|---|---|
| Display / headings | Cormorant Garamond | H1, H2, selected editorial highlights |
| Body / interface | DM Sans | Paragraphs, navigation, prices, labels, buttons, forms |

Load fonts efficiently (prefer local/self-hosted or a supported optimized font-loading approach). Provide sensible system fallbacks. Do not introduce a third font without a clear reason.

### 11.4 Type scale

| Element | Desktop | Mobile |
|---|---:|---:|
| H1 | 56–64 px | 36–42 px |
| H2 | 38–44 px | 29–34 px |
| H3 | 24–28 px | 22–25 px |
| Body | 16–18 px | 16 px |
| Secondary | 14–15 px | 14 px |
| Small labels | 12–13 px | 12–13 px |

Use comfortable line height: approximately 1.1–1.2 for display headings and 1.55–1.7 for body text. Avoid long line lengths; aim for readable paragraph widths.

### 11.5 Layout and spacing

- Max content width: approximately 1,200 px.
- Desktop layout: 12-column grid where useful.
- Mobile side padding: approximately 20 px.
- Desktop section spacing: approximately 90–120 px.
- Mobile section spacing: approximately 60–72 px.
- Buttons: minimum 48 px height, generous horizontal padding.
- Cards: restrained 8–14 px radius; avoid rounding every element excessively.
- Borders: thin, low-contrast neutral borders where needed.
- Shadows: none or very subtle.
- Maintain consistent spacing tokens rather than arbitrary one-off values.

### 11.6 Visual balance by section

These are design proportions, not exact implementation constraints:

- Hero: approximately 45% text / 55% image on desktop.
- Featured service categories: image-led; roughly 60–70% of the visual attention should be imagery.
- Service catalogue: information-led; price, duration, and service name must dominate over imagery.
- About / why-us: approximately 50–60% visual and 40–50% text.
- Gallery: primarily imagery.
- Reviews: primarily readable text.
- Location: balanced information and directions visual.

### 11.7 UI behavior and interaction

- Use one coherent line-icon style.
- Use clear visible hover, focus, active, and disabled states.
- Keyboard navigation must work for menus, accordions, and galleries.
- Avoid decorative gradients, glassmorphism, brutalist styling, excessive pill shapes, and generic component-library aesthetics.
- No carousel in the hero.
- Motion should be restrained: subtle hover transitions, short fades where useful, simple accordion transitions, and a calm mobile menu. Respect `prefers-reduced-motion`.
- Avoid scroll-jacking, heavy parallax, endless reveal animations, and motion that delays access to content.

## 12. Image and Asset Strategy

### 12.1 Placeholder requirement

All photography should remain replaceable placeholders during initial implementation. The developer will manually replace images after the layout and site are complete.

Do not:

- Scrape other salons' photos.
- Use another business's work as if it were DOJA BEAUTY's work.
- Generate fake before/after results or fake customer photos.
- Embed remote image URLs as permanent production assets.

### 12.2 Suggested image asset map

```text
public/images/
  placeholders/
    doja-placeholder-portrait.webp
    doja-placeholder-landscape.webp
  hero/
    doja-hero.webp
  categories/
    coiffure.webp
    onglerie.webp
    epilation.webp
    esthetique-maquillage.webp
  institute/
    interior-main.webp
    team.webp
  gallery/
    gallery-01.webp
    gallery-02.webp
    gallery-03.webp
    gallery-04.webp
```

During build, use local neutral branded placeholders with the correct aspect ratios and descriptive alt text. Create a short asset replacement guide noting recommended dimensions/aspect ratios and which page uses each asset.

### 12.3 Image requirements

- Prefer AVIF or WebP for photographic assets where supported.
- Set explicit width/height or aspect ratio to prevent layout shift.
- Use responsive image sizes and lazy-load below-the-fold imagery.
- Prioritize the hero image; do not lazy-load the primary LCP image.
- Alt text should describe meaningful content, not stuff keywords. Decorative images should use empty alt text.
- Avoid putting important text inside images.

## 13. French Content and Copywriting Rules

All visible website content must be in French for the first release. Use natural, idiomatic French written for real clients in Marrakech.

### 13.1 Tone of voice

- Warm, welcoming, professional, calm, and direct.
- Clear and specific rather than grandiose.
- Human and conversational without being overly casual.
- Write for the reader, not for a search engine.
- Use consistent terminology for services and prices.

### 13.2 Avoid generic AI-sounding copy

Avoid formulaic phrases such as:

- `Plongez dans un univers de beauté...`
- `Révélez votre beauté intérieure...`
- `Une expérience unique et inoubliable...`
- `L'excellence au service de votre beauté...`

Avoid repeated adjectives such as `exceptionnel`, `unique`, `luxueux`, and `incontournable` unless they are genuinely justified.

### 13.3 Copy examples — starting points, not approved final claims

Hero heading:

> Prenez du temps pour vous.

Hero paragraph:

> Découvrez les prestations de DOJA BEAUTY à Sidi Moussa, sur la route de l'Ourika. Consultez les soins proposés et leurs tarifs, puis contactez-nous pour organiser votre rendez-vous.

Catalogue introduction:

> Retrouvez nos prestations de coiffure, d'onglerie, d'épilation et de beauté. Chaque fiche présente les informations utiles pour choisir le soin qui vous convient.

Booking CTA:

> Une question ou envie de prendre rendez-vous ? Écrivez-nous sur WhatsApp. Nous vous répondrons pour vérifier les disponibilités.

Location heading:

> Retrouvez DOJA BEAUTY à Sidi Moussa.

All copy must be checked against the real services and experience before launch. Do not claim specific products, techniques, certifications, or treatment outcomes without evidence from the business.

## 14. SEO Requirements

SEO must support the real geographic catchment around Sidi Moussa / Route d'Ourika while remaining honest about the salon's location. Do not create doorway pages for nearby residences or pretend the salon is located in Guéliz, the Medina, or another neighbourhood.

### 14.1 Keyword direction

Initial keyword hypotheses to validate in keyword research and Search Console after launch:

- Institut de beauté Sidi Moussa
- Institut de beauté Route de l'Ourika
- Salon de beauté Route de l'Ourika
- Institut esthétique Marrakech Sud
- Soins du visage Marrakech
- Coiffure Route de l'Ourika
- Onglerie Marrakech Sud
- Épilation Marrakech

Use service-specific terms on the corresponding category pages. Do not force every keyword onto the homepage. Search volume and actual query demand are not confirmed by this PRD.

### 14.2 Page metadata starting points

Homepage title:

`DOJA BEAUTY | Institut de beauté à Sidi Moussa, Marrakech`

Homepage meta description:

`Découvrez DOJA BEAUTY à Sidi Moussa, sur la route de l'Ourika à Marrakech. Consultez nos prestations de beauté et contactez-nous sur WhatsApp pour votre rendez-vous.`

Category pages must have unique title tags, descriptions, H1s, and useful body content. Do not duplicate the same metadata across pages.

### 14.3 Technical SEO checklist

- Unique `<title>` and meta description per indexable page.
- One clear primary H1 per page.
- Logical H2/H3 hierarchy.
- Descriptive, stable URLs.
- Canonical URLs.
- XML sitemap.
- `robots.txt` with sitemap reference.
- Open Graph metadata and social sharing image.
- Breadcrumb navigation on category pages.
- Internal links between homepage, catalogue, category pages, and contact page.
- Descriptive image filenames and appropriate alt text.
- Avoid indexing duplicate, thin, or placeholder-only pages.
- Ensure all intended pages return correct status codes and can be crawled.
- Configure Google Search Console after domain setup.

### 14.4 Local structured data

Use Schema.org `BeautySalon` / appropriate `LocalBusiness` structured data with only verified fields:

- Name: DOJA BEAUTY.
- Address: the supplied address.
- Telephone: +212616860194.
- URL: final canonical website URL once the domain is known.
- Opening hours: the supplied hours, after reconfirmation.
- Geo coordinates: add only after verifying the exact Maps pin / coordinates.
- SameAs: add the actual Instagram profile only when its profile URL is known; do not use a Reel URL as the business profile identity.

Do not invent ratings, review counts, price range, service claims, coordinates, or social-profile URLs. Structured data does not guarantee rich results.

### 14.5 Local SEO operations outside the website

The PRD should make these launch tasks visible, even though they are not code features:

- Claim or verify the official Google Business Profile.
- Ensure the business name matches real-world signage and official use.
- Use the exact address and map pin.
- Select the most accurate primary category and relevant secondary categories.
- Add accurate opening hours, services, phone, and website.
- Add genuine current salon photographs after placeholders are replaced.
- Ask real customers for honest reviews without incentives or review gating.
- Respond professionally to reviews.

The site must not promise a specific Google Maps ranking. Local visibility is influenced by relevance, distance, and prominence, and the website cannot override physical distance.

## 15. Analytics and Measurement

Analytics is optional for initial deployment and must not be enabled with non-essential tracking before the relevant privacy requirements are reviewed.

If Google Analytics 4 or another analytics tool is approved and configured, track at least:

- `whatsapp_click` — any WhatsApp CTA click.
- `service_whatsapp_click` — a WhatsApp click from a specific service.
- `directions_click` — click on the Google Maps link.
- `instagram_click` — click on the Instagram Reel link.

Useful event parameters:

- `service_id`
- `service_name`
- `category_id`
- `page_path`
- `cta_location`

Do not send personal data, message contents, phone numbers entered by users, or sensitive information to analytics. A click event is an outbound intent signal, not proof that the user sent a message or completed an appointment.

## 16. Accessibility Requirements

Target WCAG 2.2 AA as a design and implementation goal.

- Semantic HTML landmarks and headings.
- Keyboard-operable navigation, links, accordions, and galleries.
- Visible focus states.
- Sufficient text and control contrast.
- Do not rely on color alone to communicate state.
- Proper labels for icon-only controls.
- Useful alt text for meaningful images.
- Empty alt for decorative images.
- Respect reduced-motion preferences.
- Touch targets should generally be at least 44×44 CSS pixels; primary CTA targets should be comfortably larger.
- Avoid tiny text and overlong paragraphs.
- Use French language metadata (`lang="fr"`).

## 17. Performance Requirements

Performance is a product requirement, especially because the expected audience will often arrive from mobile devices.

- Mobile-first implementation.
- Optimize local images and serve appropriately sized variants.
- Avoid unnecessary client-side JavaScript.
- Avoid large animation libraries unless proven necessary.
- Lazy-load below-the-fold images and defer non-critical embeds.
- Prevent layout shifts with image dimensions/aspect ratios.
- Use efficient font loading and avoid excessive font weights.
- Keep third-party scripts to a minimum.
- Do not autoplay video or audio.

Target Core Web Vitals in the good range in real-world measurement where traffic allows: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. These are targets, not a guarantee independent of hosting, device, network, and content.

## 18. Responsive Behavior

### Mobile (primary design target)

- Single-column content flow.
- Clear, compact navigation.
- Hero stacks text and image with the main CTA visible early.
- Service lists prioritize name, price, and duration.
- Avoid horizontal overflow.
- Mobile sticky WhatsApp CTA must not cover service details, footer links, or browser UI.
- Images use mobile-appropriate crops.

### Tablet

- Two-column layouts where they improve scanning.
- Maintain readable content width and comfortable spacing.

### Desktop

- Use the 12-column grid and editorial split layouts.
- Keep catalogue content readable rather than stretching service descriptions across the full viewport.
- Do not add empty decorative whitespace that pushes key information too far down.

## 19. Security, Privacy, and External Links

- No user-submitted form data is stored by the site.
- Use HTTPS in production.
- Use safe attributes for external links opened in a new tab.
- Do not expose private keys or API secrets in client code.
- Do not include unnecessary third-party trackers.
- Do not load a Google Maps iframe by default; a directions link is sufficient for the first release.
- Complete legal and privacy content with real business details before launch.

## 20. Codex Workspace Skills and Working Method

The following skills are the selected core design tools based on the skill names and descriptions supplied for this project:

### Core skills to place in the workspace

1. `brandkit` — brand direction, palette, typography, and visual consistency.
2. `minimalist-skill` — restraint, whitespace, clarity, and minimalist visual language.
3. `ui-ux-pro-max` — interface structure, usability, responsive UX, and accessibility patterns.
4. `design-system` — tokens, component standards, spacing, and reusable UI rules.
5. `emil-design-eng` — design-to-code polish and implementation quality.

### Optional skills to invoke only when needed

- `find-animation-opportunities` — identify a few purposeful motion opportunities after the static design is established.
- `animate` — implement restrained micro-interactions.
- `review-animations` — check motion quality and reduced-motion support.
- `prototype` — test a specific interaction before implementation.
- `image-to-code-skill` — only if a concrete approved visual reference needs to be recreated.

Do not activate every available skill at once. Avoid conflicting taste/design systems. The selected skills are based on their supplied names; Codex should inspect each skill's actual instructions before using it.

### Codex execution rules

1. Inspect the existing repository before changing files.
2. Read the selected skill instructions and this PRD before implementation.
3. Build the design system and shared layout before creating all pages.
4. Use the PRD as the source of truth. Do not invent services, prices, reviews, credentials, policies, or brand claims.
5. Keep unverified prices hidden or display `Tarif à confirmer auprès de l'institut`.
6. Keep all business details and service content in centralized local data files.
7. Reuse components, but do not force every section into the same card layout.
8. Do not add a database, CMS, Express server, auth, or custom API.
9. Keep the website French-only for the first release.
10. Use local image placeholders and provide a replacement map.
11. Implement responsive behavior and accessibility from the start, not as a final patch.
12. Run lint, type-check, and production build; fix all errors before completion.
13. Report any missing business information as a launch blocker rather than inventing it.

## 21. Quality Assurance and Acceptance Criteria

The first release is accepted only when all applicable criteria pass.

### Functional

- [ ] All navigation links work.
- [ ] All four category pages load and display the correct services.
- [ ] Main catalogue and category pages use the same service data source.
- [ ] Each visible service CTA opens WhatsApp with the correct service name.
- [ ] No WhatsApp message contains an unverified numeric price.
- [ ] The phone link uses the correct international number.
- [ ] The directions link opens the supplied Google Maps destination.
- [ ] Opening hours match the supplied schedule after owner reconfirmation.
- [ ] No feature suggests that an appointment is automatically confirmed.
- [ ] Mobile navigation and all accordions are keyboard accessible.

### Content and brand

- [ ] All public interface copy is in natural French.
- [ ] No placeholder copy, fake reviews, fake results, or invented credentials appear as real content.
- [ ] All provisional prices are hidden or clearly replaced with an owner-approved display.
- [ ] All booking/cancellation/walk-in policies are owner-approved before publication.
- [ ] The DOJA BEAUTY wordmark is consistent and replaceable by an official logo.
- [ ] All photography is clearly marked as placeholder until replaced.

### SEO

- [ ] Every indexable page has unique metadata.
- [ ] Each page has a clear H1 and logical heading structure.
- [ ] Canonicals are correct.
- [ ] Sitemap and robots file are generated correctly.
- [ ] Structured data contains only accurate details.
- [ ] No fake neighbourhood landing pages or keyword stuffing exist.
- [ ] All important pages are internally linked and crawlable.

### Technical and performance

- [ ] TypeScript type-check passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] No broken images or links.
- [ ] No horizontal overflow at common mobile widths.
- [ ] Images reserve layout space and are optimized.
- [ ] Reduced-motion preference is respected.
- [ ] No unnecessary backend, database, or API service is introduced.

## 22. Launch Checklist and Open Items

These are not reasons to delay implementation. They are items to resolve before public launch.

### Must be confirmed by DOJA BEAUTY

- [ ] Final service list: verify every listed service is genuinely offered.
- [ ] Final prices: approve each price or price range.
- [ ] Service durations: approve or correct each estimate.
- [ ] Opening hours: reconfirm the supplied schedule.
- [ ] Walk-in availability: confirm whether walk-ins are accepted and for which services.
- [ ] Cancellation/rescheduling policy: confirm exact policy or omit it.
- [ ] Final business description and any claims about products, qualifications, or techniques.
- [ ] Actual Instagram profile URL (the supplied link is a Reel).
- [ ] Genuine customer reviews and approval to publish them, if available.
- [ ] Official logo, if one exists.
- [ ] Replace all image placeholders with authorized DOJA BEAUTY photographs.
- [ ] Confirm final map pin and exact location.
- [ ] Supply legal business information required for the legal-notice page.

### Technical launch decisions

- [ ] Domain name.
- [ ] Hosting provider and Next.js deployment mode.
- [ ] Analytics provider and consent approach, if analytics is required.
- [ ] Final canonical website URL for SEO and structured data.
- [ ] Google Search Console verification.
- [ ] Google Business Profile website link updated after launch.

## 23. Recommended Implementation Phases

### Phase 1 — Foundation

- Inspect repository and skill instructions.
- Establish Next.js App Router, TypeScript, Tailwind CSS, and global styles.
- Implement fonts, colors, spacing, buttons, typography, and shared layout.
- Add centralized business and service data.

### Phase 2 — Core experience

- Build header, footer, homepage sections, and WhatsApp helper.
- Build catalogue and service cards.
- Build the four category pages.
- Build about and contact/location pages.

### Phase 3 — SEO and polish

- Implement metadata, canonicals, sitemap, robots, structured data, and breadcrumbs.
- Implement image placeholders, responsive behavior, accessibility, and reduced motion.
- Add optional analytics event hooks without enabling trackers prematurely.

### Phase 4 — QA and launch readiness

- Validate WhatsApp messages and phone number.
- Validate all content and price visibility.
- Test mobile, tablet, and desktop layouts.
- Run lint, type-check, and production build.
- Replace placeholders and complete business launch checklist.

---

## 24. Final Product Principle

DOJA BEAUTY's website should make three things effortless:

1. **Discover:** Understand what the institute offers and where it is located.
2. **Decide:** Compare services, durations, and verified prices without confusion.
3. **Contact:** Start a clear WhatsApp conversation about the selected service.

Every design and technical decision should support these outcomes. The website should feel distinctive and refined, but clarity, trust, speed, and ease of booking take priority over decoration.
