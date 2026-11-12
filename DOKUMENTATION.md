# Dokumentation: Quellen und offene Punkte

Stand der Quellen: 04.11.2026.

## Quellen

- Bestehende Website: https://www.zeus-lueneburg.de/ (Baustellenseite mit Adresse, Telefon, Hinweis auf Lieferdienst und Bestelllink)
- Speisekarte und Preise: gedruckte Karte des Restaurants (Fotos, „Stand 04/25“)
- Bestellung: https://www.restablo.de/restaurant/zeus-gyros-grill-restaurant-lueneburg.html
- Betreiberangaben: Impressum und Datenschutzhinweise desselben Restaurants bei Restablo

Die Speisekarte zeigt die Preise im Restaurant. Quelle ist die gedruckte Karte mit dem Vermerk „Stand 04/25“, geliefert als zwei Fotos am 04.11.2026: 10 Kategorien, 87 Einträge. Die frühere Restablo-Karte diente nur noch zum Gegenprüfen der Preise.

## Unklarheiten in der Speisekarte

| Punkt | Befund | Umgang |
| --- | --- | --- |
| Online-Aufpreis | Die gedruckte Karte nennt „bei Lieferung zzgl. 16 % Aufpreis“. Restablo zeigt die höheren Preise ohne erkennbaren Unterschied zwischen Lieferung und Abholung. | Hinweis über der Karte: beim Bestellen über Restablo 16 % höher, wie vom Auftraggeber vorgegeben. Mit dem Restaurant klären, ob das auch für Abholung gilt. |
| Abweichende Preise | 79 Preise liegen bei Restablo rund 16 % höher. Ausnahmen: Gebratene Aubergine 9,00 € / 12,90 €, Kalamata Oliven 5,00 € / 6,30 €, Ketchup und Mayonnaise 0,50 € / 0,60 €. | Karte übernommen. Aubergine und Oliven beim Restaurant prüfen. |
| Allergene | Die Nummern sind wie gedruckt übernommen, wirken aber teils unvollständig: Garnelen (84, 85) ohne 14 Krebstiere, Bandnudeln (85, 86) und Dürüm (34) ohne 13 Gluten, Börek (11) ohne 13, Bifteki (57, 73) trotz Feta ohne 19 Laktose. | Nichts ergänzt oder geraten. Vor einer Veröffentlichung unbedingt vom Restaurant prüfen lassen. |
| Stand der Karte | Die Karte ist auf 04/25 datiert. | Hinweis steht unter der Karte. Aktualität beim Restaurant bestätigen lassen. |
| Mindestbestellwert | Karte: 18,00 €, Restablo: ab 17,00 €. | Nicht auf der Website genannt. |
| Nummerierung | Die Karte springt von 91 auf 93 und führt Ketchup und Mayonnaise gemeinsam als 100. | Wie gedruckt übernommen. |
| Vitamalz | Steht auf der Karte unter „Alkoholische Getränke“. | Wie gedruckt übernommen. |
| Zigeunerschnitzel | Name wie auf der Karte. | Unverändert. Das Restaurant kann selbst entscheiden, ob der Name bleiben soll. |

## Bewusst weggelassen

- **Lieferbedingungen:** Das Portal nennt derzeit Mindestbestellwert ab 17,00 € und Liefergebühr ab 1,00 €. Beides sind veränderliche „ab“-Werte, die Website verweist deshalb auf das Portal.
- **Nährwerte:** Stehen im Portal hinter einzelnen Dialogen und wurden nicht übernommen.
- **Bewertungen, Auszeichnungen, Gründungsjahr, Familiengeschichte:** In den Quellen nicht belegt.

## Vor einer Veröffentlichung zu klären

1. **Impressum:** Angaben aus dem Portal-Impressum vom Betreiber bestätigen lassen. Rechtsform, Steuernummern, Register und inhaltlich verantwortliche Person ergänzen, soweit zutreffend. Die E-Mail-Adresse hat der Auftraggeber vorgegeben (siehe unten).
2. **Datenschutz:** Text vom Auftraggeber übernommen (06.11.2026), nennt Render als Hoster. Zu prüfen: ob die Seite tatsächlich bei Render läuft und der Auftragsverarbeitungsvertrag abgeschlossen ist. Die Formulierung in Abschnitt 6 („Soweit … keine … eingesetzt werden“) ist vorsichtig; die Website setzt tatsächlich keine Cookies und kein Tracking ein.
3. **Rechtliche Prüfung** beider Seiten. Sie sind derzeit auf `noindex` gesetzt.
4. **Name und Domain:** Das Portal schreibt „Zeus Gyros & Grill Restaurant“ und nennt im Impressum die Webseite www.zeus-lg.de, die vorgegebene Website ist zeus-lueneburg.de.
5. **Fotos:** Eigene Aufnahmen wären langfristig besser als Symbolbilder.

