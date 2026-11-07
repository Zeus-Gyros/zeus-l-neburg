# Zeus Gyros und Grill Restaurant, Website

Lokale Website mit React, TypeScript und Vite. Kein Backend, keine Tracking-Dienste, keine externen Schriften.

```bash
npm install
npm run dev
```

Die Seite läuft dann unter http://localhost:5181. `npm run build` erzeugt die fertige Fassung in `dist/`, `npm run preview` zeigt sie lokal an.

## Inhalte bearbeiten

| Was | Wo |
| --- | --- |
| Gerichte, Beschreibungen, Preise, Kategorien (Seite `speisekarte.html`) | `src/data/menu.ts` |
| Name, Adresse, Telefon, Bestell- und Routenlink, Impressumsangaben | `src/data/restaurant.ts` |
| Fotos zu einzelnen Gerichten der Speisekarte | `src/data/dishPhotos.ts`, Dateien in `public/images/gerichte/` |
| Fotos, Alternativtexte, Bildnachweise | `src/data/images.ts`, Dateien in `public/images/` |
| Auswahl „Aus unserer Küche“ | `dishes` in `src/components/Kitchen.tsx` |
| Texte der Seite „Über uns“ (`ueber-uns.html`) | `src/data/about.ts` |
| Fotos der Slideshow „Impressionen“ | `src/data/gallery.ts`, Dateien in `public/images/galerie/` |
| Farben, Abstände, Schriften | Variablen am Anfang von `src/styles/index.css` |

Herkunft der Angaben, offene Punkte und Unklarheiten stehen in [DOKUMENTATION.md](DOKUMENTATION.md).

## Veröffentlichen

Die Seite ist als statische Website für Render vorbereitet (`render.yaml`). Render baut bei jedem Push auf `main` mit `npm ci --include=dev && npm run build` und veröffentlicht den Ordner `dist/`. Node-Version: 24 (`.node-version`).
