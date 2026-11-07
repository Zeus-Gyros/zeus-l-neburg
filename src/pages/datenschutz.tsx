import { renderLegalPage } from "../components/LegalPage";
import { legal, restaurant } from "../data/restaurant";

// Text vom Auftraggeber, geliefert am 06.11.2026.

const newTab = <span className="visually-hidden"> (öffnet in neuem Tab)</span>;

renderLegalPage({
  title: "Datenschutzerklärung",
  children: (
    <>
      <section>
        <h2>1. Verantwortlicher</h2>
        <address>
          {legal.businessName}
          <br />
          Inhaberin: {legal.owner}
          <br />
          {restaurant.address.street}
          <br />
          {restaurant.address.city}
        </address>
        <p>
          Telefon: <a href={restaurant.phone.href}>{legal.phoneDisplay}</a>
          <br />
          E-Mail: <a href={`mailto:${legal.email}`}>{legal.email}</a>
        </p>
      </section>

      <section>
        <h2>2. Hosting und Server-Logfiles</h2>
        <p>Diese Website wird über den Hosting-Anbieter Render Services, Inc., USA, bereitgestellt.</p>
        <p>Beim Aufruf unserer Website können technisch erforderliche Informationen verarbeitet werden, insbesondere:</p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit des Zugriffs</li>
          <li>Aufgerufene Seiten und Dateien</li>
          <li>Browsertyp und Betriebssystem</li>
          <li>Technische Informationen zur Anfrage</li>
        </ul>
        <p>
          Die Verarbeitung erfolgt zur Bereitstellung der Website, zur Gewährleistung der Sicherheit und zur Fehlerbehebung
          auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <p>
          Mit Render ist eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO vorgesehen. Eine mögliche
          Übermittlung personenbezogener Daten in die USA erfolgt unter Beachtung der Anforderungen der Art. 44 ff. DSGVO.
          Render ist nach dem EU-US Data Privacy Framework zertifiziert.
        </p>
        <p>
          Die Speicherdauer der Serverprotokolle richtet sich nach der tatsächlich eingesetzten Hosting-Konfiguration und
          den erforderlichen Sicherheitszwecken.
        </p>
      </section>

      <section>
        <h2>3. Kontaktaufnahme</h2>
        <p>
          Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir Ihre Angaben ausschließlich zur
          Bearbeitung Ihrer Anfrage.
        </p>
        <p>
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogenen Anfragen beziehungsweise Art. 6 Abs. 1 lit.
          f DSGVO bei sonstigen Anfragen.
        </p>
        <p>
          Die Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind, sofern keine
          gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section>
        <h2>4. Online-Bestellungen über Restablo</h2>
        <p>Auf unserer Website befindet sich ein Link zum externen Bestellsystem Restablo.</p>
        <p>
          Beim Anklicken dieses Links verlassen Sie unsere Website und werden zur Plattform Restablo weitergeleitet. Dort
          gelten die jeweiligen{" "}
          <a href={restaurant.portalPrivacyUrl} target="_blank" rel="noopener">
            Datenschutzhinweise
            {newTab}
          </a>
          .
        </p>
        <p>
          Über den bloßen Bestelllink werden auf unserer Website keine Bestelldaten erhoben. Die Verarbeitung
          personenbezogener Daten im Rahmen einer Bestellung richtet sich nach den Datenschutzhinweisen des Bestellsystems
          und den dort beschriebenen Verantwortlichkeiten.
        </p>
      </section>

      <section>
        <h2>5. Google Maps</h2>
        <p>Unsere Website enthält einen externen Link zu Google Maps, einem Dienst von Google.</p>
        <p>
          Erst durch das Anklicken des Links wird die entsprechende Website von Google aufgerufen. Dabei können
          personenbezogene Daten durch Google verarbeitet werden.
        </p>
        <p>
          Weitere Informationen finden Sie unter:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">
            https://policies.google.com/privacy
            {newTab}
          </a>
        </p>
      </section>

      <section>
        <h2>6. Cookies und Tracking</h2>
        <p>
          Soweit auf dieser Website keine technisch nicht notwendigen Cookies, Tracking-Technologien oder vergleichbare
          Dienste eingesetzt werden, erfolgt keine entsprechende Verarbeitung zu Analyse- oder Werbezwecken.
        </p>
        <p>Technisch erforderliche Speicher- und Zugriffsvorgänge können zur Bereitstellung der Website erfolgen.</p>
      </section>

      <section>
        <h2>7. Ihre Rechte</h2>
        <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
        <ul>
          <li>Auskunft über Ihre personenbezogenen Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
          <li>Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren (Art. 77 DSGVO).</p>
      </section>

      <section>
        <h2>8. Aktualisierung</h2>
        <p>
          Diese Datenschutzerklärung wird angepasst, wenn sich die technischen Funktionen der Website oder die Verarbeitung
          personenbezogener Daten ändern.
        </p>
      </section>
    </>
  ),
});
