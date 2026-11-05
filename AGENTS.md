# DOJA BEAUTY — Codex Agent Instructions

These instructions govern all implementation work in this repository. The goal is to deliver a polished, production-ready website efficiently, without unnecessary exploration, dependencies, rewrites, or token usage.

## 1. Source of truth

Read `DOJA_BEAUTY_PRD.md` before implementation. It is the primary product and design specification.

Apply this priority when instructions conflict:
1. The user's latest explicit instruction.
2. `DOJA_BEAUTY_PRD.md` for approved project requirements.
3. Existing repository conventions, provided they do not conflict with either of the above.
4. Your own implementation judgement for details not specified.

Do not invent business facts. Treat unknown information as unknown and use a safe placeholder or omit it. Do not silently turn an assumption into public-facing copy.

## 2. Operating principles: be effective and token-efficient

- Inspect the repository once before making changes: check the file tree, `package.json`, lockfile, current scripts, and `git status` if Git is available.
- Preserve existing user work. Never delete, overwrite, or reformat unrelated files just to impose personal preferences.
- Read the PRD and the relevant skill instructions once. Do not repeatedly reread or restate large documents unless a specific ambiguity requires it.
- Make a short internal task checklist, then start implementation. Do not spend large amounts of time producing plans, alternatives, or progress essays.
- Work in coherent phases and complete each phase before moving on. Prefer implementing a complete working slice over creating many unfinished files.
- Make reasonable decisions independently when the PRD is clear. Ask the user only when a missing decision genuinely blocks safe implementation; otherwise use the PRD's fallback or a clearly marked placeholder.
- Avoid speculative research and web browsing. The project requirements and business details are supplied in the PRD. Browse only when the user explicitly asks or a current external fact is genuinely necessary.
- Do not generate lengthy explanations in the terminal or final report. Report only important decisions, files changed, checks run, and actual blockers.
- Do not create duplicate documentation, duplicate components, multiple design systems, or unnecessary abstractions.
- Do not claim a command, test, build, or audit passed unless you actually ran it and inspected its result.

## 3. Scope guardrails

Build the website described in the PRD and nothing beyond it unless the user requests it.

**Required:** Next.js App Router, TypeScript, Tailwind CSS, French-only content, static-first pages, local typed content, replaceable local image placeholders, responsive UI, technical/on-page SEO, and WhatsApp enquiry links.

**Do not add:**
- Database, ORM, CMS, admin dashboard, authentication, customer accounts, CRM, or customer data storage.
- Separate Express/API server, custom backend, API routes, server actions, or booking API.
- Online calendar, live availability, automatic appointment confirmation, payments, checkout, or automated WhatsApp messaging.
- Arabic/English versions, blog, or individual service detail pages unless requested.
- Component libraries, animation libraries, analytics providers, or other dependencies without a clear need.

Next.js uses the Node.js runtime. Do not create a separate Node.js backend. Keep the site static-first and use server components by default. Add client components only for real interactions.

Do not force static export until the hosting provider and deployment requirements are known. Keep the project compatible with standard Next.js deployment.

## 4. Business truth and content safety

Use the confirmed business information from the PRD and centralize it in one configuration/data source:
- Name: DOJA BEAUTY
- Address: Douar Sidi Moussa, Tassoultante, Route d'Ourika, Marrakesh 40000, Morocco
- Phone: `+212 6 16 86 01 94`
- WhatsApp URL digits: `212616860194`
- Google Maps: `https://maps.app.goo.gl/tFZRCMv9g93NTJjbA`
- Supplied Instagram link is a Reel, not a verified profile URL. Label it accurately, e.g. `Voir une réalisation sur Instagram`.
- Initial site language: French (`lang="fr"`).

The supplied service prices and durations are estimates, not approved DOJA BEAUTY prices. **Never publish an unverified numeric price.** Until approved, show `Tarif à confirmer auprès de l'institut` or hide the price. Never include an unverified price in a WhatsApp message.

Do not invent or imply:
- Customer reviews, ratings, review counts, before/after results, client identities, or testimonials.
- Staff names, qualifications, years of experience, certificates, product brands, equipment, or treatment credentials.
- Services not listed and confirmed by the salon.
- Walk-in availability, cancellation deadlines, guarantees, medical outcomes, or appointment availability.
- Legal entity details, registration numbers, exact geo-coordinates, or the salon's Instagram profile URL.

Opening hours were supplied but must be reconfirmed before launch. It is acceptable to implement them as editable configuration, but flag them for owner validation. Do not publish unconfirmed walk-in or cancellation policies.

Reviews sections should be hidden when there are no genuine approved reviews. Team blocks should be hidden until real names/roles/photos are supplied. Use a neutral, factual brand introduction rather than inventing a founding story.

## 5. Design direction — do not drift

