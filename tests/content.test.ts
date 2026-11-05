import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { formatPrice, formatDuration, PRICE_PENDING } from "../src/lib/formatters.ts";
import { buildWhatsAppUrl } from "../src/lib/whatsapp.ts";
import { services, getCategoryServices, catalogueApproved } from "../src/data/services.ts";
import { categories } from "../src/data/categories.ts";
import { photography } from "../src/data/photography.ts";
import { business } from "../src/data/business.ts";
import { legal } from "../src/data/legal.ts";

test("the requested development menu contains the exact 16 prices, modes and durations", () => {
  const expected = [
    ["brushing", 80, 40, "fixed"], ["coupe", 150, 45, "fixed"],
    ["coloration-racines", 350, 120, "from"], ["balayage-meches", 550, 180, "from"], ["lissage", 950, 180, "from"],
    ["manucure", 100, 40, "fixed"], ["pedicure", 130, 50, "fixed"], ["vernis-permanent", 180, 60, "fixed"], ["extensions-gel", 350, 105, "fixed"],
    ["epilation-visage", 50, 20, "fixed"], ["epilation-demi-jambes", 90, 30, "fixed"], ["epilation-jambes", 150, 45, "fixed"], ["epilation-corps", 350, 90, "fixed"],
    ["soin-visage", 300, 60, "fixed"], ["extensions-cils", 450, 105, "fixed"], ["maquillage", 300, 60, "fixed"],
  ];
  assert.deepEqual(services.map((s) => [s.id, s.price.fixedMad ?? s.price.minMad, s.duration.min, s.price.mode]), expected);
  assert.ok(services.every((s) => s.visible && s.status === "proposed" && s.price.status === "proposed" && s.duration.status === "proposed" && s.duration.min === s.duration.max));
  assert.equal(catalogueApproved, false);
});

test("unknown and invalid prices fail closed while proposed prices are explicitly displayable", () => {
  for (const mode of ["range", "from", "fixed", "on_request"] as const) assert.equal(formatPrice({ status: "unverified", mode, minMad: 50, maxMad: 150, fixedMad: 99 }), PRICE_PENDING);
  assert.equal(formatPrice({ status: "approved", mode: "range", minMad: 100, maxMad: 50 }), PRICE_PENDING);
  assert.equal(formatPrice({ status: "proposed", mode: "fixed", fixedMad: NaN }), PRICE_PENDING);
  assert.equal(formatPrice({ status: "approved", mode: "from", minMad: -1 }), PRICE_PENDING);
  assert.equal(formatPrice({ status: "proposed", mode: "fixed", fixedMad: 80 }), "80 DH");
  assert.equal(formatPrice({ status: "proposed", mode: "from", minMad: 350 }), "À partir de 350 DH");
});

test("durations use readable French and invalid data is not rendered numerically", () => {
  for (const [minutes, label] of [[40, "40 min"], [60, "1 h"], [90, "1 h 30"], [105, "1 h 45"], [120, "2 h"], [180, "3 h"]] as const)
    assert.equal(formatDuration({ status: "proposed", min: minutes, max: minutes }), label);
  for (const minutes of [0, -1, NaN, Infinity, 1.5]) assert.equal(formatDuration({ status: "approved", min: minutes, max: minutes }), "Durée sur demande");
  assert.equal(formatDuration({ status: "unverified", min: 60, max: 60 }), "Durée sur demande");
  assert.equal(formatDuration({ status: "approved", min: 60, max: 30 }), "Durée sur demande");
});

test("every service message has the matching category, price, duration and no automatic confirmation", () => {
  for (const item of services) {
    const url = new URL(buildWhatsAppUrl(item));
    const message = url.searchParams.get("text")!;
    assert.equal(url.hostname, "wa.me");
    assert.equal(url.pathname, "/" + business.phone.whatsappDigits);
    assert.equal(url.searchParams.size, 1);
    assert.ok(message.includes("Service : " + item.name));
    assert.ok(message.includes("Catégorie : " + categories.find((c) => c.id === item.categoryId)!.name));
    assert.ok(message.includes("Tarif indicatif : " + formatPrice(item.price)));
    assert.ok(message.includes("Durée estimée : " + formatDuration(item.duration)));
    assert.ok(message.includes("Pourriez-vous me communiquer vos disponibilités ?"));
    assert.ok(message.includes("\n\n"));
    assert.doesNotMatch(message, /rendez-vous (est )?confirmé|réservation confirmée/i);
    if (item.price.mode === "from") assert.ok(message.includes("Tarif indicatif : À partir de "));
  }
});

test("encoding preserves French accents, newlines and reserved characters", () => {
  const name = "Épilation & soin / test ? + #";
  const url = new URL(buildWhatsAppUrl({ ...services[0], name }));
  assert.ok(url.searchParams.get("text")!.includes(name));
  assert.equal(url.searchParams.size, 1);
  assert.equal(url.hash, "");
  assert.ok(new URL(buildWhatsAppUrl()).searchParams.get("text")!.startsWith("Bonjour " + business.name));
});

test("categories cover all services exactly once and each service has a unique local photo", () => {
  const ids = categories.flatMap(({ id }) => getCategoryServices(id).map((s) => s.id));
  assert.equal(new Set(ids).size, 16);
  assert.deepEqual(ids, services.map((s) => s.id));
  const paths = services.map((s) => photography[s.image].src);
  assert.equal(new Set(paths).size, 16);
  for (const photo of Object.values(photography)) {
    assert.ok(existsSync(new URL("../public" + photo.src, import.meta.url)), photo.src);
    assert.ok(photo.width > 500 && photo.height > 500);
    assert.ok(photo.alt.length > 15);
    assert.doesNotMatch(photo.alt, /inspiration|stock|DOJA|résultat/i);
  }
  const galleryPaths = categories.flatMap((c) => c.gallery.map((key) => photography[key].src));
  assert.equal(galleryPaths.length, 12);
  assert.equal(new Set(galleryPaths).size, 12);
  assert.ok(galleryPaths.every((p) => !paths.includes(p)));
});

test("confirmed hours and missing legal identity remain explicit", () => {
  assert.equal(business.hours.status, "approved");
  assert.deepEqual(business.hours.schedule.map((h) => [h.schemaDays.length, h.opens, h.closes]), [[4, "10:30", "22:00"], [3, "10:30", "23:00"]]);
  assert.equal(legal.status, "draft");
  for (const key of ["operator", "publicationDirector", "host", "email"] as const) assert.equal(legal[key], undefined);
});
