import { renderLegalPage } from "../components/LegalPage";
import { legal, restaurant } from "../data/restaurant";

renderLegalPage({
  title: "Impressum",
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
