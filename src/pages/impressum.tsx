import { renderLegalPage } from "../components/LegalPage";
import { legal, restaurant } from "../data/restaurant";

renderLegalPage({
  title: "Impressum",
  intro: (
    <p>
      Entwurf. Die Angaben stammen aus dem{" "}
      <a href={restaurant.portalImprintUrl} target="_blank" rel="noopener">
        Impressum im Bestellportal Restablo
        <span className="visually-hidden"> (öffnet in neuem Tab)</span>
      </a>{" "}
      (abgerufen am {legal.retrievedAt}) und müssen vom Betreiber bestätigt werden.
    </p>
  ),
  children: (
    <>
      <section>
        <h2>Anbieter</h2>
        <address>
          {legal.businessName}
          <br />
          Inh. {legal.owner}
          <br />
          {restaurant.address.street}
          <br />
          {restaurant.address.city}
        </address>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>{legal.owner}</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href={restaurant.phone.href}>{legal.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </p>
      </section>

      <section>
        <h2>Online-Streitbeilegung</h2>
        <p>Wir sind nicht bereit und verpflichtet, an Streitbeilegungsverfahren teilzunehmen.</p>
      </section>
    </>
  ),
});
