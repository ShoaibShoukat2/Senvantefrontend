const base = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export async function submitInquiry(payload) {
  let response
  try {
    response = await fetch(`${base}/api/inquiries/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    const error = new Error('The company server is not reachable right now.')
    error.offline = true
    throw error
  }

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    const error = new Error(data.detail || 'The note could not be saved.')
    error.fields = data.errors || {}
    throw error
  }
  return data
}
