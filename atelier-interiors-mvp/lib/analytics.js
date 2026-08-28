export function trackDesignEvent(eventName, details = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event: eventName, ...details })
  }
}