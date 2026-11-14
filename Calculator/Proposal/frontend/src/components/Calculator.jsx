import { useState } from 'react'
import { calculate } from '../api.js'

const OPERATOR_SYMBOLS = { '+': '+', '-': '−', '*': '×', '/': '÷' }

function formatResult(n) {
  if (Number.isInteger(n)) return String(n)
  return String(parseFloat(n.toPrecision(12)))
}

export default function Calculator({ onCalculated }) {
  const [current, setCurrent] = useState('0')
  const [firstOperand, setFirstOperand] = useState(null)
  const [operator, setOperator] = useState(null)
  const [overwrite, setOverwrite] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  const inputDigit = (digit) => {
    setError('')
    if (overwrite) {
      setCurrent(digit)
      setOverwrite(false)
    } else {
      setCurrent((c) => {
        if (c === '0' || c === 'Error') return digit
        if (c.length >= 15) return c
        return c + digit
      })
    }
  }

  const inputDot = () => {
    setError('')
    if (overwrite) {
      setCurrent('0.')
      setOverwrite(false)
    } else {
      setCurrent((c) => {
        if (c === 'Error') return '0.'
        if (c.includes('.')) return c
        return c + '.'
      })
    }
  }

  const evaluate = async (nextOperator) => {
    const second = parseFloat(current)
    if (firstOperand === null || operator === null || Number.isNaN(second)) return
    setBusy(true)
    setError('')
    try {
      const res = await calculate(firstOperand, operator, second)
      setFirstOperand(res.result)
      setCurrent(formatResult(res.result))
      setOperator(nextOperator)
      setOverwrite(true)
      if (onCalculated) onCalculated()
    } catch (err) {
      setError(err.message)
      setCurrent('Error')
      setFirstOperand(null)
      setOperator(null)
      setOverwrite(false)
    } finally {
      setBusy(false)
    }
  }

  const pressOperator = (op) => {
    setError('')
    if (firstOperand !== null && operator !== null && !overwrite) {
      evaluate(op)
    } else {
      setFirstOperand(parseFloat(current))
      setOperator(op)
      setOverwrite(true)
    }
  }

  const pressEquals = () => {
    if (firstOperand !== null && operator !== null && !overwrite) {
      evaluate(null)
    }
  }

  const pressClear = () => {
    setCurrent('0')
    setFirstOperand(null)
    setOperator(null)
    setOverwrite(false)
    setError('')
  }

  const pressDelete = () => {
    setError('')
    setCurrent((c) => {
      if (c === 'Error') return '0'
      if (c.length <= 1) return '0'
      return c.slice(0, -1)
    })
    setOverwrite(false)
  }

  const displayExpression =
    firstOperand !== null
      ? `${formatResult(firstOperand)} ${OPERATOR_SYMBOLS[operator] || ''}`
      : ''

  return (
    <section className="calculator" aria-label="Calculator">
      <div className="display" aria-live="polite">
        <span className="display-expression">{displayExpression}</span>
        <span className="display-value">{error || current}</span>
      </div>

      <div className="keypad">
        <button className="key key-utility" style={{ gridArea: 'clear' }} onClick={pressClear} disabled={busy}>C</button>
        <button className="key key-utility" style={{ gridArea: 'delete' }} onClick={pressDelete} disabled={busy}>⌫</button>
        <button className="key key-operator" style={{ gridArea: 'divide' }} onClick={() => pressOperator('/')} disabled={busy}>÷</button>
        <button className="key key-operator" style={{ gridArea: 'multiply' }} onClick={() => pressOperator('*')} disabled={busy}>×</button>

        <button className="key" style={{ gridArea: 'seven' }} onClick={() => inputDigit('7')} disabled={busy}>7</button>
        <button className="key" style={{ gridArea: 'eight' }} onClick={() => inputDigit('8')} disabled={busy}>8</button>
        <button className="key" style={{ gridArea: 'nine' }} onClick={() => inputDigit('9')} disabled={busy}>9</button>
        <button className="key key-operator" style={{ gridArea: 'subtract' }} onClick={() => pressOperator('-')} disabled={busy}>−</button>

        <button className="key" style={{ gridArea: 'four' }} onClick={() => inputDigit('4')} disabled={busy}>4</button>
        <button className="key" style={{ gridArea: 'five' }} onClick={() => inputDigit('5')} disabled={busy}>5</button>
        <button className="key" style={{ gridArea: 'six' }} onClick={() => inputDigit('6')} disabled={busy}>6</button>
        <button className="key key-operator" style={{ gridArea: 'add' }} onClick={() => pressOperator('+')} disabled={busy}>+</button>

        <button className="key" style={{ gridArea: 'one' }} onClick={() => inputDigit('1')} disabled={busy}>1</button>
        <button className="key" style={{ gridArea: 'two' }} onClick={() => inputDigit('2')} disabled={busy}>2</button>
        <button className="key" style={{ gridArea: 'three' }} onClick={() => inputDigit('3')} disabled={busy}>3</button>
        <button className="key key-equals" style={{ gridArea: 'equals' }} onClick={pressEquals} disabled={busy}>=</button>

        <button className="key" style={{ gridArea: 'zero' }} onClick={() => inputDigit('0')} disabled={busy}>0</button>
        <button className="key" style={{ gridArea: 'dot' }} onClick={inputDot} disabled={busy}>.</button>
      </div>
    </section>
  )
}
