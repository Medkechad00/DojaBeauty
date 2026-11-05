import { readFile, mkdir, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";

// Local vector artwork, using the same palette as the site. No salon or client is depicted.
const css = await readFile("src/styles/globals.css", "utf8");
const color = (name) => css.match(new RegExp(`--${name}:\\s*(#[A-Fa-f0-9]{6})`))[1];
const ivory = color("ivory"), sage = color("sage"), olive = color("olive"), clay = color("terracotta"), ink = color("charcoal"), white = color("white");
const svg = (content, width = 900, height = 1000) => `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">${content}</svg>`;
const arch = `<path d="M170 780V340a260 260 0 0 1 520 0v440Z" fill="${ivory}"/><path d="M194 780V340a236 236 0 0 1 472 0v440" fill="none" stroke="${olive}" stroke-opacity=".32" stroke-width="2"/>`;
const stem = `<g fill="none" stroke="${olive}" stroke-width="3" stroke-linecap="round"><path d="M590 690q30-210-30-380M570 450q-80-65-68-120M584 510q100-40 112-135M590 550q-80-35-97-87"/></g><g fill="${olive}"><ellipse cx="558" cy="325" rx="12" ry="43" transform="rotate(-20 558 325)"/><ellipse cx="508" cy="371" rx="12" ry="43" transform="rotate(-35 508 371)"/><ellipse cx="541" cy="430" rx="12" ry="38" transform="rotate(-47 541 430)"/><ellipse cx="660" cy="427" rx="13" ry="48" transform="rotate(34 660 427)"/><ellipse cx="620" cy="483" rx="11" ry="39" transform="rotate(48 620 483)"/><ellipse cx="523" cy="491" rx="10" ry="38" transform="rotate(-52 523 491)"/></g>`;
const vase = `<path d="M539 606h82l-5 76c6 31 55 60 47 122-5 44-35 75-83 75s-78-31-82-75c-7-62 42-91 47-122Z" fill="${clay}"/><path d="M560 626h38l-4 60c-4 42 55 92 45 133" fill="none" stroke="${ivory}" stroke-opacity=".35" stroke-width="2"/>`;
const bottle = `<rect x="243" y="563" width="105" height="206" rx="15" fill="${olive}"/><rect x="272" y="524" width="47" height="42" rx="4" fill="${ink}"/><path d="M295 525v-34h63" fill="none" stroke="${ink}" stroke-width="12" stroke-linecap="round"/><rect x="258" y="625" width="75" height="79" fill="${ivory}"/><path d="M278 650h35M284 660h23M278 680h35" stroke="${olive}" stroke-width="2"/>`;
const towels = `<g><rect x="120" y="824" width="300" height="46" rx="20" fill="${ivory}"/><rect x="132" y="780" width="278" height="47" rx="20" fill="${white}"/><path d="M146 800h232M142 847h249" stroke="${olive}" stroke-opacity=".3" stroke-width="2"/></g>`;
const hero = svg(`<rect width="900" height="1000" fill="${sage}"/>${arch}<path d="M0 810 900 701v299H0Z" fill="${olive}" fill-opacity=".1"/><path d="M690 0 900 0v600L690 740Z" fill="${ivory}" fill-opacity=".45"/><ellipse cx="438" cy="875" rx="337" ry="34" fill="${ink}" fill-opacity=".07"/>${stem}${vase}${bottle}${towels}<path d="m729 173 8 27 27 8-27 8-8 27-8-27-27-8 27-8Z" fill="${clay}"/><path d="M90 950h720" stroke="${olive}" stroke-opacity=".35"/>`);

const hair = svg(`<rect width="900" height="1000" fill="${sage}"/><ellipse cx="440" cy="420" rx="255" ry="314" fill="${ivory}"/><ellipse cx="440" cy="420" rx="228" ry="285" fill="none" stroke="${olive}" stroke-opacity=".5" stroke-width="2"/><path d="M440 735v163M315 900h250" stroke="${olive}" stroke-width="12" stroke-linecap="round"/><g transform="rotate(-20 340 620)"><rect x="223" y="471" width="138" height="223" rx="63" fill="${clay}"/><path d="M292 680v180" stroke="${clay}" stroke-width="38" stroke-linecap="round"/>${[249,270,291,312,333].map(x=>`<path d="M${x} 505v147" stroke="${ivory}" stroke-width="5" stroke-linecap="round"/>`).join("")}</g><path d="m611 538 50 313" stroke="${olive}" stroke-width="23" stroke-linecap="round"/>${Array.from({length:12},(_,i)=>`<path d="m${609+i*3.3} ${554+i*20} 62-10" stroke="${olive}" stroke-width="6" stroke-linecap="round"/>`).join("")}<path d="M0 935h900" stroke="${olive}" stroke-opacity=".3" stroke-width="2"/>`);

const nails = svg(`<rect width="900" height="1000" fill="${ivory}"/><path d="M0 0h550v680H0Z" fill="${sage}"/><circle cx="581" cy="323" r="143" fill="${clay}" fill-opacity=".25"/><ellipse cx="445" cy="850" rx="310" ry="75" fill="${sage}"/><ellipse cx="445" cy="824" rx="310" ry="75" fill="${white}"/><g transform="rotate(-12 320 650)"><rect x="226" y="578" width="173" height="242" rx="35" fill="${clay}"/><rect x="265" y="393" width="94" height="188" rx="9" fill="${ink}"/><path d="M265 683h93M285 702h53" stroke="${ivory}" stroke-width="3"/></g><rect x="495" y="666" width="148" height="166" rx="29" fill="${olive}"/><rect x="528" y="485" width="80" height="184" rx="7" fill="${ivory}"/><path d="M525 730h90M545 749h49" stroke="${ivory}" stroke-width="3"/><path d="M700 152v80M660 192h80" stroke="${olive}" stroke-opacity=".5" stroke-width="2"/>`);

const epilation = svg(`<rect width="900" height="1000" fill="${sage}"/><path d="M900 0H360v450c0 240 340 260 540 90Z" fill="${ivory}"/><ellipse cx="390" cy="857" rx="276" ry="72" fill="${olive}" fill-opacity=".13"/><path d="M190 602h418l-35 189c-17 102-330 102-348 0Z" fill="${white}"/><ellipse cx="399" cy="604" rx="209" ry="74" fill="${ivory}"/><ellipse cx="399" cy="604" rx="175" ry="51" fill="${clay}" fill-opacity=".75"/><rect x="473" y="339" width="51" height="313" rx="24" transform="rotate(26 473 339)" fill="${olive}"/><g transform="translate(168 -110) scale(.9)">${stem}</g><path d="M166 873h441" stroke="${olive}" stroke-opacity=".35" stroke-width="2"/>`);

const face = svg(`<rect width="900" height="1000" fill="${ivory}"/><path d="M60 1000V411a390 390 0 0 1 780 0v589Z" fill="${sage}"/><path d="M447 256c-88-10-177 37-185 146-4 48 5 71-29 121-12 18-29 39-22 53 6 10 27 11 45 15-3 28-20 57-11 71 10 10 31 0 43 10-5 26-9 48 11 59 48 22 111 5 150-23l-13 96c-5 35 60 51 96 85" fill="none" stroke="${olive}" stroke-width="4" stroke-linecap="round"/><path d="M259 470q36-28 80-4M286 484q25 20 52-2M257 636q25-8 45-1M409 598q41-51 76-108" fill="none" stroke="${olive}" stroke-width="3" stroke-linecap="round"/><path d="M505 288c128 60 149 253 12 338" fill="none" stroke="${olive}" stroke-width="4"/><circle cx="426" cy="596" r="48" fill="${clay}" fill-opacity=".3"/><g transform="translate(454 144)"><rect x="170" y="586" width="91" height="188" rx="11" fill="${olive}"/><rect x="187" y="535" width="57" height="54" rx="4" fill="${ink}"/><path d="M197 535v-61q20-39 37-18v79Z" fill="${clay}"/></g>`);

const interior = svg(`<rect width="1000" height="940" fill="${ivory}"/><path d="M150 778V344a224 224 0 0 1 448 0v434Z" fill="${sage}"/><path d="M174 777V343a200 200 0 0 1 400 0v434" fill="none" stroke="${olive}" stroke-opacity=".4" stroke-width="2"/><path d="m0 824 1000-120v236H0Z" fill="${sage}"/><path d="M110 776h710v30H110Z" fill="${olive}"/><path d="M165 806v134M765 806v134" stroke="${olive}" stroke-width="14"/><g transform="translate(133 -149) scale(1.02)">${stem}${vase}</g><g transform="translate(5 117) scale(.75)">${bottle}${towels}</g><path d="M867 130v257M837 167v151M897 185v179" stroke="${clay}" stroke-width="2"/>`,1000,940);

const files = {
  "images/hero/doja-hero.svg": hero,
  "images/categories/coiffure.svg": hair,
  "images/categories/onglerie.svg": nails,
  "images/categories/epilation.svg": epilation,
  "images/categories/esthetique-maquillage.svg": face,
  "images/institute/interior-main.svg": interior,
  "images/gallery/gallery-01.svg": hero,
  "images/gallery/gallery-02.svg": nails,
  "images/gallery/gallery-03.svg": face,
  "icon.svg": svg(`<rect width="64" height="64" rx="12" fill="${olive}"/><path d="M19 15h11c25 0 25 34 0 34H19V15Zm8 6v22h4c15 0 15-22 0-22h-4Z" fill="${ivory}"/>`,64,64),
  "images/social/doja-beauty.svg": svg(`<rect width="1200" height="630" fill="${ivory}"/><path d="M856 630V252a150 150 0 0 1 300 0v378Z" fill="${sage}"/><path d="M893 630V252a113 113 0 0 1 226 0v378" fill="none" stroke="${olive}" stroke-width="2"/><path d="M70 92h50" stroke="${clay}" stroke-width="3"/><text x="70" y="240" font-family="Georgia,serif" font-size="78" letter-spacing="3" fill="${ink}">DOJA BEAUTY</text><text x="74" y="306" font-family="Arial,sans-serif" font-size="24" letter-spacing="4" fill="${olive}">INSTITUT DE BEAUTÉ</text><text x="74" y="446" font-family="Georgia,serif" font-style="italic" font-size="44" fill="${ink}">Prenez du temps pour vous.</text><text x="74" y="534" font-family="Arial,sans-serif" font-size="21" fill="${ink}">Sidi Moussa · Route d’Ourika · Marrakech</text>`,1200,630),
};

for (const [name, content] of Object.entries(files)) {
  const target = join("public", name);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, content);
}
console.log(`${Object.keys(files).length} local placeholders created.`);
