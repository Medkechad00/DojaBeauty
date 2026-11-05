import Link from "next/link";
import { categories, categoryHref, type CategoryId } from "@/data/categories";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";

export function CategoryDiscovery({ current }: { current: CategoryId }) {
  return (
    <section className="category-discovery" aria-labelledby="discovery-heading">
      <div className="discovery-heading">
        <p className="eyebrow">D’autres envies ?</p>
        <h2 id="discovery-heading">À découvrir aussi</h2>
      </div>
      <div className="discovery-grid">
        {categories.filter(({ id }) => id !== current).map((category, index) => (
          <Link className={`discovery-card photo-panel discovery-${category.id}`} href={categoryHref(category.id)} key={category.id}>
            <Artwork src={category.image} alt="" sizes={index === 0 ? "(min-width: 640px) 55vw, 100vw" : "(min-width: 640px) 40vw, 100vw"} />
            <div className="discovery-card-content">
              <span className="discovery-index" aria-hidden="true">{category.number} / La collection</span>
              <h3>{category.name}</h3>
              <span className="discovery-explore">Explorer la collection <Icon name="arrow" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
