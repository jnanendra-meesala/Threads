import { useCallback, useState } from 'react'
import Calculator from './components/Calculator.jsx'
import History from './components/History.jsx'
import { getHistory } from './api.js'

export default function App() {
  const [history, setHistory] = useState([])

  const refreshHistory = useCallback(async () => {
    try {
      const data = await getHistory()
      setHistory(data.calculations)
    } catch {
      setHistory([])
    }
  }, [])

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Simple Calculator</h1>
      </header>
      <main className="layout">
        <Calculator onCalculated={refreshHistory} />
        <History history={history} onRefresh={refreshHistory} />
      </main>
    </div>
  )
}
