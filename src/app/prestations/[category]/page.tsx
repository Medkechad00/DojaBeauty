import { notFound } from "next/navigation";
import { categories, categoryHref } from "@/data/categories";
import { getCategoryServices } from "@/data/services";
import { photography } from "@/data/photography";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { ServiceList } from "@/components/services/ServiceList";
import { CategoryNavigation } from "@/components/services/CategoryNavigation";
import { CategoryDiscovery } from "@/components/services/CategoryDiscovery";
import { CategoryGallery } from "@/components/sections/CategoryGallery";
import { BookingSection } from "@/components/sections/BookingSection";
import { FAQSection } from "@/components/sections/FAQSection";
export const dynamicParams = false;
export function generateStaticParams() { return categories.map(({ id }) => ({ category: id })); }
 type Props = { params: Promise<{ category: string }> };
export async function generateMetadata({ params }: Props) {
  const { category: slug } = await params;
  const category = categories.find(({ id }) => id === slug);
  return category ? pageMetadata(category.name + " à Sidi Moussa", category.introduction, categoryHref(category.id)) : {};
}
export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = categories.find(({ id }) => id === slug);
  if (!category) notFound();
  return <><div className="site-container"><Breadcrumbs items={[{ label: "Prestations", href: "/prestations" }, { label: category.name }]} />
    <section className={"collection-hero category-hero-" + category.id}><div className="collection-hero-copy"><p className="eyebrow section-label">{category.number} / La collection</p><h1>{category.name}</h1><p className="collection-tagline">{category.heading}</p><p className="muted">{category.introduction}</p><div className="actions"><a href="#les-prestations" className="button">Voir les prestations <Icon name="arrow" /></a><WhatsAppLink variant="text" serviceName={category.name}>Nous écrire</WhatsAppLink></div></div><Artwork src={category.image} priority sizes="(min-width: 900px) 55vw, 92vw" /></section>
    <CategoryNavigation current={category.id} /><section id="les-prestations" className="collection-services"><div className="collection-services-heading"><p className="eyebrow">Choisissez votre moment</p><h2>Les prestations</h2></div><ServiceList services={getCategoryServices(category.id)} editorial categoryId={category.id} />{category.id === "coiffure" && <p className="pricing-detail">Coloration, balayage et lissage : les prix de départ évoluent selon la longueur, la densité des cheveux et le travail à réaliser.</p>}</section>
    <CategoryGallery categoryId={category.id} title={category.galleryTitle} images={category.gallery.map((id) => photography[id])} />
    <div className="category-booking"><div><p className="eyebrow">Votre prochain rendez-vous</p><h2>{category.bookingHeading}</h2></div><WhatsAppLink serviceName={category.name}>Parlons de votre rendez-vous</WhatsAppLink></div>
    <CategoryDiscovery current={category.id} />
  </div><FAQSection items={[category.faq]} /><BookingSection /></>;
}
