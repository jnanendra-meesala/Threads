import { useEffect } from 'react'
import { clearHistory, deleteCalculation } from '../api.js'

const OPERATOR_SYMBOLS = { '+': '+', '-': '−', '*': '×', '/': '÷' }

function formatNumber(n) {
  if (Number.isInteger(n)) return String(n)
  return String(parseFloat(n.toPrecision(12)))
}

function describe(row) {
  const op = OPERATOR_SYMBOLS[row.operator] || row.operator
  return `${formatNumber(row.first_number)} ${op} ${formatNumber(row.second_number)} = ${formatNumber(row.result)}`
}

export default function History({ history, onRefresh }) {
  useEffect(() => {
    onRefresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = async (id) => {
    await deleteCalculation(id)
    onRefresh()
  }

  const handleClear = async () => {
    await clearHistory()
    onRefresh()
  }

  return (
    <section className="history" aria-label="Calculation history">
      <div className="history-header">
        <h2>History</h2>
        {history.length > 0 && (
          <button className="clear-all" onClick={handleClear}>Clear all</button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="history-empty">No calculations yet. Try one on the calculator.</p>
      ) : (
        <ul className="history-list">
          {history.map((row) => (
            <li key={row.id} className="history-item">
              <span className="history-expression">{describe(row)}</span>
              <button
                className="history-delete"
                onClick={() => handleDelete(row.id)}
                aria-label={`Delete ${describe(row)}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
