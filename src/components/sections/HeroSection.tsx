import Link from "next/link";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { business } from "@/data/business";
import { photography } from "@/data/photography";
export function HeroSection() {
  return <section className="editorial-hero site-container" aria-labelledby="hero-heading">
    <div className="hero-headline"><p className="eyebrow">Institut de beauté · Marrakech</p><h1 id="hero-heading">Un moment<br /><span>bien à vous.</span></h1></div>
    <div className="hero-invitation"><p>Une coupe qui vous ressemble.<br />Une couleur, un regard, un détail.<br />La beauté commence par vos envies.</p><div className="actions"><WhatsAppLink>Prendre rendez-vous</WhatsAppLink><Link href="/prestations" className="text-link">Découvrir les prestations <Icon name="arrow" /></Link></div></div>
    <div className="hero-composition"><Link href="/prestations/esthetique-maquillage" className="hero-frame hero-frame-main"><Artwork src={photography.hero.src} priority sizes="(min-width: 900px) 46vw, 68vw" /><span>Visage & maquillage <Icon name="arrow" /></span></Link><Link href="/prestations/coiffure" className="hero-frame hero-frame-hair"><Artwork src={photography.hairDetail.src} sizes="(min-width: 900px) 26vw, 32vw" /><span>Coiffure <Icon name="arrow" /></span></Link><div className="hero-detail"><span className="eyebrow">Le sens du détail.</span><Link href="/prestations/onglerie" className="hero-frame"><Artwork src={photography.nailDetail.src} sizes="(min-width: 900px) 20vw, 30vw" /><span>Onglerie <Icon name="arrow" /></span></Link></div></div>
    <div className="hero-location"><span><Icon name="pin" />{business.address.locationLabel}</span><a href="#categories-heading" className="text-link">À chaque envie, son soin <Icon name="arrow" /></a></div>
  </section>;
}
