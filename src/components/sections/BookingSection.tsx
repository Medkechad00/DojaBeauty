import { WhatsAppLink } from "@/components/ui/WhatsAppLink";

const steps = [
  { title: "Votre envie", text: "Choisissez votre prestation dans la carte." },
  { title: "Un message", text: "Précisez votre demande sur WhatsApp. Le message reste modifiable." },
  { title: "On en parle", text: "L’institut vous répond et convient avec vous d’un créneau." },
];

export function BookingSection() {
  return <section className="section booking-section" aria-labelledby="booking-heading"><div className="site-container booking-layout">
    <div className="booking-top"><p className="eyebrow section-label">Votre rendez-vous commence ici</p><h2 id="booking-heading">Et si c’était<br />votre moment ?</h2><WhatsAppLink>Parlons de votre rendez-vous</WhatsAppLink></div>
    <ol className="booking-steps">{steps.map((step, index) => <li className="booking-step" key={step.title}><span className="step-number" aria-hidden="true">0{index + 1}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol>
  </div></section>;
}
