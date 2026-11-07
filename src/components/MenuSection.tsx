import { useEffect, useMemo, useRef, useState } from "react";
import { dishPhotoIds, dishPhotoUrl } from "../data/dishPhotos";
import { allergenLegend, menu, onlineSurchargePercent, type MenuCategory, type MenuItem } from "../data/menu";
import { restaurant } from "../data/restaurant";
import { formatPrice, itemPriceLabel, normalizeSearch } from "../lib/format";
import { Button } from "./Button";

const ALL = "alle";
const totalItems = menu.reduce((sum, category) => sum + category.items.length, 0);

function MenuRow({ item, onShowPhoto }: { item: MenuItem; onShowPhoto: (item: MenuItem) => void }) {
  const hasPhoto = dishPhotoIds.has(item.id);
  return (
    <li className={`menu-row ${hasPhoto ? "menu-row--photo" : ""}`}>
      <span className="menu-row__number">
        <span className="visually-hidden">Nummer </span>
        {item.number}
      </span>
      <div className="menu-row__body">
        <div className="menu-row__line">
          <h3>
            {item.name}
            {item.codes && (
              <sup className="menu-row__codes" title={item.codes.map((code) => allergenLegend[code]).join(", ")}>
                <span className="visually-hidden"> Allergene und Zusatzstoffe: </span>
                {item.codes.join(", ")}
              </sup>
            )}
          </h3>
          <span className="menu-row__leader" aria-hidden="true" />
          <span className="menu-row__price">{itemPriceLabel(item)}</span>
        </div>
        {item.description && <p className="menu-row__description">{item.description}</p>}
        {item.variants && (
          <ul className="menu-row__variants" aria-label={`Größen von ${item.name}`}>
            {item.variants.map((variant) => (
              <li key={variant.label}>
                <span>{variant.label}</span>
                <span className="menu-row__variant-price">{formatPrice(variant.price)}</span>
              </li>
            ))}
          </ul>
        )}
        {item.notice && <p className="menu-row__meta">{item.notice}</p>}
      </div>
      {hasPhoto && (
        <button type="button" className="menu-row__photo" onClick={() => onShowPhoto(item)}>
          <img
            src={dishPhotoUrl(item.id, 160)}
            srcSet={`${dishPhotoUrl(item.id, 160)} 160w, ${dishPhotoUrl(item.id, 320)} 320w`}
            sizes="(min-width: 768px) 88px, 64px"
            width={160}
            height={160}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="visually-hidden">Foto von {item.name} vergrößern</span>
        </button>
      )}
    </li>
  );
}

function CategoryBlock({ category, onShowPhoto }: { category: MenuCategory; onShowPhoto: (item: MenuItem) => void }) {
  return (
    <section className="menu-group" aria-labelledby={`kategorie-${category.id}`}>
      <h2 id={`kategorie-${category.id}`}>{category.name}</h2>
      {category.note && <p className="menu-group__note">{category.note}</p>}
      <ul className="menu-group__list">
        {category.items.map((item) => (
          <MenuRow key={item.id} item={item} onShowPhoto={onShowPhoto} />
        ))}
      </ul>
    </section>
  );
}

/** Startkategorie aus dem Link, zum Beispiel speisekarte.html?kategorie=gyros */
function categoryFromUrl() {
  const requested = new URLSearchParams(window.location.search).get("kategorie");
  return menu.some((category) => category.id === requested) ? (requested as string) : ALL;
}

