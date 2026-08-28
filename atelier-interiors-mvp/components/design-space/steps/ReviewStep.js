import { designRequestConfig } from '../../../lib/designRequestConfig'
import StepShell from '../StepShell'

export default function ReviewStep({ form, onEdit }) {
  const room = designRequestConfig.roomTypes.find((item) => item.value === form.roomType)
  const styles = form.styles.map((value) => designRequestConfig.styles.find((item) => item.value === value)?.label).join(' + ')
  const budget = designRequestConfig.budgets.find((item) => item.value === form.budget)?.label
  const rows = [['Space', room?.label === 'Other' ? form.otherRoom : room?.label, 0], ['Style', styles, 1], ['Budget', budget, 2], ['Timeline', form.timeframe, 2], ['Photos', `${form.images.length} uploaded`, 3], ['Name', form.fullName, 4], ['Email', form.email, 4], ['Phone', form.phone, 4]]

  return <StepShell eyebrow="One last look" title="Ready to make your space feel like you?"><div className="review-card">{rows.map(([label, value, editStep]) => <div className="review-row" key={label}><span>{label}</span><strong>{value || 'Not provided'}</strong><button type="button" onClick={() => onEdit(editStep)}>Edit</button></div>)}</div></StepShell>
}
