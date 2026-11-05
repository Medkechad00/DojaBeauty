import Link from "next/link";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { photography } from "@/data/photography";

export function InstituteSection() {
  return <section className="section institute-section" aria-labelledby="institute-heading"><div className="site-container institute-editorial">
    <div className="institute-title"><p className="eyebrow section-label">03 / L’institut</p><h2 id="institute-heading">Une adresse.<br />Toutes vos envies.</h2></div>
    <div className="institute-photos"><Artwork src={photography.hairColourDetail.src} className="institute-main" sizes="(min-width: 900px) 40vw, 80vw" /><Artwork src={photography.brows.src} className="institute-detail" sizes="(min-width: 900px) 20vw, 40vw" /></div>
    <div className="institute-copy"><span className="eyebrow">Sidi Moussa · Marrakech Sud</span><p>DOJA BEAUTY réunit coiffure, onglerie, épilation et mise en beauté sur la route de l’Ourika.</p><p>Un lieu à découvrir, une envie à partager. Votre visite commence par une conversation avec l’institut.</p><Link href="/institut" className="text-link">Faisons connaissance <Icon name="arrow" /></Link></div>
  </div></section>;
}
