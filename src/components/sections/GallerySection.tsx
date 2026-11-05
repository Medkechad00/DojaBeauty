import { business } from "@/data/business";
import { Artwork } from "@/components/ui/Artwork";
import { Icon } from "@/components/ui/Icon";
import { photography } from "@/data/photography";

export function GallerySection() {
  return <section className="gallery-section" aria-labelledby="gallery-heading">
    <Artwork src={photography.skincareDetail.src} sizes="100vw" />
    <div className="gallery-copy"><p className="eyebrow">Un rendez-vous avec vous</p><h2 id="gallery-heading">Prendre le temps.<br />Se retrouver.</h2><p>Pour découvrir une réalisation de DOJA BEAUTY, retrouvez la vidéo partagée sur Instagram.</p><a href={business.instagram.url} className="button button-light" target="_blank" rel="noopener noreferrer">{business.instagram.label}<Icon name="external" /></a></div>
  </section>;
}
