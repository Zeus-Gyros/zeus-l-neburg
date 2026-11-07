import { images, type SiteImage } from "../data/images";
import { menu, type MenuItem } from "../data/menu";
import { itemPriceLabel } from "../lib/format";
import { Button } from "./Button";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

type Dish = {
  numeral: string;
  categoryId: string;
  itemId: string;
  title: string;
  extra?: string;
  image: SiteImage;
  sizes: string;
  layout: string;
};

// Auswahl aus der Karte. Beschreibung und Preis kommen aus menu.ts, damit sie überall übereinstimmen.
const dishes: Dish[] = [
  {
    numeral: "I",
    categoryId: "gyros",
    itemId: "gyros",
    title: "Gyros",
    extra: "Als mini, klein oder groß.",
    image: images.gyros,
    sizes: "(min-width: 900px) 62vw, 100vw",
    layout: "dish--lead",
  },
  {
    numeral: "II",
    categoryId: "grillspezialitaeten",
    itemId: "souvlaki",
    title: "Souvlaki",
    extra: "Mit Salat, Pommes oder Reis, nach Wahl mit scharfer Sauce, Zwiebeln und Tzatziki.",
    image: images.souvlaki,
    sizes: "(min-width: 900px) 40vw, 100vw",
    layout: "dish--left",
  },
  {
    numeral: "III",
    categoryId: "grillspezialitaeten",
    itemId: "bifteki",
    title: "Bifteki",
    image: images.bifteki,
    sizes: "(min-width: 900px) 36vw, 100vw",
    layout: "dish--right",
  },
  {
    numeral: "IV",
    categoryId: "grillspezialitaeten",
    itemId: "zeus-spezial-fuer-2-personen",
    title: "Zeus Spezial für 2 Personen",
    image: images.spezial,
    sizes: "(min-width: 900px) 70vw, 100vw",
    layout: "dish--wide",
  },
];

function findItem(categoryId: string, itemId: string): MenuItem {
  const item = menu.find((category) => category.id === categoryId)?.items.find((entry) => entry.id === itemId);
  if (!item) throw new Error(`Gericht nicht in menu.ts gefunden: ${itemId}`);
  return item;
}

const menuPage = `${import.meta.env.BASE_URL}speisekarte.html`;

export function Kitchen() {
  return (
    <section className="kitchen section" aria-labelledby="kueche-titel">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Eine Auswahl</p>
          <h2 id="kueche-titel">Aus unserer Küche</h2>
        </header>

        <div className="kitchen__grid">
          {dishes.map((dish) => {
            const item = findItem(dish.categoryId, dish.itemId);
            return (
              <Reveal key={dish.itemId} className={`dish ${dish.layout}`}>
                <article className="dish__inner">
                  <figure className={`dish__media ${dish.image.cutout ? "dish__media--cutout" : ""}`}>
                    <Photo image={dish.image} sizes={dish.sizes} />
                    {!dish.image.own && <figcaption>Symbolbild</figcaption>}
                  </figure>
                  <div className="dish__text">
                    <span className="dish__numeral" aria-hidden="true">
                      {dish.numeral}
                    </span>
                    <h3>{dish.title}</h3>
                    <p>
                      {item.description}
                      {item.description && "."} {dish.extra}
                    </p>
                    <div className="dish__foot">
                      <span className="dish__price">{itemPriceLabel(item)}</span>
                      <a
                        className="text-link"
                        href={`${menuPage}?kategorie=${dish.categoryId}`}
                        aria-label={`${dish.title} in der Speisekarte ansehen`}
                      >
                        In der Karte
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="kitchen__more">
          <Button href={menuPage}>Ganze Speisekarte ansehen</Button>
        </div>
      </div>
    </section>
  );
}
