// Zentrale Speisekarte mit den Preisen im Restaurant. Hier Gerichte, Beschreibungen und Preise bearbeiten.
// Quelle: gedruckte Karte des Restaurants, „Stand 04/25“. Online-Preise bei Restablo liegen höher, siehe onlineSurchargePercent.
// Die Allergen- und Zusatzstoff-Nummern sind wie gedruckt übernommen. Siehe DOKUMENTATION.md.

export type MenuVariant = { label: string; price: number };

export type MenuItem = {
  id: string;
  /** Nummer auf der gedruckten Karte. */
  number: string;
  name: string;
  /** Nummern aus der Legende „Allergene und Zusatzstoffe“. */
  codes?: number[];
  description?: string;
  /** Einzelpreis in Euro. Entfällt, wenn Größenvarianten angegeben sind. */
  price?: number;
  /** Größenvarianten. Der kleinste Preis wird als „ab“-Preis angezeigt. */
  variants?: MenuVariant[];
  notice?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  /** Hinweis, der für die ganze Kategorie gilt. */
  note?: string;
  items: MenuItem[];
};

/** Aufpreis bei Bestellung über Restablo gegenüber den Preisen auf dieser Karte. */
export const onlineSurchargePercent = 16;

export const allergenLegend: Record<number, string> = {
  1: "mit Farbstoff",
  2: "mit Antioxidationsmittel",
  3: "mit Geschmacksverstärker",
  4: "gewachst",
  5: "geschwärzt",
  6: "geschwefelt",
  7: "mit Phosphat",
  8: "mit Süßungsmittel",
  9: "mit Konservierungsstoffen",
  10: "enthält Phenylalaninquelle",
  11: "chininhaltig",
  12: "koffeinhaltig",
  13: "enthält Gluten Weizen",
  14: "enthält Krebstiere",
  15: "enthält Ei",
  16: "enthält Fisch",
  17: "enthält Erdnüsse",
  18: "enthält Soja",
  19: "enthält Laktose",
  20: "enthält Schalenfrüchte",
  21: "enthält Sellerie",
  22: "enthält Senf",
  23: "enthält Sesamsamen",
  24: "enthält Schwefeldioxid und Sulfite",
  25: "enthält Lupinen",
  26: "enthält Weichtiere",
  27: "enthält modifizierte Stärke",
  28: "enthält Säuerungsmittel",
  29: "enthält Aromen",
  30: "enthält Säureregulator",
  31: "enthält Cashewkerne",
  32: "enthält Pinienkerne",
  33: "enthält Gluten Gerste",
  34: "enthält Walnüsse",
};

const cream = [13, 15, 18, 19, 21, 22, 28, 29];
const grill = [21, 22];