## Logo

Vorlage ist `zeus_logo.png` von zeus-lueneburg.de (335 × 405 Pixel, weiß auf transparent). Das Logo wurde daraus automatisch zu Vektorgrafiken nachgezeichnet und weiß eingefärbt: `public/images/zeus-logo.svg` (Footer), `public/images/zeus-emblem.svg` (Kopfzeile, ohne Schriftzug) und `public/images/zeus-schriftzug.svg` (Kopfzeile, nur der Schriftzug mit griechisch anmutendem Σ). Die Rechte liegen beim Restaurant. Falls es eine Originaldatei vom Gestalter gibt, sollte sie die Nachzeichnung ersetzen.

## Öffnungszeiten

Dienstag bis Sonntag 11:00–22:00 Uhr, Montag geschlossen, vom Auftraggeber und von der gedruckten Karte bestätigt. Die Lieferung endet laut Karte sonntags schon um 21:30 Uhr. Auf der alten Website steht in einem auskommentierten, nicht sichtbaren Abschnitt noch „täglich zwischen 10:30 Uhr und 23:00 Uhr“; diese Angabe wurde nicht verwendet. Vor einer Veröffentlichung vom Restaurant bestätigen lassen. Geändert werden die Zeiten in `src/data/restaurant.ts` (`openingHours`), für Suchmaschinen zusätzlich in `index.html`.

## Über uns

Der Einstiegstext der Seite `ueber-uns.html` stammt vom Restaurant (geliefert am 06.11.2026), darunter auch „seit 2019“ und „frische Zutaten“. Er spricht Gäste mit „Sie“ an, der Rest der Website mit „du“. Die übrigen Abschnitte nennen nur belegte Angaben aus Speisekarte, Bestellportal und den gelieferten Öffnungszeiten.

## Impressionen

Die Slideshow steht auf der Seite „Über uns“ und läuft automatisch von rechts nach links. Sie zeigt die 14 Aufnahmen von Gastraum, Theke, Grill, Terrasse und Fassade aus dem Ordner `Zeus Lüneburg/Bilder` (Dateien in `public/images/galerie/`, Liste in `src/data/gallery.ts`). Anhalten lässt sie sich über den Knopf darunter; beim Wischen auf dem Smartphone pausiert sie kurz.

## Tischreservierung

Reservierungen laufen nur telefonisch, auf Wunsch des Auftraggebers vom 06.11.2026. Das frühere Online-Formular samt lokaler API wurde entfernt. Der Hinweis „Tisch reservieren nur per Anruf“ steht über der Speisekarte, auf der Seite „Über uns“ führt der Button direkt zum Anruf.

## Eigene Fotos des Restaurants

Geliefert am 06.11.2026 im Ordner `Zeus Lüneburg/Bilder`. 28 Gerichte der Speisekarte zeigen jetzt ein Vorschaubild mit Großansicht, die Zuordnung steht in `src/data/dishPhotos.ts` (Dateien in `public/images/gerichte/`). In „Aus unserer Küche“ ersetzen sie die Symbolbilder bei Gyros, Souvlaki und Bifteki, im Startbereich zeigt seit dem 06.11.2026 ein Foto des Gastraums (`cda2cbcb-….JPG`) statt des Spießgrills.

- **Zugeordnet über den Dateinamen.** Nicht verwendet, weil kein eindeutiges Gericht: `Mix_Grill_Teller.jpg`, `Überbacken.jpg`, `Hero.jpg`, `Hero_2.jpg`. Ohne eigenes Foto bleiben unter anderem Zeus Spezial, Apollon, Dionysos und Zeus Teller.
- **Zu klären:** Wer hat fotografiert, und darf die Website die Fotos nutzen? Im Bildnachweis stehen sie bisher als „Aufnahmen des Restaurants“.

