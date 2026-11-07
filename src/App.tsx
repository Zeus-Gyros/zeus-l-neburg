import { Hero } from "./components/Hero";
import { Kitchen } from "./components/Kitchen";
import { ContactSection, MobileActionBar, OrderSection, RestaurantSection, SiteFooter } from "./components/Sections";
import { SiteHeader } from "./components/SiteHeader";

export function App() {
  return (
    <>
      <a className="skip-link" href="#inhalt">
        Zum Inhalt springen
      </a>
      <SiteHeader />
      <main id="inhalt">
        <Hero />
        <Kitchen />
        <RestaurantSection />
        <OrderSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <MobileActionBar />
    </>
  );
}
