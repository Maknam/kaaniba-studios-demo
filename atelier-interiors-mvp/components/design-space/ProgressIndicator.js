import { stepLabels } from '../../lib/designRequestConfig'

export default function ProgressIndicator({ step }) {
  return <div className="wizard-progress" aria-label={`Step ${step + 1} of 5`}><div className="progress-top"><span>Step {step + 1} of 5</span><span>{stepLabels[step]}</span></div><div className="progress-track"><span style={{ width: `${((step + 1) / 5) * 100}%` }} /></div><div className="progress-labels">{stepLabels.map((label, index) => <span className={index <= step ? 'active' : ''} key={label}>{label}</span>)}</div></div>
}