export const menu: MenuCategory[] = [
  {
    id: "vorspeisen",
    name: "Vorspeisen",
    items: [
      { id: "metaxa-sauce", number: "1", name: "Metaxa Sauce", codes: cream, price: 5.0 },
      { id: "tzatziki", number: "2", name: "Tzatziki", codes: [19], variants: [{ label: "klein", price: 2.0 }, { label: "groß", price: 4.0 }] },
      { id: "pommes-frites", number: "3", name: "Pommes frites", price: 3.5 },
      { id: "reis", number: "4", name: "Reis", description: "mit Sauce", price: 4.0 },
      { id: "peperoni", number: "5", name: "Peperoni", price: 3.5 },
      { id: "feta-wuerzig", number: "6", name: "Feta würzig", codes: [19], price: 6.0 },
      { id: "scharfer-dip", number: "7", name: "Scharfer Dip", description: "aus Gemüse", price: 4.5 },
      { id: "pilaki", number: "8", name: "Pilaki", description: "rote Bohnen, Möhren, Zwiebeln und Tomaten", price: 5.5 },
      { id: "kalamata-oliven", number: "9", name: "Würzige Kalamata Oliven", price: 5.0 },
      { id: "saganaki", number: "10", name: "Saganaki", codes: [13, 19], description: "gebratener Schafskäse, Tomaten, Gurken, Rucola und Eisbergsalat", price: 10.0 },
      { id: "boerek", number: "11", name: "Börek", codes: [19], description: "gefüllte Teigröllchen mit Schafskäse", price: 9.0 },
      { id: "dolmadakia", number: "12", name: "Dolmadakia", codes: [19], description: "gefüllte Weinblätter mit Reis, Zwiebeln und Tzatziki", price: 8.5 },
      { id: "gegrillte-peperoni", number: "13", name: "Gegrillte Peperoni", price: 7.0 },
      { id: "bohnensalat", number: "14", name: "Bohnensalat", description: "mit Zwiebeln, roter Paprika, Petersilie und Zitrone", price: 5.0 },
      { id: "gebratene-aubergine", number: "15", name: "Gebratene Aubergine", codes: [19], description: "mit Tzatziki", price: 9.0 },
      { id: "gebratene-zucchini", number: "16", name: "Gebratene Zucchini", codes: [19], description: "mit Tzatziki", price: 8.5 },
      { id: "kalter-mezeteller", number: "17", name: "Kalter Mezeteller", codes: [19], description: "mit Pilaki, Tzatziki, Schafskäse, Bohnensalat, scharfem Dip, Tomaten, Gurken und Peperoni", price: 13.5 },
    ],
  },
  {
    id: "salat",
    name: "Salat",
    note: "Mit Joghurt (19, 22, 27, 28), Essig und Öl oder American Dressing (15, 18, 27, 28).",
    items: [
      { id: "bauernsalat", number: "21", name: "Bauernsalat", codes: [19], description: "mit Krautsalat, Eisbergsalat, Tomaten, Gurken, Schafskäse und Peperoni", price: 10.0 },
      { id: "haehnchensalat", number: "22", name: "Hähnchensalat", description: "mit Krautsalat, Eisbergsalat, Tomaten, Gurken, Rucola und Peperoni", price: 12.0 },
      { id: "gyrossalat", number: "23", name: "Gyrossalat", codes: [19, 21, 22], description: "mit Krautsalat, Eisbergsalat, Tomaten, Gurken, Peperoni und Gyros", price: 12.0 },
      { id: "thunfischsalat", number: "24", name: "Thunfischsalat", codes: [16], description: "mit Eisbergsalat, Tomaten, Gurken, Peperoni, Rucola und Thunfisch", price: 12.0 },
      { id: "krautsalat", number: "25", name: "Krautsalat", description: "mit Tomaten und Gurken", price: 4.0 },
    ],
  },
  {
    id: "gyros",
    name: "Gyros",
    note: "Scharfe Sauce, Tzatziki (19) und Zwiebeln nach Wahl.",
    items: [
      { id: "gyros", number: "31–33", name: "Gyros", codes: grill, description: "mit Krautsalat, Pommes oder Reis", variants: [{ label: "mini (Nr. 33)", price: 11.5 }, { label: "klein (Nr. 32)", price: 12.5 }, { label: "groß (Nr. 31)", price: 13.5 }] },
      { id: "dueruem-gyros", number: "34", name: "Dürüm Gyros", codes: grill, description: "mit Krautsalat", price: 10.0 },
      { id: "baguette-gyros", number: "35", name: "Baguette Gyros", codes: [13, 21, 22], description: "mit Krautsalat", price: 8.0 },
    ],
  },
  {
    id: "ueberbacken",
    name: "Überbacken",
    note: "Pommes oder Reis nach Wahl.",
    items: [
      { id: "gyros-ueberbacken", number: "41", name: "Gyros überbacken", codes: cream, description: "mit Rahmsauce", price: 15.5 },
      { id: "souvlaki-ueberbacken", number: "42", name: "Souvlaki überbacken", codes: cream, description: "2 Spieße mit Rahmsauce", price: 17.0 },
      { id: "suzukakia-ueberbacken", number: "43", name: "Suzukakia überbacken", codes: cream, description: "3 Hacksteaks mit Rahmsauce", price: 17.0 },
      { id: "nudeln-ueberbacken", number: "44", name: "Nudeln überbacken", codes: cream, description: "mit Salat, ohne weitere Beilagen", price: 14.0 },
      { id: "haehnchenfleisch-ueberbacken", number: "45", name: "Hähnchenfleisch überbacken", codes: [18, 19, 21, 22, 28, 29], description: "geschnittenes Hähnchenbrustfleisch", price: 17.5 },
    ],
  },
  {
    id: "grillspezialitaeten",
    name: "Grillspezialitäten",
    note: "Mit Salat, Pommes oder Reis. Nach Wahl mit scharfer Sauce, Zwiebeln und Tzatziki (19).",
    items: [
      { id: "souvlaki", number: "51", name: "Souvlaki", codes: grill, description: "2 Spieße", price: 17.0 },
      { id: "bauernteller", number: "52", name: "Bauernteller", codes: grill, description: "1 Souvlaki mit Gyros", price: 17.0 },
      { id: "schweinesteak", number: "53", name: "Schweinesteak", codes: grill, description: "3 Medaillons", price: 18.0 },
      { id: "schweinesteak-mit-gyros", number: "54", name: "Schweinesteak mit Gyros", codes: grill, description: "2 Medaillons", price: 18.0 },
      { id: "suzukakia", number: "55", name: "Suzukakia", codes: grill, description: "4 Hacksteaks", price: 17.5 },
      { id: "suzukakia-mit-gyros", number: "56", name: "Suzukakia mit Gyros", codes: grill, description: "2 Hacksteaks", price: 17.5 },
      { id: "bifteki", number: "57", name: "Bifteki", codes: grill, description: "großes Hacksteak gefüllt mit Feta, Peperoni, Zwiebeln und Petersilie", price: 17.5 },
      { id: "filet-vom-schwein", number: "58", name: "Filet vom Schwein", codes: grill, description: "4 Medaillons mit gebratenen Zwiebeln oder Rahmsauce", price: 18.5 },
      { id: "filet-mit-gyros", number: "59", name: "Filet mit Gyros", codes: grill, description: "2 Medaillons", price: 18.0 },
      { id: "gefuelltes-filet", number: "60", name: "Gefülltes Filet", codes: grill, description: "4 Filets gefüllt mit Feta und roter Paprika", price: 19.0 },
      { id: "gefuelltes-filet-mit-gyros", number: "61", name: "Gefülltes Filet mit Gyros", codes: grill, description: "gefüllt mit Feta und roter Paprika", price: 18.5 },
      { id: "lammkoteletts", number: "62", name: "Lammkoteletts", codes: grill, description: "5 Lammkoteletts", price: 22.0 },
      { id: "lamm-mit-gyros", number: "63", name: "Lamm mit Gyros", codes: grill, description: "3 Lammkoteletts", price: 20.0 },
      { id: "lammspiesse", number: "64", name: "Lammspieße", codes: grill, description: "2 Spieße", price: 21.0 },
      { id: "haehnchenspiesse", number: "65", name: "Hähnchenspieße", codes: grill, description: "2 Spieße", price: 18.0 },
      { id: "zeus-teller", number: "66", name: "Zeus Teller", codes: grill, description: "1 Schweinesteak, 1 Suzukakia, 1 Schweinefilet, 1 Hähnchenspieß und Gyros", price: 21.5 },
      { id: "grill-teller", number: "67", name: "Grill Teller", codes: grill, description: "1 Souvlaki, 1 Schweinesteak, 1 Suzukakia, 1 x Hähnchenfleisch aus dem Schenkel", price: 19.5 },
      { id: "lamm-teller", number: "68", name: "Lamm Teller", codes: grill, description: "1 Lammspieß, 2 Lammkoteletts mit Gyros", price: 20.0 },
      { id: "apollon-teller", number: "69", name: "Apollon Teller", codes: grill, description: "1 Schweinefilet, 1 Hähnchenspieß, 1 Suzukakia, 1 Lammkotelett mit Gyros", price: 21.5 },
      { id: "sokrates-teller", number: "70", name: "Sokrates Teller", codes: grill, description: "1 Souvlaki, 1 Schweinefilet, 1 Suzukakia, 1 x Hähnchenfleisch aus dem Schenkel, Gyros", price: 21.5 },
      { id: "dionysos-teller", number: "71", name: "Dionysos Teller", codes: grill, description: "1 Souvlaki, 1 Schweinefilet, 1 Suzukakia mit Gyros", price: 19.0 },
      { id: "zeus-spezial-fuer-2-personen", number: "72", name: "Zeus Spezial (für 2 Personen)", codes: grill, description: "2 Souvlaki, 2 Suzukakia, 2 x Hähnchenfleisch aus dem Schenkel, 2 Lammkoteletts, Gyros", price: 45.0 },
      { id: "bifteki-mit-gyros", number: "73", name: "Bifteki mit Gyros", codes: grill, description: "großes Hacksteak gefüllt mit Feta, Peperoni, Zwiebeln und Petersilie, Gyros", price: 21.0 },
      { id: "kalbsspiesse", number: "74", name: "Kalbsspieße", codes: grill, description: "2 Spieße", price: 19.0 },
      { id: "kalbsspiess-mit-gyros", number: "75", name: "Kalbsspieß mit Gyros", codes: grill, description: "1 Spieß mit Gyros", price: 19.0 },
    ],
  },
  {
    id: "pfannengerichte",
    name: "Pfannengerichte",
    note: "Pommes oder Reis nach Wahl.",
    items: [
      { id: "gyrospfanne", number: "81", name: "Gyrospfanne", codes: grill, description: "mit Zwiebeln, roter Paprika, Erbsen, Petersilie, Knoblauch und Porree", price: 17.0 },
      { id: "gemuesepfanne-vegetarisch", number: "82", name: "Gemüsepfanne vegetarisch", codes: [29], description: "mit Auberginen, Zucchini, roter und grüner Paprika, Champignons, Petersilie und Tomatensauce", price: 16.0 },
      { id: "gemuesepfanne-mit-gefluegel", number: "83", name: "Gemüsepfanne mit Geflügel", codes: [28], description: "mit Auberginen, Zucchini, roter und grüner Paprika, Champignons, Petersilie und Tomatensauce", price: 17.0 },
      { id: "gemuesepfanne-mit-garnelen", number: "84", name: "Gemüsepfanne mit Garnelen", codes: [16, 19, 21], description: "mit roter Paprika, Porree, Zwiebeln, Knoblauch, Sellerie, Petersilie und Tomatensauce", price: 20.0 },
      { id: "bandnudeln-mit-garnelen", number: "85", name: "Bandnudeln mit Garnelen", codes: [16, 19, 21], description: "mit Sellerie, Porree, roter Paprika, Knoblauch und Tomatensauce, ohne weitere Beilage", price: 20.0 },
      { id: "bandnudeln-mit-lachs", number: "86", name: "Bandnudeln mit Lachs", codes: [16, 19], description: "mit Blattspinat, Frischkäse, Zwiebeln, Knoblauch und Tomatensahnesauce, ohne weitere Beilage", price: 18.5 },
    ],
  },
  {
    id: "sonstiges",
    name: "Sonstiges",
    note: "Diese Speisen sind nicht hausgemacht.",
    items: [
      { id: "schnitzel-mit-metaxa-sauce", number: "90", name: "Schnitzel mit Metaxa Sauce", codes: cream, description: "mit Metaxasauce, Pommes und Salat", price: 12.0 },
      { id: "schnitzel-wiener-art", number: "91", name: "Schnitzel Wiener Art", codes: [13, 21, 22], description: "mit Pommes und Salat", price: 10.5 },
      { id: "zigeunerschnitzel", number: "93", name: "Zigeunerschnitzel", codes: [8, 9, 22, 27, 29], description: "mit Pommes und Salat", price: 11.5 },
      { id: "currywurst", number: "94", name: "Currywurst", codes: [3, 7], price: 7.0 },
      { id: "currywurst-mit-pommes", number: "95", name: "Currywurst mit Pommes", codes: [3, 7], description: "und Salat", price: 10.5 },
      { id: "xl-hamburger", number: "96", name: "XL Hamburger 180 g", codes: [2, 9, 15, 22, 28], price: 8.5 },
      { id: "xl-hamburger-mit-pommes", number: "97", name: "XL Hamburger 180 g", codes: [2, 9, 15, 22, 28], description: "mit Pommes", price: 12.0 },
      { id: "chicken-nuggets-mit-pommes", number: "98", name: "Chicken Nuggets", codes: [13, 21, 22, 27], description: "6 Stück mit Pommes", price: 9.5 },
      { id: "chicken-nuggets", number: "99", name: "Chicken Nuggets", codes: [13, 21, 22, 27], description: "6 Stück", price: 6.0 },
      { id: "ketchup", number: "100", name: "Ketchup", codes: [3, 9, 21, 22, 28], price: 0.5 },
      { id: "mayonnaise", number: "100", name: "Mayonnaise", codes: [1, 15, 22, 28], price: 0.5 },
      { id: "scharfe-sauce", number: "102", name: "Scharfe Sauce", codes: [13, 21, 22, 27], price: 2.0 },
    ],
  },
  {
    id: "softgetraenke",
    name: "Softgetränke",
    note: "Inkl. Pfand.",
    items: [
      {
        id: "softgetraenke",
        number: "101",
        name: "Softgetränke",
        description: "Coca-Cola (1, 2, 8, 9, 12), Cola Zero, Sprite, Fanta, Mezzo Mix, Lift, Mineralwasser",
        variants: [{ label: "0,33 l", price: 3.2 }, { label: "1 l", price: 4.2 }],
        notice: "Coca-Cola, Cola Zero und Mezzo Mix: koffeinhaltig, für Kinder und schwangere Frauen nicht empfohlen",
      },
    ],
  },
  {
    id: "alkoholische-getraenke",
    name: "Alkoholische Getränke",
    note: "Abgabe an Personen unter 16 Jahren verboten, Jugendschutzgesetz § 9 Alkoholische Getränke.",
    items: [
      { id: "weihenstephan-hefeweizen", number: "111", name: "Weihenstephan Hefeweizen, 0,5 l", price: 5.9 },
      { id: "weihenstephan-hefeweizen-alkoholfrei", number: "112", name: "Weihenstephan Hefeweizen (alkoholfrei), 0,5 l", price: 5.9 },
      { id: "becks", number: "113", name: "Beck's, 0,33 l", price: 3.7 },
      { id: "becks-blue", number: "114", name: "Beck's Blue (alkoholfrei), 0,33 l", price: 3.7 },
      { id: "vitamalz", number: "115", name: "Vitamalz, 0,33 l", price: 3.7 },
      { id: "imiglykos-rotwein", number: "116", name: "Imiglykos (Rotwein), 0,75 l", price: 15.0 },
      { id: "demestica-rotwein", number: "117", name: "Demestica (Rotwein), 0,75 l", price: 15.0 },
      { id: "imiglykos-weisswein", number: "118", name: "Imiglykos (Weißwein), 0,75 l", price: 15.0 },
      { id: "demestica-weisswein", number: "119", name: "Demestica (Weißwein), 0,75 l", price: 15.0 },
      { id: "retsina", number: "120", name: "Retsina (Weißwein), 0,75 l", price: 15.0 },
      { id: "villa-doluca", number: "121", name: "Villa Doluca (Rotwein, Weißwein oder Rosé), 0,75 l", price: 19.0 },
    ],
  },
  {
    id: "dessert",
    name: "Dessert",
    items: [
      { id: "panna-cotta", number: "131", name: "Panna Cotta hausgemacht", codes: [19, 28], description: "mit Erdbeersauce", price: 4.7 },
      { id: "tiramisu", number: "132", name: "Tiramisu hausgemacht", codes: [19], price: 5.2 },
    ],
  },
];
