import type { CampsiteConfig } from "../types";

/**
 * Camping Alpendorf — Weißbriach im Gitschtal, Kärnten.
 * Alle Texte/Fakten belegt aus camping-alpendorf.at (Stand-Scrape 2026-06).
 * Bilder des Platzes = eigene Fotos (© Peter Maier / piet-flosse) in
 * /public/campsites/camping-alpendorf/. Umgebungs-/Aktivitätsbilder stammen aus
 * dem regionalen Bildmaterial der Website (© NLW Tourismus Marketing GmbH,
 * Martin Steinthaler u. a.) und sind ausdrücklich als REGION geframt.
 *
 * EHRLICH:
 *  - Der Platz liegt NICHT am See. Weissensee ca. 15 Min., Nassfeld ca. 20 Min.,
 *    Pressegger See & Freibad Weißbriach in der Nähe → `see` bleibt weg.
 *  - Reine Campingplatz (nur Stellplätze) → keine Mobilheime/Zimmer-Sektion.
 *  - Kein eigenes Spielplatz-/Kinderfoto verifizierbar → Kinder-Sektion entfällt
 *    (Familienfreundlichkeit nur in USPs/Text).
 *  - Kein echtes Award belegt (Weissensee = "sauberster Badesee" betrifft die
 *    Region, nicht den Platz) → awards bleibt leer.
 *  - Ganzjährig geöffnet (Vor-/Nach-/Hauptsaison Sommer + Winter laut Preisliste).
 *  - Logo nur als weißes Transparent-PNG vorhanden (im Footer auf weißem Feld
 *    unsichtbar, Inhalt nicht vision-prüfbar) → `logo` weggelassen, Wortmarke greift.
 *  - Koordinaten aus dem Scrape (contact.json) übernommen — bitte Pin bestätigen.
 */
const IMG = "/campsites/camping-alpendorf";

