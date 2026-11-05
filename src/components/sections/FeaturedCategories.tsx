import Link from "next/link";
import { categories, categoryHref } from "@/data/categories";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";

export function FeaturedCategories() {
  return <section className="section categories-section" aria-labelledby="categories-heading"><div className="site-container">
    <div className="section-top"><div><p className="eyebrow section-label">01 / Les prestations</p><h2 id="categories-heading">À chaque envie,<br />son expression.</h2></div><div className="section-aside"><p>Un nouveau style. Un détail qui change tout. Trouvez votre prochain moment beauté.</p><Link href="/prestations" className="text-link">Toute la carte <Icon name="arrow" /></Link></div></div>
    <div className="category-grid">{categories.map((category) => <Link href={categoryHref(category.id)} className="category-card" key={category.id}><div className="category-photo"><Artwork src={category.image} sizes="(min-width: 1300px) 620px, (min-width: 900px) 48vw, 92vw" /><span className="category-number" aria-hidden="true">{category.number}</span><span className="category-open" aria-hidden="true"><Icon name="external" /></span></div><div className="category-card-title"><h3>{category.name}</h3><p className="category-description">{category.shortDescription}</p></div></Link>)}</div>
  </div></section>;
}
