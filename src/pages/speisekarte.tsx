import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuSection } from "../components/MenuSection";
import { SiteFooter } from "../components/Sections";
import { SiteHeader } from "../components/SiteHeader";
import "../styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <a className="skip-link" href="#inhalt">
      Zum Inhalt springen
    </a>
    <SiteHeader isHome={false} current="speisekarte" />
    <main id="inhalt">
      <MenuSection />
    </main>
    <SiteFooter />
  </StrictMode>,
);
