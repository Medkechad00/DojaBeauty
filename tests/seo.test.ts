import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

function seoSnapshot(origin: string, enabled: string, deploymentEnvironment = "") {
  const source = `const seo = await import('./src/lib/seo.ts'); console.log(JSON.stringify({ indexable: seo.isIndexable, paths: seo.publicPaths, metadata: seo.pageMetadata('Titre', 'Description', '/contact'), legal: seo.pageMetadata('Mentions', 'Description', '/mentions-legales', false), schema: seo.businessSchema() }));`;
  const result = execFileSync(process.execPath, ["--experimental-strip-types", "--input-type=module", "-e", source], { encoding: "utf8", env: { ...process.env, SITE_URL: origin, SITE_INDEXABLE: enabled, VERCEL_ENV: deploymentEnvironment } });
  return JSON.parse(result);
}

test("unconfigured preview has no invented canonical origin and cannot be indexed", () => {
  const preview = seoSnapshot("", "true");
  assert.equal(preview.indexable, false);
  assert.equal(preview.metadata.robots.index, false);
  assert.equal(preview.metadata.alternates, undefined);
  assert.equal(preview.schema.url, undefined);
});

test("configured domain supplies canonical and social URLs but still requires indexing opt-in", () => {
  const preview = seoSnapshot("https://salon.example", "false");
  assert.equal(preview.indexable, false);
  assert.equal(preview.metadata.alternates.canonical, "https://salon.example/contact");
  assert.equal(preview.metadata.openGraph.images[0].url, "https://salon.example/images/social/doja-beauty.png");
});

test("launch configuration indexes eight public routes and excludes legal drafts and unverified schema", () => {
  const production = seoSnapshot("https://salon.example", "true", "production");
  assert.equal(production.indexable, true);
  assert.equal(production.paths.length, 8);
  assert.equal(production.metadata.robots.index, true);
  assert.equal(production.legal.robots.index, false);
  assert.deepEqual(production.schema.openingHoursSpecification.map((h: { opens: string; closes: string }) => [h.opens, h.closes]), [["10:30", "22:00"], ["10:30", "23:00"]]);
  for (const key of ["geo", "aggregateRating", "review", "priceRange", "sameAs"]) assert.equal(production.schema[key], undefined);
});

test("Vercel previews and development stay noindex even with production indexing settings", () => {
  for (const environment of ["preview", "development"]) {
    const preview = seoSnapshot("https://salon.example", "true", environment);
    assert.equal(preview.indexable, false);
    assert.equal(preview.metadata.robots.index, false);
    assert.equal(preview.metadata.alternates.canonical, "https://salon.example/contact");
  }
});
