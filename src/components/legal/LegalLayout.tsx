import type { ReactNode } from "react";
import { Artwork } from "@/components/ui/Artwork";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { business } from "@/data/business";
import { legal } from "@/data/legal";
import { photography, type PhotoId } from "@/data/photography";

export interface LegalSection { id: string; title: string; content: ReactNode }
export function LegalLayout({ title, accent, introduction, image, sections }: { title: string; accent: string; introduction: string; image: PhotoId; sections: LegalSection[] }) {
  return <div className="site-container">
    <Breadcrumbs items={[{ label: title + " " + accent.replace(/\.$/, "") }]} />
    <header className="legal-hero"><div className="legal-hero-copy"><p className="eyebrow section-label">DOJA BEAUTY · Informations du site</p><h1>{title}<br /><span>{accent}</span></h1><p>{introduction}</p></div><Artwork src={photography[image].src} priority sizes="(min-width: 900px) 28vw, 90vw" /></header>
    <div className="legal-body"><nav className="legal-toc" aria-label="Sommaire de la page"><p className="eyebrow">Dans cette page</p><ol>{sections.map((section, index) => <li key={section.id}><a href={"#" + section.id}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.title}</a></li>)}</ol></nav>
      <div className="legal-sections">{sections.map((section, index) => <section key={section.id} id={section.id} className="legal-section" aria-labelledby={section.id + "-title"}><h2 id={section.id + "-title"}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>{section.title}</h2>{section.content}</section>)}
        <aside className="legal-contact"><p className="eyebrow section-label">Une question ?</p><h2>Échangeons directement.</h2><a className="text-link" href={"tel:" + business.phone.international}>{business.phone.display}</a><p className="small muted mt-4">Dernière mise à jour : {legal.updatedAt}.</p></aside>
      </div>
    </div>
  </div>;
}