Follow the PRD's approved direction: **Warm Contemporary Minimalism** — editorial, refined, natural, calm, modern, approachable, and distinctive. It must feel premium but accessible, not cheap and not artificially ultra-luxury.

### Design tokens

- Warm Ivory: `#F6F3ED` — primary background
- Soft Charcoal: `#25251F` — primary text
- Muted Olive: `#59624D` — primary accent and CTA
- Soft Sage: `#E5E8DF` — secondary surfaces
- Muted Terracotta: `#B47B62` — small decorative accents only
- White: `#FFFFFF` — cards and contrast areas
- Display font: Cormorant Garamond
- Interface/body font: DM Sans

Use charcoal for readable text on light backgrounds. Check actual contrast for all text and controls; avoid small terracotta text on ivory and small white text on terracotta. Keep typography hierarchy, spacing, image crops, focus states, and mobile behavior consistent.

Design requirements:
- Mobile-first, with the mobile layout deliberately composed rather than merely stacked.
- Strong whitespace, clear hierarchy, restrained borders, subtle or no shadows, restrained 8–14px card radii.
- Use varied layouts where appropriate; do not turn every section into the same three-card grid.
- Prioritize service names, verified prices, duration, and booking actions over decorative imagery in the catalogue.
- Use large intentional imagery in editorial sections, but only local replaceable placeholders until real photos are supplied.
- No generic pink/gold salon template, excessive rounded pills, gradients for decoration, glassmorphism, brutalism, or gratuitous visual effects.
- Keep animations restrained and purposeful. Respect `prefers-reduced-motion`. Do not add an animation library by default.
- No hero carousel, autoplay video, scroll-jacking, heavy parallax, or animation that delays access to content.

Use the exact design tokens in one shared location (CSS variables/Tailwind theme) rather than scattering arbitrary values throughout components.

## 6. Skills policy

Use only the selected core skills supplied for this project, if their files are actually available in the workspace:

1. `brandkit` — establish and check brand identity.
2. `minimalist-skill` — reinforce restraint and whitespace.
3. `ui-ux-pro-max` — validate information architecture, responsive UX, and accessibility patterns.
4. `design-system` — turn the direction into reusable tokens and component rules.
5. `emil-design-eng` — review implementation detail and visual polish.

Use the smallest relevant subset for each task. Do not invoke all five repeatedly or ask multiple skills to redesign the same decision. Establish one coherent direction, record it in the design tokens, then implement against it.

Optional skills are only for a specific need after the static UI works:
- `find-animation-opportunities` to identify a few justified motion details.
- `animate` to implement those details.
- `review-animations` to verify them and reduced-motion behavior.
- `prototype` for a genuinely complex interaction.
- `image-to-code-skill` only when the user supplies a specific visual reference to recreate.

Do not use `taste-skill`, `gpt-tasteskill`, `taste-skill-v1`, `brutalist-skill`, `soft-skill`, `animate-expo`, or mobile-app skills for this project. Do not use every available skill just because it exists.

If a selected skill is unavailable, continue using the PRD; do not waste time searching for similarly named skills or pretend the skill was used. Read a skill's instructions once when needed and follow its actual contents rather than assuming from its name.

## 7. Implementation workflow

### Phase 0 — repository reconnaissance

1. Inspect the existing app, dependencies, scripts, lockfile, and Git status.
2. Identify whether Next.js, TypeScript, and Tailwind are already configured.
3. Preserve compatible existing setup. Do not recreate the project or replace configuration wholesale unless it is broken and the change is necessary.
4. Confirm that `DOJA_BEAUTY_PRD.md` is available. If it is not present, look for the provided PRD file before asking the user to supply it.

### Phase 1 — foundation

1. Set up or align App Router, TypeScript, and Tailwind with the current repository conventions.
2. Establish fonts, CSS variables/design tokens, typography, spacing, and responsive container rules.
3. Create the global layout, header, footer, navigation, buttons, and a small set of reusable primitives.
4. Create typed, centralized business, category, service, and FAQ data.
5. Create the WhatsApp URL helper and shared service CTA.

### Phase 2 — pages and content

Implement the pages and routes defined in the PRD:
- Homepage.
- Main services catalogue.
- Coiffure, onglerie, épilation, and esthétique & maquillage category pages.
- About/institute page.
- Contact/location page.
- Legal/privacy page structures where appropriate, with unverified legal details clearly left as placeholders.

Build shared sections and category templates where reuse is real. Do not create abstractions that make simple content harder to maintain. Keep all visible copy in natural French and follow the PRD's tone rules.

### Phase 3 — SEO and interactions

Implement unique metadata, canonical URLs, sitemap, robots, Open Graph, breadcrumbs, internal links, and appropriate structured data using verified details only. Implement WhatsApp links, directions, telephone link, mobile navigation, accordions, and any other required lightweight interactions.

