import type { FAQ } from "@/data/faqs";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export function FAQSection({ items = faqs }: { items?: FAQ[] }) {
  return <section className="section" aria-labelledby="faq-heading"><div className="site-container faq-layout">
    <div><p className="eyebrow section-label">Avant votre visite</p><h2 id="faq-heading">Quelques réponses<br />à vos questions.</h2><Link href="/contact" className="text-link mt-5">Nous contacter <Icon name="arrow" /></Link></div>
    <div className="faq-list">{items.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
  </div></section>;
}
