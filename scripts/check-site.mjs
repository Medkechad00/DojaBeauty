import assert from "node:assert/strict";

const origin = process.env.CHECK_URL || "http://localhost:3000";
const categoryPaths = ["coiffure", "onglerie", "epilation", "esthetique-maquillage"].map((slug) => `/prestations/${slug}`);
const routes = ["/", "/prestations", ...categoryPaths, "/institut", "/contact", "/mentions-legales", "/politique-de-confidentialite"];
const documents = new Map();
const titles = new Set();
const descriptions = new Set();
const assets = new Set();
const internalLinks = new Set();
const unescape = (value) => value.replaceAll("&amp;", "&").replaceAll("&#x27;", "'").replaceAll("&quot;", '"');

for (const route of routes) {
  const response = await fetch(new URL(route, origin));
  assert.equal(response.status, 200, route);
  const html = await response.text();
  documents.set(route, html);
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `One H1: ${route}`);
  assert.match(html, /<html[^>]+lang="fr"/, route);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${route}`);
  assert.ok(description && !descriptions.has(description), `Unique description: ${route}`);
  titles.add(title); descriptions.add(description);
  assert.doesNotMatch(html, /banque d[’']images|ces images ne représentent|Document provisoire|à compléter par le propriétaire/i, `No implementation notices: ${route}`);
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"[^>]*>/g)) {
    const href = unescape(match[1]);
    if (href.startsWith("/") || href.startsWith("#")) internalLinks.add(new URL(href, new URL(route, origin)).href);
    if (href.startsWith("https://wa.me/")) {
      const url = new URL(href);
      assert.equal(url.pathname, "/212616860194");
      const message = url.searchParams.get("text");
      assert.ok(message?.startsWith("Bonjour DOJA BEAUTY"));
      if (message.includes("Service : ")) {
        assert.match(message, /Tarif indicatif : (?:À partir de )?\d+ DH/);
        assert.match(message, /Durée estimée : /);
        assert.match(message, /Catégorie : /);
      }
    }
    if (match[0].includes('target="_blank"')) assert.match(match[0], /rel="[^"]*noopener[^\"]*noreferrer/, href);
  }
  for (const match of html.matchAll(/<img\b[^>]*\bsrc="([^"]+)"/g)) assets.add(unescape(match[1]));
}

const serviceIds = (html) => [...html.matchAll(/data-service="([^"]+)"/g)].map((match) => match[1]);
assert.deepEqual(categoryPaths.flatMap((path) => serviceIds(documents.get(path))), serviceIds(documents.get("/prestations")));
assert.equal(serviceIds(documents.get("/prestations")).length, 16);

for (const href of internalLinks) {
  const url = new URL(href);
  if (url.hash) {
    const html = documents.get(url.pathname);
    assert.ok(html?.includes(`id="${url.hash.slice(1)}"`), `Anchor exists: ${href}`);
  }
  assert.ok(documents.has(url.pathname), `Internal route exists: ${href}`);
}
for (const asset of assets) assert.equal((await fetch(new URL(asset, origin))).status, 200, asset);
assert.equal((await fetch(new URL("/images/social/doja-beauty.png", origin))).status, 200);
assert.equal((await fetch(new URL("/does-not-exist", origin))).status, 404);
assert.equal((await fetch(new URL("/prestations/does-not-exist", origin))).status, 404);
for (const path of ["/robots.txt", "/sitemap.xml"]) assert.equal((await fetch(new URL(path, origin))).status, 200, path);

const robots = await (await fetch(new URL("/robots.txt", origin))).text();
const sitemap = await (await fetch(new URL("/sitemap.xml", origin))).text();
const isPreview = documents.get("/").includes('content="noindex, follow"');
if (isPreview) {
  assert.match(robots, /Disallow: \//);
  assert.doesNotMatch(sitemap, /<loc>/);
} else {
  assert.match(robots, /Sitemap: https:\/\//);
  assert.equal((sitemap.match(/<loc>/g) || []).length, 8);
}
console.log(`PASS: ${routes.length} routes, unique metadata, 16 matching services, internal links, anchors, ${assets.size} image assets, safe WhatsApp links, 404s, robots and sitemap.`);
