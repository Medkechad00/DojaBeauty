"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Icon } from "@/components/ui/Icon";
import { Artwork } from "@/components/ui/Artwork";
import { business } from "@/data/business";
import { photography } from "@/data/photography";

export function Navigation() {
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => dialog.current?.close();
  const openMenu = (instant: boolean) => {
    if (dialog.current) dialog.current.dataset.instant = String(instant);
    dialog.current?.showModal();
    setIsOpen(true);
  };
  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const closeOnDesktop = () => { if (media.matches) dialog.current?.close(); };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => { dialog.current?.close(); }, [pathname]);

  return <>
    <nav aria-label="Navigation principale" className="desktop-nav">{navigation.map(({ href, label }) => <Link href={href} key={href} className="nav-link" aria-current={isCurrent(href) ? "page" : undefined}>{label}</Link>)}</nav>
    <button type="button" className="mobile-menu-trigger" onClick={(event) => openMenu(event.detail === 0)} aria-label="Ouvrir le menu" aria-expanded={isOpen} aria-controls="mobile-navigation" aria-haspopup="dialog"><Icon name="menu" /></button>
    <dialog id="mobile-navigation" ref={dialog} className="mobile-menu-dialog" aria-labelledby="mobile-menu-title" onClose={() => setIsOpen(false)} onCancel={(event) => { event.currentTarget.dataset.instant = "true"; }} onKeyDown={(event) => {
      if (event.key !== "Tab") return;
      const controls = event.currentTarget.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>("button, a[href]");
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }}>
      <div className="menu-sheet">
        <div className="menu-top"><span className="wordmark-name">{business.name}</span><button type="button" className="menu-close" onClick={closeMenu} aria-label="Fermer le menu" autoFocus><Icon name="close" /></button></div>
        <div className="menu-explore"><h2 id="mobile-menu-title" className="eyebrow">À chaque envie, son moment.</h2>
          <nav aria-label="Navigation mobile" className="menu-links">{navigation.map(({ href, label }, index) => <Link key={href} href={href} onClick={closeMenu} aria-current={isCurrent(href) ? "page" : undefined} className="menu-link"><span className="menu-index" aria-hidden="true">0{index + 1}</span><span className="menu-link-label">{href === "/prestations" ? <>Prestations<small>& tarifs</small></> : label}</span><Icon name="external" /></Link>)}</nav>
        </div>
        <div className="menu-bottom"><div className="menu-invitation"><Artwork src={photography.nails.src} sizes="100px" /><div><p className="eyebrow">Et si on en parlait ?</p><p className="menu-invitation-title">Votre prochain<br />moment beauté.</p></div></div><WhatsAppLink className="button-accent">Parlons de votre rendez-vous</WhatsAppLink><p className="menu-location"><Icon name="pin" />{business.address.locationLabel}</p></div>
      </div>
    </dialog>
  </>;
}
