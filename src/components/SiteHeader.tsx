import { useEffect, useRef, useState } from "react";
import { restaurant } from "../data/restaurant";
import { Button } from "./Button";

const links = [
  { id: "speisekarte", page: "speisekarte.html", label: "Speisekarte" },
  { id: "ueber-uns", page: "ueber-uns.html", label: "Über uns" },
  { id: "kontakt", hash: "#kontakt", label: "Kontakt" },
];

export function SiteHeader({ isHome = true, current }: { isHome?: boolean; current?: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const homeHref = `${import.meta.env.BASE_URL}index.html`;
  const linkHref = (link: (typeof links)[number]) =>
    link.page ? `${import.meta.env.BASE_URL}${link.page}` : `${isHome ? "" : homeHref}${link.hash}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const toggle = toggleRef.current;
    document.body.classList.add("menu-open");
    panelRef.current?.querySelector("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      // Fokus bleibt im geöffneten Menü: Schalter plus alle Links darin
      const focusable = [toggle, ...(panelRef.current?.querySelectorAll("a") ?? [])].filter(Boolean) as HTMLElement[];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Beim Vergrößern auf Desktop-Breite verschwindet der Schalter, das Menü schließt sich mit
    const desktop = window.matchMedia("(min-width: 900px)");
    const onDesktop = (event: MediaQueryListEvent) => event.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled || open || !isHome ? "is-solid" : ""}`}>
      <div className="site-header__inner">
        <a className="wordmark" href={isHome ? "#top" : homeHref} aria-label="Zeus Gyros und Grill, zur Startseite">
          <img className="wordmark__emblem" src={`${import.meta.env.BASE_URL}images/zeus-emblem.svg`} width={335} height={286} alt="" />
          <span className="wordmark__text">
            <img className="wordmark__name" src={`${import.meta.env.BASE_URL}images/zeus-schriftzug.svg`} width={259} height={67} alt="" />
            <span className="wordmark__sub">{restaurant.wordmarkSub}</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Hauptnavigation">
          {links.map((link) => (
            <a key={link.id} href={linkHref(link)} aria-current={current === link.id ? "page" : undefined}>
              {link.label}
            </a>
          ))}
          <Button href={restaurant.orderUrl} external className="button--small">
            Über Restablo bestellen
          </Button>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobiles-menue"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="menu-toggle__bars" aria-hidden="true" />
        </button>
      </div>

      <div ref={panelRef} id="mobiles-menue" className="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile Navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={linkHref(link)}
              aria-current={current === link.id ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu__actions">
          <Button href={restaurant.orderUrl} external onClick={() => setOpen(false)}>
            Über Restablo bestellen
          </Button>
          <Button href={restaurant.phone.href} variant="ghost">
            {restaurant.phone.display}
          </Button>
        </div>
      </div>
    </header>
  );
}
