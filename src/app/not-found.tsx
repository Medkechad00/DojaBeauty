import Link from "next/link";
import { Icon } from "@/components/ui/Icon";

export default function NotFound() {
  return <div className="site-container not-found"><p className="eyebrow">Page introuvable · 404</p><h1>Reprenons par ici.</h1><p>Cette page n’existe pas ou son adresse a changé. Retrouvez nos prestations ou revenez à l’accueil.</p><div className="actions"><Link href="/prestations" className="button">Voir les prestations <Icon name="arrow" /></Link><Link href="/" className="text-link">Retour à l’accueil</Link></div></div>;
}
