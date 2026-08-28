import { designRequestConfig } from '../../../lib/designRequestConfig'
import ChoiceCard from '../ChoiceCard'
import StepShell from '../StepShell'

const icons = { sofa: '▱', bed: '⌁', kitchen: '♢', dining: '○', office: '□', bath: '≈', commercial: '▥', home: '⌂', other: '+' }

export default function RoomStep({ form, update }) {
  return <StepShell eyebrow="The first detail" title="What space would you like us to design?"><div className="room-grid">{designRequestConfig.roomTypes.map((room) => <ChoiceCard key={room.value} selected={form.roomType === room.value} onClick={() => update({ roomType: room.value })}><span className="choice-icon" aria-hidden="true">{icons[room.icon]}</span><span>{room.label}</span></ChoiceCard>)}</div>{form.roomType === 'other' && <label className="wizard-field compact-field"><span>Tell us about the space</span><input value={form.otherRoom} onChange={(event) => update({ otherRoom: event.target.value })} placeholder="e.g. Rooftop terrace" autoFocus /></label>}</StepShell>
}
