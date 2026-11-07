import { images } from "../data/images";
import { onlineSurchargePercent } from "../data/menu";
import { restaurant } from "../data/restaurant";
import { Button } from "./Button";
import { Meander } from "./Decor";
import { Photo } from "./Photo";

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-titel">
      <div className="hero__media">
        <Photo image={images.hero} sizes="(min-width: 900px) max(72vw, 166vh), max(100vw, 110vh)" priority />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="container hero__content">
        <p className="eyebrow">ZEUS GYROS &amp; GRILL · LÜNEBURG</p>
        <h1 id="hero-titel">
          Ein Stück Griechenland.
          <br />
          <em>Mitten in Lüneburg.</em>
        </h1>
        <p className="hero__lead">
          Gyros, griechische Grillspezialitäten und mediterrane Lieblingsgerichte. Entdecke unsere Karte und bestelle
          bequem online.
        </p>
        <div className="button-row">
          <Button href={`${import.meta.env.BASE_URL}speisekarte.html`}>Speisekarte entdecken</Button>
          <Button href={restaurant.orderUrl} variant="ghost" external>
            Über Restablo bestellen
          </Button>
        </div>
        <p className="hero__note">Bei Bestellung über Restablo sind die Preise {onlineSurchargePercent} % höher als im Restaurant.</p>
      </div>

      {!images.hero.own && <p className="hero__caption">Symbolbild</p>}
      <Meander className="hero__meander" />
    </section>
  );
}