Do not add a Maps iframe by default; the supplied directions link is sufficient. Do not enable analytics or non-essential tracking until the provider and privacy/consent approach are approved.

### Phase 4 — responsive QA and polish

Test common mobile, tablet, and desktop widths. Check content hierarchy, image crops, contrast, keyboard access, focus states, reduced motion, sticky CTA overlap, horizontal overflow, and all external links. Run the available lint, type-check, and production build scripts. Fix introduced errors before reporting completion.

Do not spend time tuning animations before layout, typography, content, and responsive behavior are correct.

## 8. Code quality rules

- Use TypeScript types for service and business data; avoid `any` unless there is a documented reason.
- Keep business details and service content in centralized files. Never duplicate phone numbers, hours, prices, or address strings across components.
- Store prices as numeric data with an explicit verification status and display mode. Format values in one shared formatter.
- The UI must not render a numeric price unless its status is approved.
- Generate WhatsApp messages through one reusable helper using `encodeURIComponent`.
- Use descriptive component names and semantic HTML. Avoid unnecessary wrapper components and giant monolithic page components.
- Prefer CSS/Tailwind and native browser behavior over dependencies.
- Use `next/image` for local image assets where suitable; reserve image dimensions/aspect ratio to prevent layout shift.
- Keep imagery local and replaceable. Do not hotlink or scrape other salons' photography. Use neutral placeholders with meaningful filenames and document the replacement path/aspect ratio.
- Keep client-side JavaScript minimal. Avoid marking whole pages as client components.
- Add comments only where they explain non-obvious decisions; do not narrate obvious code.
- Avoid premature abstractions, duplicated style variants, speculative feature flags, and unused packages.

## 9. SEO, accessibility, and performance guardrails

### SEO
- Target the actual location: Sidi Moussa / Route d'Ourika / South Marrakech.
- Do not pretend the salon is in Guéliz, Medina, or another district.
- Do not generate doorway pages for nearby residences, gated communities, or neighbourhood names.
- Do not stuff location keywords into every heading or alt attribute.
- Give every indexable page a unique title, description, H1, and useful content.
- Use `BeautySalon` or an appropriate `LocalBusiness` type with verified fields only. Do not invent coordinates, ratings, price range, profile URLs, or review data.
- Use the actual Instagram profile URL only when it is provided; the supplied Reel must be labelled as a Reel/work example.

### Accessibility
- Target WCAG 2.2 AA.
- Use semantic landmarks and a logical heading hierarchy.
- Ensure keyboard access and visible focus for all controls.
- Label icon-only controls; provide meaningful alt text and empty alt for decorative images.
- Support reduced motion and do not communicate state through color alone.
- Aim for touch targets of at least 44×44 CSS pixels.

### Performance
- Prioritize mobile performance and Core Web Vitals.
- Optimize and correctly size images; lazy-load below-the-fold imagery, not the primary hero/LCP image.
- Avoid unnecessary JavaScript, font weights, third-party scripts, embeds, and dependencies.
- Prevent layout shift by reserving image space.
- Do not autoplay media.

## 10. Verification before completion

Run checks using the package manager and scripts already present in the repository. Do not assume npm if the project uses pnpm, yarn, or bun. At minimum, run the available equivalents of:
- Lint.
- Type check (if configured).
- Production build.

Also verify manually or with lightweight tests:
- All required routes load and navigation works.
- Catalogue and category pages use the same service source.
- Service WhatsApp links contain the right service name and no unverified price.
- WhatsApp number, phone link, Maps URL, and opening hours are sourced from central configuration.
- No reviews, results, credentials, policies, or unsupported services have been fabricated.
- Placeholder images do not break layout and are easy to replace.
- No mobile horizontal overflow or fixed CTA obstruction.
- Metadata, canonical URLs, sitemap, and robots are correct for the configured domain/environment.

If a check cannot run because a dependency, environment variable, deployment URL, or external account is unavailable, state the exact reason. Do not conceal failures or claim unrun checks passed.

## 11. Completion response format

When implementation work is finished, keep the response concise and factual. Include only:
1. What was implemented.
2. The main files/areas changed.
3. Verification commands actually run and their results.
4. Remaining launch blockers requiring owner input (for example, approved prices, real photos, final logo, legal details, hosting/domain, or verified Instagram profile).

Do not paste large code blocks or repeat the PRD. Do not call the work complete if critical build/type/lint errors remain; explain the remaining blocker and fix what can be fixed first.

## 12. Final decision rule

When choosing between visual decoration and clear information, choose clarity. When choosing between adding a dependency and a small native implementation, choose the native implementation. When business information is uncertain, preserve the uncertainty instead of inventing an answer. Every implementation decision should help visitors **discover** the services, **decide** with clear information, or **contact** DOJA BEAUTY.
