export default function ChoiceCard({ selected, onClick, children, className = '', ...props }) {
  return <button type="button" className={`choice-card ${selected ? 'selected' : ''} ${className}`} onClick={onClick} aria-pressed={selected} {...props}>{children}</button>
}
