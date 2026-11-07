import { images } from "../data/images";
import { restaurant } from "../data/restaurant";
import { Button } from "./Button";
import { Meander, OliveBranch } from "./Decor";
import { Photo } from "./Photo";
import { Reveal } from "./Reveal";

export function RestaurantSection() {
  return (
    <section className="story section" id="restaurant" aria-labelledby="restaurant-titel">
      <div className="container story__grid">
        <Reveal className="story__media">
          <figure className="story__main">
            <Photo image={images.olive} sizes="(min-width: 900px) 58vw, 100vw" />
            <figcaption>Olivenbaum in Athen. Symbolbild, keine Aufnahme des Restaurants.</figcaption>
          </figure>
          <figure className="story__detail">
            <Photo image={images.tzatziki} sizes="(min-width: 900px) 20vw, 40vw" />
          </figure>
        </Reveal>

        <div className="story__text">
          <OliveBranch />
          <h2 id="restaurant-titel">
            Griechischer Genuss in Lüneburg.
          </h2>
          <p>
            Im Mittelpunkt unserer Karte steht der Grill: Gyros auf dem Teller, im Dürüm oder im Baguette, dazu Souvlaki,
            Suzukakia, Bifteki und Lammkoteletts. Wer gern von allem probiert, greift zu Tellern wie Apollon, Sokrates
            oder Dionysos.
          </p>
          <p>
            Daneben findest du Mezeteller, Saganaki und Dolmadakia, frische Salate, Pfannengerichte mit Garnelen oder
            Gemüse und zum Abschluss Panna Cotta oder Tiramisu.
          </p>
          <a className="text-link story__more" href={`${import.meta.env.BASE_URL}ueber-uns.html`}>
            Mehr über uns
          </a>
        </div>
      </div>
    </section>
  );
}

export function OrderSection() {
  return (
    <section className="order" aria-labelledby="bestellung-titel">
      <Meander className="order__meander" />
      <div className="container order__inner">
        <h2 id="bestellung-titel">Lust auf Gyros?</h2>
        <div className="order__side">
          <p>
            Bestelle über das Bestellportal zur Lieferung oder Abholung, oder ruf uns einfach an. Zeiten und Konditionen
            für deine Adresse siehst du direkt im Portal.
          </p>
          <div className="button-row">
            <Button href={restaurant.orderUrl} variant="dark" external>
              Bei Restablo bestellen
            </Button>
            <Button href={restaurant.phone.href} variant="ghost">
              Jetzt anrufen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="contact section" id="kontakt" aria-labelledby="kontakt-titel">
      <div className="container">
        <header className="section-head">
          <p className="eyebrow">Kontakt &amp; Anfahrt</p>
          <h2 id="kontakt-titel">Hier findest du uns.</h2>
        </header>

        <div className="contact__grid">
          <div className="contact__block">
            <h3>Adresse</h3>
            <address>
              {restaurant.name}
              <br />
              {restaurant.address.street}
              <br />
              {restaurant.address.city}
            </address>
            <a className="text-link" href={restaurant.routeUrl} target="_blank" rel="noopener">
              Route planen<span className="visually-hidden"> in Google Maps (öffnet in neuem Tab)</span>
            </a>
          </div>

          <div className="contact__block">
            <h3>Telefon</h3>
            <a className="contact__phone" href={restaurant.phone.href}>
              {restaurant.phone.display}
            </a>
          </div>

          <div className="contact__block">
            <h3>Öffnungszeiten</h3>
            <dl className="contact__hours">
              {restaurant.openingHours.map((entry) => (
                <div key={entry.days}>
                  <dt>{entry.days}</dt>
                  <dd>{entry.hours}</dd>
                </div>
              ))}
            </dl>
            <h3 className="contact__subhead">Lieferzeiten</h3>
            <dl className="contact__hours">
              {restaurant.deliveryHours.map((entry) => (
                <div key={entry.days}>
                  <dt>{entry.days}</dt>
                  <dd>{entry.hours}</dd>
                </div>
              ))}
            </dl>
            <a className="text-link" href={restaurant.orderUrl} target="_blank" rel="noopener">
              Zum Bestellportal<span className="visually-hidden"> (öffnet in neuem Tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const base = import.meta.env.BASE_URL;

  return (
    <footer className="site-footer">
      <Meander />
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <img src={`${base}images/zeus-logo.svg`} width={335} height={405} alt="Logo von Zeus Gyros und Grill" loading="lazy" />
        </div>
        <address>
          {restaurant.address.street}
          <br />
          {restaurant.address.city}
          <br />
          <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
        </address>
        <nav aria-label="Weitere Seiten">
          <a href={restaurant.orderUrl} target="_blank" rel="noopener">
            Über Restablo bestellen<span className="visually-hidden"> (öffnet in neuem Tab)</span>
          </a>
          <a href={`${base}ueber-uns.html`}>Über uns</a>
          <a href={`${base}impressum.html`}>Impressum</a>
          <a href={`${base}datenschutz.html`}>Datenschutz</a>
          <a href={`${base}bildnachweis.html`}>Bildnachweis</a>
        </nav>
      </div>
    </footer>
  );
}
