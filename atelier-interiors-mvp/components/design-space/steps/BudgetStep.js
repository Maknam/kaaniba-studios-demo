import { designRequestConfig } from '../../../lib/designRequestConfig'
import ChoiceCard from '../ChoiceCard'
import StepShell from '../StepShell'

export default function BudgetStep({ form, update }) {
  return <StepShell eyebrow="The investment" title="What budget are you working with?"><div className="budget-grid">{designRequestConfig.budgets.map((budget) => <ChoiceCard key={budget.value} selected={form.budget === budget.value} onClick={() => update({ budget: budget.value })}><span className="budget-symbol" aria-hidden="true">{budget.value === 'not-sure' ? '?' : '$'}</span><span>{budget.label}</span></ChoiceCard>)}</div><div className="timeframe-block"><p className="field-title">When would you like to start?</p><div className="timeframe-grid">{designRequestConfig.timeframes.map((timeframe) => <ChoiceCard key={timeframe} selected={form.timeframe === timeframe} onClick={() => update({ timeframe })}>{timeframe}</ChoiceCard>)}</div></div></StepShell>
}
