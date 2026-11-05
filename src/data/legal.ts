// Optional fields are published only after the operator supplies verified details.
// See LEGAL_INFORMATION_TO_CONFIRM.md before production.
export interface LegalInformation {
  status: "draft" | "approved";
  updatedAt: string;
  operator?: { name: string; legalForm?: string; registeredAddress?: string; rc?: string; ice?: string; if?: string };
  publicationDirector?: string;
  email?: string;
  host?: { name: string; address: string; contact: string; privacyUrl?: string; technicalLogs?: string };
}
export const legal: LegalInformation = {
  status: "draft",
  updatedAt: "4 novembre 2026",
};
export const privacySources = {
  conditions: "https://www.cndp.ma/conditions/",
  laws: "https://www.cndp.ma/textes-et-lois/",
  rights: "https://www.cndp.ma/vos-droits-en-matiere-de-protection-des-donnees-a-caractere-personnel/",
  rightsLeaflet: "https://www.cndp.ma/wp-content/uploads/2023/01/fiche_CNDP_fr.pdf",
  complaint: "https://www.cndp.ma/deposer-une-plainte/",
} as const;
