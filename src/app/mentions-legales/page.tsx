import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { business } from "@/data/business";
import { legal } from "@/data/legal";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";

export const metadata = pageMetadata("Mentions légales", "Informations sur DOJA BEAUTY, ses coordonnées, les contenus du site et les modalités de contact de l’institut à Sidi Moussa, Marrakech.", "/mentions-legales", false);

export default function LegalPage() {
  const sections: LegalSection[] = [
    { id: "editeur", title: "Éditeur du site", content: <p>Ce site présente l’activité de l’institut {business.name}. Pour toute question concernant les informations publiées, vous pouvez contacter l’institut aux coordonnées indiquées ci-dessous.</p> },
    { id: "nom-commercial", title: "Nom commercial", content: <p>{business.name} est le nom commercial présenté sur ce site.</p> },
    ...(legal.operator ? [{ id: "identification", title: "Identification juridique de l’exploitant", content: <dl><div><dt>Identité de l’exploitant</dt><dd>{legal.operator.name}</dd></div>{legal.operator.legalForm && <div><dt>Forme juridique</dt><dd>{legal.operator.legalForm}</dd></div>}{legal.operator.registeredAddress && <div><dt>Siège social</dt><dd>{legal.operator.registeredAddress}</dd></div>}{(["rc", "ice", "if"] as const).map((key) => legal.operator?.[key] ? <div key={key}><dt>{key.toUpperCase()}</dt><dd>{legal.operator[key]}</dd></div> : null)}</dl> }] : []),
    { id: "adresse", title: "Adresse de l’institut", content: <address>{business.address.full}</address> },
    { id: "coordonnees", title: "Coordonnées", content: <><p>Téléphone : <a href={"tel:" + business.phone.international}>{business.phone.display}</a>.</p><p>Vous pouvez également contacter {business.name} sur WhatsApp au même numéro. Un échange avec l’institut est nécessaire pour convenir d’un rendez-vous.</p>{legal.email && <p>E-mail : <a href={"mailto:" + legal.email}>{legal.email}</a>.</p>}</> },
    ...(legal.publicationDirector ? [{ id: "publication", title: "Directeur de la publication", content: <p>{legal.publicationDirector}</p> }] : []),
    ...(legal.host ? [{ id: "hebergement", title: "Hébergement du site", content: <><p>{legal.host.name}</p><address>{legal.host.address}</address><p>{legal.host.contact}</p></> }] : []),
    { id: "propriete", title: "Propriété intellectuelle", content: <><p>Les textes, photographies, éléments graphiques et signes distinctifs présentés sur ce site sont protégés par les droits applicables. Leur consultation ne confère aucun droit de reproduction, de modification ou d’exploitation.</p><p>Les droits attachés aux contenus appartiennent à leurs titulaires respectifs. Toute réutilisation doit respecter ces droits et les autorisations ou licences applicables. Pour une demande concernant un contenu, contactez l’institut.</p></> },
    { id: "informations", title: "Informations et rendez-vous", content: <><p>Le site permet de consulter les prestations, leurs tarifs et leurs durées. Les tarifs indiqués « à partir de » dépendent de la longueur, de la densité des cheveux et du travail à réaliser. Ces éléments sont précisés lors de votre échange avec l’institut.</p><p>Les durées servent à préparer votre visite et peuvent varier selon la prestation. Un bouton de contact ouvre WhatsApp ; il ne réserve pas de créneau et ne confirme pas de rendez-vous.</p><p>Si vous repérez une erreur ou une information qui nécessite une précision, merci de la signaler à l’institut. Les informations du site peuvent être actualisées.</p></> },
    { id: "liens", title: "Liens externes", content: <><p>Le site propose des liens vers WhatsApp, Google Maps et une vidéo Instagram. Ces services sont exploités par des tiers et appliquent leurs propres conditions d’utilisation et politiques de confidentialité.</p><p>Le contenu et la disponibilité de ces services ne sont pas contrôlés par {business.name}. Pour comprendre le fonctionnement de ces liens, consultez la <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.</p></> },
    { id: "contact", title: "Contact", content: <p>Pour toute demande relative au site ou à ses contenus, appelez le <a href={"tel:" + business.phone.international}>{business.phone.display}</a> ou consultez la <Link href="/contact">page Contact et itinéraire</Link>.</p> },
  ];
  return <LegalLayout title="Mentions" accent="légales." introduction="Les informations utiles pour identifier l’institut, comprendre l’usage du site et nous contacter." image="legalDetail" sections={sections} />;
}
