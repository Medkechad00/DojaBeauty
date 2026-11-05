import Link from "next/link";
import { photography } from "@/data/photography";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { BookingSection } from "@/components/sections/BookingSection";
import { LocationSection } from "@/components/sections/LocationSection";

export const metadata = pageMetadata("L’institut à Sidi Moussa", "Découvrez DOJA BEAUTY, institut de beauté à Sidi Moussa sur la route de l’Ourika. Coiffure, onglerie et mise en beauté : préparez votre visite.", "/institut");

export default function InstitutePage() {
  return <><div className="site-container"><Breadcrumbs items={[{ label: "L’institut" }]} /><div className="page-intro about-intro"><div><p className="eyebrow section-label">Bienvenue chez DOJA BEAUTY</p><h1>La beauté<br />au quotidien.</h1></div><p>À Sidi Moussa, sur la route de l’Ourika, DOJA BEAUTY réunit coiffure, onglerie, épilation et mise en beauté. Découvrez la carte et échangez directement avec l’institut.</p></div>
    <div className="about-spread"><Artwork src={photography.treatment.src} priority sizes="(min-width: 900px) 48vw, 92vw" /><div className="about-copy"><Artwork src={photography.legalDetail.src} sizes="(min-width: 900px) 28vw, 92vw" /><p className="eyebrow section-label">Vos envies, simplement</p><h2>Votre visite commence<br />par une conversation.</h2><p>Une prestation vous intéresse ? Un message suffit pour poser vos questions, préciser vos envies et connaître les disponibilités. Retrouvez les prix et les durées sur la carte des prestations.</p><p>Pour un entretien régulier ou une occasion particulière, parcourez les catégories et choisissez le point de départ de votre demande.</p><div className="actions mt-8"><Link href="/prestations" className="button">Découvrir la carte <Icon name="arrow" /></Link><WhatsAppLink variant="text">Nous écrire</WhatsAppLink></div></div></div>
  </div><BookingSection /><LocationSection /></>;
}
