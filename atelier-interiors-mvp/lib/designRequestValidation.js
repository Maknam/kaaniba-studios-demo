import { designRequestConfig } from './designRequestConfig'

export function validateDesignRequest(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return 'Invalid request payload.'
  const required = ['roomType', 'styles', 'budget', 'timeframe', 'fullName', 'email', 'phone']
  const missing = required.filter((field) => !payload[field] || (Array.isArray(payload[field]) && payload[field].length === 0))
  if (!payload.consent) missing.push('consent')
  if (payload.roomType === 'other' && !payload.otherRoom?.trim()) missing.push('otherRoom')
  if (payload.email && !/^\S+@\S+\.\S+$/.test(payload.email)) return 'Please provide a valid email address.'
  if (missing.length) return `Missing required field: ${missing[0]}.`
  if (!designRequestConfig.roomTypes.some(({ value }) => value === payload.roomType)) return 'Please provide a valid room type.'
  if (!Array.isArray(payload.styles) || payload.styles.length > 2 || payload.styles.some((value) => !designRequestConfig.styles.some((style) => style.value === value))) return 'Please provide one or two valid styles.'
  if (!designRequestConfig.budgets.some(({ value }) => value === payload.budget)) return 'Please provide a valid budget.'
  if (!designRequestConfig.timeframes.includes(payload.timeframe)) return 'Please provide a valid timeframe.'
  if (!['WhatsApp', 'Phone', 'Email'].includes(payload.preferredContactMethod)) return 'Please provide a valid contact method.'
  if (payload.images && (!Array.isArray(payload.images) || payload.images.length > 5)) return 'Please provide no more than 5 images.'
  return null
}
