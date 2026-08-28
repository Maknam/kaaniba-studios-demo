export default function StepShell({ eyebrow, title, note, children }) {
  return <section className="wizard-step"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{note && <p className="step-note">{note}</p>}{children}</section>
}
