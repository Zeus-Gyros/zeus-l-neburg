// Fotos der Slideshow „Impressionen“ auf der Seite „Über uns“. Eigene Aufnahmen des Restaurants.
//
// So kommt ein weiteres Foto hinzu:
// 1. Foto nach public/images/galerie/ legen, zum Beispiel zeus-15.webp (640 Pixel hoch)
// 2. Hier einen Eintrag mit src, width, height (Pixelmaße des Fotos) und alt (kurze Bildbeschreibung) anpassen
//
// Reihenfolge und Anzahl sind frei wählbar. Hoch- und Querformate dürfen gemischt werden.
// Bei erkennbaren Personen vorher deren Einwilligung einholen.

export type GalleryPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export const gallery: GalleryPhoto[] = [
  { src: "galerie/zeus-01.webp", width: 960, height: 640, alt: "Gastraum mit Holztischen, Hängelampen und vielen Pflanzen" },
  { src: "galerie/zeus-02.webp", width: 960, height: 640, alt: "Sitzecke mit Lederbank, Holzlatten an der Wand und ovalem Spiegel" },
  { src: "galerie/zeus-03.webp", width: 960, height: 640, alt: "Theke mit Glasregalen, Mosaikwand und goldenem Deckengitter" },
  { src: "galerie/zeus-04.webp", width: 960, height: 640, alt: "Gedeckter Tisch mit Weingläsern und Speisekarten mit Zeus-Logo" },
  { src: "galerie/zeus-05.webp", width: 960, height: 640, alt: "Dekorative Büste mit Blumen im Gastraum" },
  { src: "galerie/zeus-06.webp", width: 853, height: 640, alt: "Grill mit Fleisch, Spießen und Hacksteaks, daneben Pommes frites" },
  { src: "galerie/zeus-07.webp", width: 853, height: 640, alt: "Bifteki mit Grillmuster auf dem Grill" },
  { src: "galerie/zeus-08.webp", width: 480, height: 640, alt: "Lange, festlich gedeckte Tafel mit Luftballons" },
  { src: "galerie/zeus-09.webp", width: 480, height: 640, alt: "Gedeckte Tische mit Luftballons unter der Holzlattendecke" },
  { src: "galerie/zeus-10.webp", width: 960, height: 640, alt: "Fassade mit Zeus-Schriftzug und Terrasse an der Straße" },
  { src: "galerie/zeus-11.webp", width: 960, height: 640, alt: "Terrasse mit Rattanstühlen und Blumen unter der Markise" },
  { src: "galerie/zeus-12.webp", width: 960, height: 640, alt: "Terrasse mit Blick auf die Straße" },
  { src: "galerie/zeus-13.webp", width: 960, height: 640, alt: "Eckgebäude aus Backstein mit Zeus-Schild über dem Eingang" },
  { src: "galerie/zeus-14.webp", width: 960, height: 640, alt: "Großer Zeus-Schriftzug über den Markisen" },
];