export const campingAlpendorf: CampsiteConfig = {
  name: "Camping Alpendorf",
  shortName: "Alpendorf",
  slug: "camping-alpendorf",
  ort: "Weißbriach im Gitschtal",
  region: "Kärnten",
  brandKind: "Campingplatz",
  // Kein See am Platz → `see` bewusst weggelassen (Weissensee ~15 Min. entfernt).
  regionLong: "Weißbriach · Gitschtal · Kärnten · Österreich",

  claim: "Euer ruhiger Campingplatz zwischen Berg, See & Skilift",
  claimEmphasis: "Berg, See & Skilift",
  intro:
    "Klein, fein und herzlich: unser familiär geführter Campingplatz in Weißbriach im Gitschtal — für alle, die Natur, Ruhe und persönliche Atmosphäre suchen. Der Skilift liegt direkt nebenan, Weissensee und Nassfeld sind nur Minuten entfernt.",

  // Logo liegt nur als weißes Transparent-PNG vor (im Footer auf weißem Feld
  // nicht sichtbar) → kein Logo gesetzt, Wortmarke "ALPENDORF" greift.

  statement: {
    text: "Bei uns erwartet euch kein riesiger Campingkomplex, sondern ein gemütlicher Platz — persönlich, übersichtlich und liebevoll geführt.",
    emphasis: "liebevoll geführt",
  },

  pillars: [
    { title: "Klein, fein & familiär", text: "Kein riesiger Komplex, sondern ein ruhiger, persönlich geführter Platz — bei uns kennt man sich, viele Gäste kommen seit Jahren wieder.", image: { src: `${IMG}/stellplaetze-morgen.webp`, alt: "Stellplätze mit Wohnwagen und Zelten am Camping Alpendorf im Morgenlicht" } },
    { title: "Mitten in der Bergwelt", text: "Eingebettet ins idyllische Gailtal mit Blick auf die Gailtaler Alpen — Wiesen, Almen und Ruhe rundherum.", image: { src: `${IMG}/ausblick-zelt.webp`, alt: "Blick aus dem Zelt auf Bergwiese und die Gailtaler Alpen" } },
    { title: "Berg, See & Skilift", text: "Der Skilift Weißbriach liegt direkt neben dem Platz, Weissensee und Nassfeld sind nur Minuten entfernt.", image: { src: `${IMG}/skigebiet-weissbriach.webp`, alt: "Verschneite Skipiste mit Blick ins Gitschtal bei Weißbriach" } },
  ],

  usps: [
    "Ruhige, familiäre Lage",
    "Skilift direkt nebenan",
    "Neue Sanitäranlagen (2025)",
    "Hunde herzlich willkommen",
    "Stellplätze 60–120 m²",
    "Brötchenservice & Kiosk",
    "Gratis WLAN",
    "Familienfreundlich",
  ],

  trust: {
    heading: "Worauf ihr euch bei uns verlassen könnt",
    headingEmphasis: "verlassen",
    intro:
      "Persönlich geführt von Claudia & Thomas: ein ruhiger, gepflegter Platz mit Bergblick, 2025 komplett sanierte Sanitäranlagen und ehrliche Direktpreise — den besten Preis gibt es bei Anfrage direkt bei uns.",
  },

  // Kein eindeutig belegtes Award auf der Quelle → ehrlich leer.
  awards: [],

  // Ganzjährig geöffnet (Preisliste: Vor-/Nach-/Hauptsaison Sommer & Winter).
  saison: { von: "Jänner", bis: "Dezember" },

  hero: {
    aerial: { src: `${IMG}/hero-luftaufnahme.webp`, alt: "Luftaufnahme: Camping Alpendorf in Weißbriach mit Skiberg im Hintergrund" },
  },

  camping: {
    heading: "Unser Campingplatz",
    intro:
      "Im idyllischen Gailtal mit Blick auf die Berglandschaft: großzügige Stellplätze von 60 bis 120 m², viel Grün und alles, was ihr für entspanntes Campen in Kärnten braucht.",
    features: [
      { title: "Großzügige Stellplätze", text: "Stellplatzgrößen von 60 bis 120 m² auf gepflegtem Wiesengelände — genug Raum für Wohnmobil, Wohnwagen und Zelt.", image: { src: `${IMG}/stellplaetze-sommer.webp`, alt: "Sonnige Stellplätze mit Wohnmobilen am Camping Alpendorf" } },
      { title: "Neue Sanitäranlagen", text: "2025 komplett erneuert: modern, blitzsauber, mit Duschen, WCs, Wickeltisch und barrierefreiem Zugang.", image: { src: `${IMG}/sanitaer-neu.webp`, alt: "Modern sanierter Sanitärbereich mit Holzelementen am Camping Alpendorf" } },
      { title: "Bergblick & Ruhe", text: "Ruhige Lage mit Nachtruhe von 22 bis 7 Uhr und weitem Blick auf die Berge — einfach durchatmen.", image: { src: `${IMG}/ruhe-sonnenuntergang.webp`, alt: "Gäste genießen den Sonnenuntergang über den Bergen am Camping Alpendorf" } },
      { title: "Voll ausgestattet", text: "Stromanschluss mit 16 A (CEE-Stecker), Frischwasser, Entsorgung von Grau- & Schwarzwasser, Chemietoiletten-Entleerung und Recyclinghof.", image: { src: `${IMG}/stellplatz-dachzelt.webp`, alt: "Stellplatz mit Dachzelt-Fahrzeug am Camping Alpendorf" } },
      { title: "Brötchenservice & Kiosk", text: "Frische Brötchen täglich an den Platz — einfach bis 18 Uhr am Vortag bestellen. Ein Kiosk für den täglichen Bedarf ist direkt am Gelände.", image: { src: `${IMG}/camping-abendsonne.webp`, alt: "Pick-up mit Aufstelldach auf der Wiese in der Abendsonne" } },
      { title: "Wintercamping am Skilift", text: "Auch im Winter geöffnet: der Skilift Weißbriach liegt direkt neben dem Platz, Loipen und Rodelbahnen sind ganz in der Nähe.", image: { src: `${IMG}/wintercamping.webp`, alt: "Verschneiter Campingplatz mit Wohnwagen im Winter" } },
    ],
  },

  // Keine Mobilheime/Zimmer — reiner Campingplatz (nur Stellplätze) → Sektion entfällt.
  // Keine eigenen Kinder-/Spielplatzfotos verifizierbar → Kinder-Sektion entfällt.

  aktivitaeten: {
    heading: "Rund um den Platz",
    intro:
      "Die Region Weissensee – Gitschtal – Nassfeld/Presseggersee bietet zu jeder Jahreszeit viel: Wandern, Biken und Baden im Sommer, Skifahren, Langlaufen, Rodeln und Eislaufen im Winter — vieles davon zu Fuß oder mit dem Rad erreichbar.",
    items: [
      { title: "Wandern & Almen", text: "Zahlreiche Wanderwege und bewirtschaftete Almhütten rund um den Luftkurort Weißbriach — hoch über dem türkisen Weissensee.", image: { src: `${IMG}/wandern-weissensee.webp`, alt: "Wanderer auf einem Steig hoch über dem türkisen Weissensee" } },
      { title: "Skifahren", text: "Das Kinder- & Familienskigebiet Gitschtal/Weißbriach liegt direkt nebenan (4 km Pisten, 3 Schlepplifte); das Nassfeld erreicht ihr in rund 20 Minuten.", image: { src: `${IMG}/skifahren.webp`, alt: "Kinder beim Skifahren auf der Piste im Gitschtal" } },
      { title: "Langlaufen", text: "Am Weissensee warten rund 40 km Loipen — Doppelspur und Skating — inmitten verschneiter Bergkulisse.", image: { src: `${IMG}/langlaufen.webp`, alt: "Langläufer auf der Loipe vor verschneiten Bergen am Weissensee" } },
      { title: "Eislaufen am Weissensee", text: "Die größte präparierte Natureisfläche Europas mit bis zu 25 km Eislaufbahnen — nur etwa 15 Minuten entfernt.", image: { src: `${IMG}/eislaufen-weissensee.webp`, alt: "Eisläufer auf der Natureisfläche des Weissensees" } },
      { title: "Rodeln", text: "Rodelbahnen wie jene bei der Berggeisthütte Weißbriach (2,5 km, auch Nachtrodeln) sorgen für Winterspaß für die ganze Familie.", image: { src: `${IMG}/rodeln.webp`, alt: "Kinder beim Rodeln im Schnee" } },
      { title: "Baden & Seen", text: "Im Sommer locken Weissensee, Pressegger See und das Freibad Weißbriach zum Schwimmen, Stand-up-Paddeln und Erholen.", image: { src: `${IMG}/baden-weissensee.webp`, alt: "Paar entspannt am sommerlichen Ufer des Weissensees" } },
    ],
  },

  anreise: {
    heading: "So findet ihr uns",
    modes: [
      { title: "Mit dem Auto", text: "Ziel: Weißbriach 208, A-9622 Weißbriach im Gitschtal. Ein Platz im Grünen — der Skilift Weißbriach liegt direkt nebenan." },
      { title: "In der Umgebung", text: "Weissensee rund 15 Minuten, Nassfeld etwa 20 Minuten, Pressegger See und das Freibad Weißbriach ganz in der Nähe." },
      { title: "An- & Abreise", text: "Check-in 13:00–20:00 Uhr, Check-out 7:00–10:00 Uhr. Bei früherer oder späterer Ankunft einfach kurz Bescheid geben." },
    ],
  },

  galerie: {
    heading: "Ein Platz zum Wohlfühlen",
    headingEmphasis: "Wohlfühlen",
    intro:
      "Vom ruhigen Stellplatz mit Bergblick bis zum türkisen Weissensee und Europas größter Natureisfläche — ein paar Eindrücke vom Platz und seiner Umgebung.",
    tag: "Sommer wie Winter",
    images: [
      { src: `${IMG}/camping-idylle.webp`, alt: "Idyllischer Stellplatz mit Auto, Zelt und Wohnwagen am Camping Alpendorf" },
      { src: `${IMG}/luftbild-platz.webp`, alt: "Luftbild des Camping Alpendorf von oben mit Stellplätzen und Wiesen" },
      { src: `${IMG}/weissensee-sommer.webp`, alt: "Blick über den türkisen Weissensee im Sommer" },
      { src: `${IMG}/weissensee-natureis.webp`, alt: "Luftaufnahme der präparierten Natureisfläche am winterlichen Weissensee" },
    ],
  },

  booking: {
    heading: "Preise & Anfrage",
    intro:
      "Wählt Zeitraum, Stellplatz und Personenzahl — Claudia & Thomas melden sich mit eurer persönlichen Verfügbarkeit. Den besten Preis gibt es immer bei Direktanfrage.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vor-/Nachsaison · 2 Erwachsene inkl. Stellplatz, Umweltabgabe & Ortstaxe · Strom (5 kWh) inkl. wo angegeben · Hauptsaison höher · Kinder günstiger, bis 3,99 J. gratis",
    highlight: {
      title: "Bester Preis bei Direktanfrage",
      text: "Tipp vom Platz: den besten Preis gibt es bei der Anfrage direkt über uns. Ab 14 Nächten 10 % Rabatt auf die Personengebühr.",
    },
    categories: [
      // Reale Preisliste 2026 (Vor-/Nachsaison, 2 Erwachsene inkl. Ortstaxe & Umweltabgabe):
      // mit Strom = 13,00 Stellgeb. + 16,00 (2×8) + 5,40 (2×2,70) = 34,40 → "ab € 34,40" (Originalangabe).
      { id: "strom", label: "Stellplatz mit Strom", perNight: 34, perExtraGuest: 8 },
      // ohne Strom = 10,00 Stellgeb. + 16,00 + 5,40 = 31,40.
      { id: "ohne-strom", label: "Stellplatz ohne Strom", perNight: 31, perExtraGuest: 8 },
      // Zweirad-Stellplatz = 6,00 Stellgeb. + 16,00 + 5,40 = 27,40.
      { id: "zweirad", label: "Zweirad-Stellplatz", perNight: 27, perExtraGuest: 8 },
    ],
  },

  kontakt: {
    tel: "+43 4286 346",
    telHref: "tel:+434286346",
    mail: "office@camping-alpendorf.at",
    facebook: "https://www.facebook.com/CampingSantner",
    adresse: "Weißbriach 208 · 9622 Weißbriach · Kärnten",
    // Koordinaten aus dem Scrape (contact.json) — Weißbriach; bitte Pin bestätigen.
    coords: { lat: 46.68974, lng: 13.252083 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Campingplatz",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitäranlagen 2025", href: "#camping" },
        { label: "Ausstattung", href: "#camping" },
      ],
    },
    {
      label: "Aktivitäten",
      href: "#aktivitaeten",
      children: [
        { label: "Sommer", href: "#aktivitaeten" },
        { label: "Winter", href: "#aktivitaeten" },
        { label: "Weissensee", href: "#aktivitaeten" },
      ],
    },
    {
      label: "Galerie",
      href: "#galerie",
    },
    {
      label: "Preise",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anfrage", href: "#booking" },
      ],
    },
    {
      label: "Anreise & Kontakt",
      href: "#anreise",
      children: [
        { label: "Anreise", href: "#anreise" },
        { label: "Lage & Umgebung", href: "#anreise" },
        { label: "Kontakt", href: "#anreise" },
      ],
    },
  ],
};

export default campingAlpendorf;
