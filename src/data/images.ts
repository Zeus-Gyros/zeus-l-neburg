// Fotos mit own: true sind Aufnahmen des Restaurants. Alle anderen sind Symbolbilder aus Wikimedia Commons und Unsplash.
// Dateien liegen als optimierte WebP-Fassungen in public/images. Herkunft: siehe credits unten und bildnachweis.html.

export type SiteImage = {
  base: string;
  widths: number[];
  /** Seitenverhältnis der Datei, reserviert den Platz vor dem Laden. */
  width: number;
  height: number;
  alt: string;
  /** Eigene Aufnahme des Restaurants, kein Symbolbild. */
  own?: boolean;
  /** Freigestellt mit transparentem Hintergrund, wird ohne Bildfläche angezeigt. */
  cutout?: boolean;
  credit: {
    subject: string;
    author: string;
    license: string;
    licenseUrl: string;
    sourceUrl: string;
  };
};

const commons = "https://commons.wikimedia.org/wiki/File:";

export const images = {
  hero: {
    base: "hero",
    widths: [900, 1280, 1660, 2048],
    width: 2048,
    height: 1366,
    alt: "Gastraum von Zeus mit Holztischen, Hängelampen, großen Fenstern und vielen Pflanzen",
    own: true,
    credit: {
      subject: "Gastraum (Startbereich)",
      author: "Zeus Gyros & Grill Restaurant",
      license: "Eigene Aufnahme",
      licenseUrl: "",
      sourceUrl: "",
    },
  },
  gyros: {
    base: "gyros",
    widths: [640, 1000, 1500],
    width: 1500,
    height: 1000,
    alt: "Gyros mit Zwiebeln, Pommes frites, Krautsalat, Peperoni, Tzatziki und scharfer Sauce auf einem Zeus-Teller",
    own: true,
    cutout: true,
    credit: {
      subject: "Gyros",
      author: "Zeus Gyros & Grill Restaurant",
      license: "Eigene Aufnahme",
      licenseUrl: "",
      sourceUrl: "",
    },
  },
  souvlaki: {
    base: "souvlaki",
    widths: [640, 1000, 1400],
    width: 1400,
    height: 933,
    alt: "Souvlaki mit Zwiebeln, Pommes frites, Krautsalat und Tzatziki auf einem Zeus-Teller",
    own: true,
    cutout: true,
    credit: {
      subject: "Souvlaki",
      author: "Zeus Gyros & Grill Restaurant",
      license: "Eigene Aufnahme",
      licenseUrl: "",
      sourceUrl: "",
    },
  },
  bifteki: {
    base: "bifteki",
    widths: [640, 1000, 1400],
    width: 1400,
    height: 933,
    alt: "Bifteki mit Zwiebeln, Pommes frites, Krautsalat, Tzatziki und scharfer Sauce auf einem Zeus-Teller",
    own: true,
    cutout: true,
    credit: {
      subject: "Bifteki",
      author: "Zeus Gyros & Grill Restaurant",
      license: "Eigene Aufnahme",
      licenseUrl: "",
      sourceUrl: "",
    },
  },
  spezial: {
    base: "spezial",
    widths: [640, 1000, 1500],
    width: 1500,
    height: 833,
    alt: "Holzbrett mit gegrillten Spießen, Pommes frites, gefülltem Fladenbrot, gegrilltem Käse und Oliven",
    credit: {
      subject: "Gemischte Grillplatte",
      author: "Christopher Chung",
      license: "Unsplash-Lizenz",
      licenseUrl: "https://unsplash.com/de/lizenz",
      sourceUrl: "https://unsplash.com/de/fotos/gegrilltes-fleisch-pommes-oliven-und-pitabrotplatte-1gM1sC9gXEY",
    },
  },
  fassade: {
    base: "fassade",
    widths: [640, 1000, 1400],
    width: 1400,
    height: 934,
    alt: "Eckgebäude aus rotem Backstein mit dem Zeus-Schild über dem Eingang",
    own: true,
    credit: {
      subject: "Fassade",
      author: "Zeus Gyros & Grill Restaurant",
      license: "Eigene Aufnahme",
      licenseUrl: "",
      sourceUrl: "",
    },
  },
  olive: {
    base: "olive",
    widths: [800, 1280, 1800],
    width: 1800,
    height: 1394,
    alt: "Alter Olivenbaum bei Nacht in warmem Laternenlicht",
    credit: {
      subject: "Olivenbaum in Athen bei Nacht",
      author: "George E. Koronaios",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/deed.de",
      sourceUrl: `${commons}A_fifteen_centuries_old,_olive_tree_in_Athens.jpg`,
    },
  },
  tzatziki: {
    base: "tzatziki",
    widths: [480, 800],
    width: 800,
    height: 756,
    alt: "Schale Tzatziki mit Oliven und frischen Kräutern",
    credit: {
      subject: "Tzatziki",
      author: "Nikodem Nijaki",
      license: "CC BY-SA 3.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/deed.de",
      sourceUrl: `${commons}Tzatziki_meze_or_appetizer,_also_used_as_a_sauce.jpg`,
    },
  },
} satisfies Record<string, SiteImage>;
