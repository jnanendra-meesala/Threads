const BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (res.status === 204) return null
  const data = await res.json().catch(() => null)
  if (!res.ok) {
    const message = data?.error?.message || 'Something went wrong'
    const err = new Error(message)
    err.code = data?.error?.code || 'UNKNOWN'
    throw err
  }
  return data
}

export function calculate(first_number, operator, second_number) {
  return request('/api/calculate', {
    method: 'POST',
    body: JSON.stringify({ first_number, operator, second_number }),
  })
}

export function getHistory() {
  return request('/api/history')
}

export function deleteCalculation(id) {
  return request(`/api/history/${id}`, { method: 'DELETE' })
}

export function clearHistory() {
  return request('/api/history', { method: 'DELETE' })
}
