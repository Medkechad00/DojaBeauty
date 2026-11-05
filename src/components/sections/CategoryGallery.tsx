"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import type { Photo } from "@/data/photography";
import { Icon } from "@/components/ui/Icon";
export function CategoryGallery({ images, title, categoryId }: { images: Photo[]; title: string; categoryId: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const photo = images[active];
  if (!images.length) return null;
  const next = (direction: number) => setActive((current) => (current + direction + images.length) % images.length);
  return <section className={"category-gallery gallery-" + categoryId} aria-labelledby={categoryId + "-gallery-heading"}>
    <div className="gallery-heading"><div><p className="eyebrow section-label">Les gestes, les détails</p><h2 id={categoryId + "-gallery-heading"}>{title}</h2></div><p>Un regard sur les gestes et les détails de cette collection.</p></div>
    <div className="category-gallery-grid">{images.map((image, index) => <button type="button" className="gallery-image" key={image.src} onClick={() => { setActive(index); dialog.current?.showModal(); }} aria-label={"Agrandir : " + image.alt}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 900px) 32vw, (min-width: 640px) 45vw, 90vw" style={{ objectFit: "cover", objectPosition: image.position }} /><span className="gallery-expand" aria-hidden="true"><Icon name="external" /></span></button>)}</div>
    <dialog ref={dialog} className="gallery-dialog" aria-labelledby={categoryId + "-photo-caption"} onKeyDown={(event) => {
        if (event.key === "Tab") {
          const controls = event.currentTarget.querySelectorAll<HTMLButtonElement>("button");
          const first = controls[0], last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
          else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
        }
        if (event.key === "ArrowRight") { event.preventDefault(); next(1); } if (event.key === "ArrowLeft") { event.preventDefault(); next(-1); } }} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="lightbox-shell"><div className="lightbox-top"><span className="eyebrow">{active + 1} / {images.length}</span><button type="button" onClick={() => dialog.current?.close()} aria-label="Fermer la photographie" autoFocus><Icon name="close" /></button></div><div className="lightbox-image"><Image src={photo.src} alt={photo.alt} fill sizes="90vw" style={{ objectFit: "contain" }} /></div><div className="lightbox-bottom"><button type="button" onClick={() => next(-1)} aria-label="Photographie précédente">←</button><p id={categoryId + "-photo-caption"} aria-live="polite">{photo.alt}</p><button type="button" onClick={() => next(1)} aria-label="Photographie suivante">→</button></div></div>
    </dialog>
  </section>;
}
