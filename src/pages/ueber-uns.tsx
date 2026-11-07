import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "../components/Button";
import { Gallery } from "../components/Gallery";
import { Meander } from "../components/Decor";
import { Photo } from "../components/Photo";
import { MobileActionBar, SiteFooter } from "../components/Sections";
import { SiteHeader } from "../components/SiteHeader";
import { about } from "../data/about";
import { images } from "../data/images";
import { restaurant } from "../data/restaurant";
import "../styles/index.css";

const base = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <a className="skip-link" href="#inhalt">
      Zum Inhalt springen
    </a>
    <SiteHeader isHome={false} current="ueber-uns" />
    <main id="inhalt" className="about">
      <section className="about__intro" aria-labelledby="ueber-uns-titel">
        <div className="container about__intro-grid">
          <div>
            <h1 id="ueber-uns-titel">Über uns</h1>
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="about__tagline">{about.tagline}</p>
          </div>
          <figure className="about__photo">
            <Photo image={images.fassade} sizes="(min-width: 900px) 46vw, 100vw" priority />
            {!images.fassade.own && <figcaption>Symbolbild</figcaption>}
          </figure>
        </div>
      </section>

      <Meander className="about__meander" />

      <Gallery />

      <section className="about__offer section" aria-labelledby="angebot-titel">
        <div className="container">
          <h2 id="angebot-titel">Das erwartet dich bei uns</h2>
          <ul className="about__offer-grid">
            {about.offer.map((entry) => (
              <li key={entry.title}>
                <h3>{entry.title}</h3>
                <p>{entry.text}</p>
              </li>
            ))}
          </ul>
          <Button href={`${base}speisekarte.html`}>Zur Speisekarte</Button>
        </div>
      </section>

      <section className="about__visit" aria-labelledby="besuch-titel">
        <div className="container about__visit-inner">
          <div>
            <h2 id="besuch-titel">Komm vorbei.</h2>
            <address>
              {restaurant.address.street}
              <br />
              {restaurant.address.city}
            </address>
            <dl className="contact__hours">
              {restaurant.openingHours.map((entry) => (
                <div key={entry.days}>
                  <dt>{entry.days}</dt>
                  <dd>{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="button-row">
            <Button href={restaurant.phone.href} variant="dark">
              Tisch reservieren: anrufen
            </Button>
            <Button href={restaurant.routeUrl} variant="ghost" external>
              Route planen
            </Button>
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
    <MobileActionBar />
  </StrictMode>,
);
