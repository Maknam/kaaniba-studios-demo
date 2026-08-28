import { designRequestConfig } from '../../../lib/designRequestConfig'
import { trackDesignEvent } from '../../../lib/analytics'
import ChoiceCard from '../ChoiceCard'
import StepShell from '../StepShell'

export default function StyleStep({ form, update }) {
  function toggleStyle(value) {
    const styles = value === 'not-sure' ? ['not-sure'] : form.styles.includes(value) ? form.styles.filter((style) => style !== value) : form.styles.filter((style) => style !== 'not-sure').concat(value).slice(-2)
    update({ styles })
    trackDesignEvent('style_selected', { style: value })
  }

  return <StepShell eyebrow="Your point of view" title="What style feels most like you?"><p className="step-note">Choose up to two directions. We’ll help refine the details together.</p><div className="style-grid">{designRequestConfig.styles.map((style) => <ChoiceCard key={style.value} selected={form.styles.includes(style.value)} onClick={() => toggleStyle(style.value)} className="style-card"><span className="style-image" style={{ backgroundImage: `url('${style.image}')` }} /><span className="style-name">{style.label}</span><span className="select-dot" aria-hidden="true">{form.styles.includes(style.value) ? '✓' : '+'}</span></ChoiceCard>)}</div></StepShell>
}
