import { renderLegalPage } from "../components/LegalPage";
import { images } from "../data/images";

renderLegalPage({
  title: "Bildnachweis",
  intro: (
    <p>
      Das Foto im Startbereich und die Fotos der Gerichte in der Speisekarte und bei Gyros, Souvlaki und Bifteki sind Aufnahmen des Restaurants. Alle
      übrigen Fotos sind Symbolbilder aus Wikimedia Commons und Unsplash. Sie zeigen weder das Restaurant noch dort
      zubereitete Gerichte und wurden zugeschnitten, im Format umgewandelt und in Helligkeit und Farbe angepasst.
    </p>
  ),
  children: (
    <ul className="credits">
      {Object.values(images)
        .filter((image) => !("own" in image && image.own))
        .map(({ base, credit }) => (
        <li key={base}>
          <h2>{credit.subject}</h2>
          <p>
            Foto: {credit.author}, Lizenz:{" "}
            <a href={credit.licenseUrl} target="_blank" rel="noopener">
              {credit.license}
              <span className="visually-hidden"> (öffnet in neuem Tab)</span>
            </a>
            ,{" "}
            <a href={credit.sourceUrl} target="_blank" rel="noopener">
              Originaldatei
              <span className="visually-hidden"> (öffnet in neuem Tab)</span>
            </a>
          </p>
        </li>
      ))}
    </ul>
  ),
});
