import Link from "next/link";
import { pageMetadata, businessSchema } from "@/lib/seo";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedCategories } from "@/components/sections/FeaturedCategories";
import { InstituteSection } from "@/components/sections/InstituteSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { BookingSection } from "@/components/sections/BookingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ServiceList } from "@/components/services/ServiceList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Icon } from "@/components/ui/Icon";
import { visibleServices } from "@/data/services";

export const metadata = { ...pageMetadata("Institut de beauté à Sidi Moussa, Marrakech", "Découvrez DOJA BEAUTY à Sidi Moussa, sur la route de l’Ourika à Marrakech. Consultez nos prestations et contactez-nous sur WhatsApp pour votre rendez-vous.", "/"), title: { absolute: "DOJA BEAUTY | Institut de beauté à Sidi Moussa, Marrakech" } };

export default function Home() {
  return <>
    <JsonLd data={businessSchema()} /><HeroSection />
    <FeaturedCategories />
    <section className="section selection-section" aria-labelledby="selection-heading"><div className="site-container selection-layout"><div className="selection-intro"><div><p className="eyebrow section-label">02 / À la carte</p><h2 id="selection-heading">Envie de changer ?</h2></div><Link href="/prestations" className="text-link">Consulter la carte <Icon name="arrow" /></Link></div><div><ServiceList services={visibleServices.filter((service) => service.featured)} /></div></div></section>
    <InstituteSection /><GallerySection /><BookingSection /><LocationSection /><FAQSection />
  </>;
}
