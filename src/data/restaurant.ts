// Zentrale Restaurantdaten. Adresse, Telefon und Links nur hier ändern.

const addressLine = "Bleckeder Landstraße 45, 21337 Lüneburg";

export const restaurant = {
  name: "Zeus Gyros und Grill Restaurant",
  wordmarkSub: "Gyros & Grill · Lüneburg",
  address: {
    street: "Bleckeder Landstraße 45",
    city: "21337 Lüneburg",
    line: addressLine,
  },
  phone: {
    display: "+49 4131 60 50 500",
    href: "tel:+4941316050500",
  },
  openingHours: [
    { days: "Montag", hours: "Geschlossen" },
    { days: "Dienstag bis Sonntag", hours: "11:00–22:00 Uhr" },
  ],
  // Laut gedruckter Karte.
  deliveryHours: [
    { days: "Dienstag bis Samstag", hours: "11:00–22:00 Uhr" },
    { days: "Sonntag", hours: "11:00–21:30 Uhr" },
  ],
  orderUrl: "https://www.restablo.de/restaurant/zeus-gyros-grill-restaurant-lueneburg.html",
  routeUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressLine)}`,
  portalImprintUrl: "https://www.restablo.de/restaurant/zeus-gyros-grill-restaurant-lueneburg/content/impressum.html",
  portalPrivacyUrl: "https://www.restablo.de/restaurant/zeus-gyros-grill-restaurant-lueneburg/content/datenschutz.html",
} as const;

// Angaben aus dem Impressum des Bestellportals, Stand 04.11.2026. Vor Veröffentlichung vom Betreiber bestätigen lassen.
export const legal = {
  businessName: "Zeus Gyros & Grill Restaurant",
  owner: "Rukiye Sobay",
  phoneDisplay: "04131-6050500",
  email: "ercansobay@yahoo.de",
  retrievedAt: "04.11.2026",
} as const;
