import type { MenuItem } from "../data/menu";

const euro = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });

export const formatPrice = (price: number) => euro.format(price);

export function itemPriceLabel(item: MenuItem) {
  if (item.variants?.length) {
    return `ab ${formatPrice(Math.min(...item.variants.map((variant) => variant.price)))}`;
  }
  return formatPrice(item.price ?? 0);
}

/** Macht die Suche unabhängig von Groß-/Kleinschreibung und Schreibweisen wie „Hähnchen“ oder „Haehnchen“. */
export function normalizeSearch(text: string) {
  return text
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/ae/g, "a")
    .replace(/oe/g, "o")
    .replace(/ue/g, "u")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .trim();
}