export function MenuSection() {
  const [active, setActive] = useState(categoryFromUrl);
  const [query, setQuery] = useState("");
  const [photo, setPhoto] = useState<MenuItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const chipsRef = useRef<HTMLDivElement>(null);
  const normalizedQuery = normalizeSearch(query);
  const isSearching = normalizedQuery.length > 0;

  const groups = useMemo(() => {
    if (isSearching) {
      return menu
        .map((category) => ({
          ...category,
          items: category.items.filter((item) =>
            normalizeSearch(`${item.number} ${item.name} ${item.description ?? ""} ${category.name}`).includes(normalizedQuery),
          ),
        }))
        .filter((category) => category.items.length > 0);
    }
    return active === ALL ? menu : menu.filter((category) => category.id === active);
  }, [active, isSearching, normalizedQuery]);

  const resultCount = groups.reduce((sum, category) => sum + category.items.length, 0);

  useEffect(() => {
    if (photo) dialogRef.current?.showModal();
  }, [photo]);

  // Aktive Kategorie in der waagerechten Leiste auf Smartphones sichtbar halten
  useEffect(() => {
    const scroller = chipsRef.current;
    const chip = scroller?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!scroller || !chip || scroller.scrollWidth <= scroller.clientWidth) return;
    scroller.scrollLeft = chip.offsetLeft - (scroller.clientWidth - chip.offsetWidth) / 2;
  }, [active, isSearching]);

  function selectCategory(categoryId: string) {
    setQuery("");
    setActive(categoryId);

    const url = new URL(window.location.href);
    if (categoryId === ALL) url.searchParams.delete("kategorie");
    else url.searchParams.set("kategorie", categoryId);
    window.history.replaceState(null, "", url);

    // Nur zurückscrollen, wenn der Kartenanfang bereits hinter Kopfzeile und Kategorieleiste liegt
    const list = listRef.current;
    if (list) {
      const offset =
        parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) +
        parseFloat(getComputedStyle(list).scrollMarginTop);
      if (list.getBoundingClientRect().top < offset) list.scrollIntoView({ block: "start" });
    }
  }

  const statusText = isSearching
    ? resultCount === 0
      ? `Keine Treffer für „${query.trim()}“`
      : `${resultCount} Treffer für „${query.trim()}“`
    : active === ALL
      ? `${totalItems} Einträge`
      : `${resultCount} ${resultCount === 1 ? "Eintrag" : "Einträge"}`;

  return (
    <section className="menu section" id="speisekarte" aria-labelledby="karte-titel">
      <div className="container">
        <header className="section-head section-head--split">
          <div>
            <p className="eyebrow">Griechisch &amp; mediterran</p>
            <h1 id="karte-titel">Speisekarte</h1>
          </div>
          <div className="menu__hints">
            <p className="menu__hint">
              <strong>Preise im Restaurant.</strong> Beim Bestellen über Restablo sind die Preise {onlineSurchargePercent} % höher.
            </p>
            <p className="menu__hint">
              <strong>Tisch reservieren nur per Anruf.</strong>
              <a href={restaurant.phone.href}>{restaurant.phone.display}</a>
            </p>
          </div>
        </header>

        <div className="menu__layout">
          <div className="menu__controls">
            <div className="menu-search">
              <label htmlFor="karte-suche">Gericht suchen</label>
              <div className="menu-search__field">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m16 16 4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  id="karte-suche"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="z. B. Souvlaki oder Feta"
                  autoComplete="off"
                  enterKeyHint="search"
                />
                {query && (
                  <button type="button" className="menu-search__clear" onClick={() => setQuery("")} aria-label="Suche löschen">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            <div className="menu-chips" ref={chipsRef} role="group" aria-label="Kategorie auswählen">
              <button
                type="button"
                className="menu-chip"
                aria-pressed={!isSearching && active === ALL}
                onClick={() => selectCategory(ALL)}
              >
                Alle <span className="menu-chip__count">{totalItems}</span>
              </button>
              {menu.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  className="menu-chip"
                  aria-pressed={!isSearching && active === category.id}
                  onClick={() => selectCategory(category.id)}
                >
                  {category.name} <span className="menu-chip__count">{category.items.length}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="menu__list" ref={listRef}>
            <p className="menu__status" role="status">
              {statusText}
            </p>

            {groups.map((category) => (
              <CategoryBlock key={category.id} category={category} onShowPhoto={setPhoto} />
            ))}

            {isSearching && resultCount === 0 && (
              <div className="menu__empty">
                <p>Zu dieser Suche finden wir nichts auf der Karte. Probiere einen anderen Begriff.</p>
                <button type="button" className="text-link" onClick={() => setQuery("")}>
                  Suche zurücksetzen
                </button>
              </div>
            )}

            <footer className="menu__foot">
              <p>Alle Preise inkl. Mehrwertsteuer. Stand 04/25, Änderungen und Irrtümer vorbehalten.</p>
              <details className="menu__legend">
                <summary>Allergene und Zusatzstoffe</summary>
                <ol>
                  {Object.entries(allergenLegend).map(([code, label]) => (
                    <li key={code} value={Number(code)}>
                      {label}
                    </li>
                  ))}
                </ol>
              </details>
              <Button href={restaurant.orderUrl} variant="ghost" external className="button--small">
                Online bei Restablo bestellen
              </Button>
            </footer>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label={photo ? `Foto: ${photo.name}` : undefined}
        onClose={() => setPhoto(null)}
        onClick={(event) => event.target === event.currentTarget && dialogRef.current?.close()}
      >
        {photo && (
          <figure>
            <img src={dishPhotoUrl(photo.id, 1000)} width={1000} height={1000} alt={`${photo.name}, Foto aus dem Restaurant`} />
            <figcaption>
              <span>
                Nr. {photo.number} · {photo.name}
              </span>
              <button type="button" className="text-link" onClick={() => dialogRef.current?.close()}>
                Schließen
              </button>
            </figcaption>
          </figure>
        )}
      </dialog>
    </section>
  );
}