## Bilder

Alle Fotos stammen aus Wikimedia Commons oder Unsplash und liegen als optimierte WebP-Dateien in `public/images/`. Sie sind Symbolbilder, auf der Seite als solche gekennzeichnet und wurden zugeschnitten sowie in Helligkeit und Farbe angepasst. Die Texte nennen sie nie als Aufnahmen des Restaurants.

| Verwendung | Datei | Urheber | Lizenz |
| --- | --- | --- | --- |
| Gyros | [DFC 1238 Plate of seasoned grilled meat …](https://commons.wikimedia.org/wiki/File:DFC_1238_Plate_of_seasoned_grilled_meat_topped_with_raw_onion_rings_served_with_a_baked_potato_topped_with_creamy_sauce_a_side_of_rice_or_cabbage_and_dipping_sauce.jpg) | PattayaPatrol | CC BY-SA 4.0 |
| Souvlaki | [DFC 4715 Sizzling skewers …](https://commons.wikimedia.org/wiki/File:DFC_4715_Sizzling_skewers_of_grilled_pork_served_with_crispy_fries_and_a_cool_tzatziki_dip_-_comfort_food_done_right.jpg) | PattayaPatrol | CC BY-SA 4.0 |
| Bifteki | [Bifteki mit frittierten Kartoffeln und Tsatsiki](https://commons.wikimedia.org/wiki/File:Bifteki_mit_frittierten_Kartoffeln_und_Tsatsiki_(IMG_20250217_132109).jpg) | Simon Legner (User:simon04) | CC BY-SA 4.0 |
| Zeus Spezial (gemischte Grillplatte) | [Gegrilltes Fleisch, Pommes, Oliven und Pitabrotplatte](https://unsplash.com/de/fotos/gegrilltes-fleisch-pommes-oliven-und-pitabrotplatte-1gM1sC9gXEY) | Christopher Chung | [Unsplash-Lizenz](https://unsplash.com/de/lizenz) |
| Restaurant-Abschnitt | [A fifteen centuries old, olive tree in Athens.jpg](https://commons.wikimedia.org/wiki/File:A_fifteen_centuries_old,_olive_tree_in_Athens.jpg) | George E. Koronaios | CC BY-SA 4.0 |
| Restaurant-Abschnitt | [Tzatziki meze or appetizer …](https://commons.wikimedia.org/wiki/File:Tzatziki_meze_or_appetizer,_also_used_as_a_sauce.jpg) | Nikodem Nijaki | CC BY-SA 3.0 |

Die Nennungen erscheinen auf der Seite `bildnachweis.html`, die im Footer verlinkt ist. Die Fotos unter CC BY-SA müssen in bearbeiteter Form unter derselben Lizenz stehen bleiben. Das Gyros-Foto beschreibt die Quelle nur als gewürztes Grillfleisch, „möglicherweise Gyros oder Schawarma“. Das Foto zu Zeus Spezial zeigt nicht dessen genaue Zusammenstellung und wurde so zugeschnitten, dass die Aufschrift eines fremden Betriebs auf den Spießen entfällt. Die Unsplash-Lizenz erlaubt die kostenlose, auch gewerbliche Nutzung ohne Namensnennung; der Name steht trotzdem im Bildnachweis.

Schriften: Cormorant Garamond und Figtree (SIL Open Font License), lokal eingebunden über Fontsource. Die Steintextur, das Favicon, die Mäanderlinie und der Olivenzweig sind eigens für dieses Projekt erzeugt.

## Kontakt-E-Mail

Seit 07.11.2026 steht in Impressum und Datenschutz `zeusluneburg@gmail.com` (vom Auftraggeber vorgegeben). Das Restablo-Impressum nennt noch eine andere Adresse.

## Suchmaschinen

Hauptadresse ist https://zeus-lüneburg.de (technisch `xn--zeus-lneburg-ilb.de`). `public/robots.txt` und `public/sitemap.xml` verweisen darauf, Startseite, Speisekarte und Über uns tragen einen Canonical-Link, damit die Render-Adresse nicht doppelt gezählt wird. Die Restaurantdaten für Google stehen als strukturierte Daten in `index.html`. Ändern sich Öffnungszeiten, Telefon oder Adresse, auch dort anpassen. Sitemap bei neuen Seiten ergänzen.
