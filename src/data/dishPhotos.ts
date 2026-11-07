// Eigene Fotos des Restaurants zu einzelnen Gerichten der Speisekarte.
// Dateien: public/images/gerichte/<id>-160.webp, -320.webp und -1000.webp (quadratisch).
// Für ein neues Foto die drei Größen dort ablegen und die ID aus menu.ts hier eintragen.

export const dishPhotoIds = new Set([
  "tzatziki",
  "metaxa-sauce",
  "pommes-frites",
  "kalamata-oliven",
  "pilaki",
  "saganaki",
  "boerek",
  "dolmadakia",
  "bohnensalat",
  "gebratene-zucchini",
  "bauernsalat",
  "haehnchensalat",
  "gyrossalat",
  "gyros",
  "souvlaki",
  "suzukakia",
  "bifteki",
  "lammkoteletts",
  "grill-teller",
  "lamm-teller",
  "sokrates-teller",
  "gemuesepfanne-vegetarisch",
  "bandnudeln-mit-garnelen",
  "schnitzel-mit-metaxa-sauce",
  "schnitzel-wiener-art",
  "zigeunerschnitzel",
  "panna-cotta",
  "tiramisu",
]);

export const dishPhotoUrl = (id: string, width: 160 | 320 | 1000) =>
  `${import.meta.env.BASE_URL}images/gerichte/${id}-${width}.webp`;
