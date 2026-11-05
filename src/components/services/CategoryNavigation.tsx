import Link from "next/link";
import { categories, categoryHref, type CategoryId } from "@/data/categories";

export function CategoryNavigation({ current }: { current: CategoryId }) {
  return (
    <nav aria-label="Catégories de prestations" className="category-switcher">
      <p className="eyebrow">Les collections</p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <Link href={categoryHref(category.id)} aria-current={current === category.id ? "page" : undefined}>
              <span aria-hidden="true">{category.number}</span>{category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
