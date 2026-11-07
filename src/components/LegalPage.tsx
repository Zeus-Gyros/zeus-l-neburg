import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { SiteFooter } from "./Sections";
import { SiteHeader } from "./SiteHeader";
import "../styles/index.css";

type LegalPageProps = {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <SiteHeader isHome={false} />
      <main id="inhalt" className="legal">
        <div className="container legal__inner">
          <h1>{title}</h1>
          {intro && <div className="legal__intro">{intro}</div>}
          {children}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function renderLegalPage(props: LegalPageProps) {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <LegalPage {...props} />
    </StrictMode>,
  );
}

/** Deutlich sichtbarer Hinweis auf Angaben, die vor der Veröffentlichung noch fehlen. */
export function TodoNote({ children }: { children: ReactNode }) {
  return (
    <div className="todo-note">
      <strong>Noch zu ergänzen</strong>
      <div>{children}</div>
    </div>
  );
}
