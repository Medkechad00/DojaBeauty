import Link from "next/link";
import { Artwork } from "@/components/ui/Artwork";
import { photography } from "@/data/photography";
import { pageMetadata } from "@/lib/seo";
import { categories, categoryHref } from "@/data/categories";
import { getCategoryServices } from "@/data/services";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { ServiceList } from "@/components/services/ServiceList";
import { BookingSection } from "@/components/sections/BookingSection";

export const metadata = pageMetadata("Prestations & tarifs", "Coiffure, onglerie, épilation, soins du visage et maquillage à Sidi Moussa. Découvrez la carte, les durées et les tarifs, puis contactez DOJA BEAUTY.", "/prestations");

export default function CataloguePage() {
  return <>
    <div className="site-container">
      <Breadcrumbs items={[{ label: "Prestations" }]} />
      <div className="catalogue-intro">
        <div className="page-intro">
          <p className="eyebrow section-label">La carte DOJA BEAUTY</p>
          <h1>Votre beauté.<br /><span className="rose-text">À la carte.</span></h1>
          <p>Des cheveux jusqu’au bout des ongles, choisissez le soin qui vous correspond. Tous les détails pour préparer votre prochain rendez-vous.</p>
        </div>
        <Artwork src={photography.nailDetail.src} priority sizes="(min-width: 900px) 28vw, 92vw" />
      </div>
    </div>
    {categories.map((category) => (
      <section key={category.id} id={category.id} className={`catalogue-chapter chapter-${category.id}`} aria-labelledby={`heading-${category.id}`}>
        <div className="chapter-hero photo-panel">
          <Artwork src={category.image} sizes="100vw" />
          <div className="site-container chapter-hero-inner">
            <div className="chapter-hero-copy">
              <p className="eyebrow chapter-kicker"><span>{category.number}</span>{category.shortDescription}</p>
              <h2 id={`heading-${category.id}`}>{category.name}</h2>
              <p className="chapter-description">{category.introduction}</p>
              <Link href={categoryHref(category.id)} className="text-link chapter-explore">Explorer la collection <Icon name="arrow" /></Link>
            </div>
          </div>
        </div>
        <div className="site-container chapter-services">
          <ServiceList services={getCategoryServices(category.id)} editorial categoryId={category.id} />
          {category.id === "coiffure" && <p className="pricing-detail">Pour la coloration, le balayage et le lissage, le tarif dépend de la longueur, de la densité des cheveux et du travail à réaliser.</p>}
        </div>
      </section>
    ))}
    <div className="site-container pb-12"><Link href="/contact" className="text-link">Préparer votre visite <Icon name="arrow" /></Link></div>
    <BookingSection />
  </>;
}
