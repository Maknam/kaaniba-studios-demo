import { NextResponse } from 'next/server'
import { validateDesignRequest } from '../../../lib/designRequestValidation'

export async function POST(request) {
  try {
    const payload = await request.json()
    const validationError = validateDesignRequest(payload)
    if (validationError) return NextResponse.json({ error: validationError }, { status: 400 })

    const reference = `AL-${new Date().getFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`
    const lead = { ...payload, images: (payload.images || []).map(({ name, type, size }) => ({ name, type, size })), reference, submittedAt: new Date().toISOString() }
    console.info('[design-request]', lead)

    // Future integrations can send this lead to a CRM, Supabase, Resend, or a webhook here.
    return NextResponse.json({ reference }, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'We could not submit your request. Please try again.' }, { status: 500 })
  }
}