import React, { useState, useEffect } from 'react'
import Pantalla from './Pantalla'
import './App.css'

function App() {
  const [previousState, setpreviousState] = useState('')
  const [currentState, setcurrentState] = useState('')
  const [input, setInput] = useState('0')
  const [operador, setOperador] = useState(null)
  const [total, setTotal] = useState(false)

  const inputNumero = (e) => {
    if (currentState.includes('.') && e.target.innerText === '.') return

    if (total) {
      setpreviousState('')
    }

    if (currentState) {
      setcurrentState((pre) => pre + e.target.innerText)
    } else {
      setcurrentState(e.target.innerText)
    }
    setTotal(false)
  }

  useEffect(() => {
    setInput(currentState)
  }, [currentState])

  useEffect(() => {
    setInput('0')
  }, [])

  const resultadoFinal = (e) => {
    if (e?.target.innerText === '=') {
      setTotal(true)
    }

    let cal

    if (operador === '/') {
      cal = String(parseFloat(previousState) / parseFloat(currentState))
    } else if (operador === '+') {
      cal = String(parseFloat(previousState) + parseFloat(currentState))
    } else if (operador === 'X') {
      cal = String(parseFloat(previousState) * parseFloat(currentState))
    } else if (operador === '-') {
      cal = String(parseFloat(previousState) - parseFloat(currentState))
    } else {
      return
    }

    setInput('')
    setpreviousState(cal)
    setcurrentState('')
  }

  const tipoOperador = (e) => {
    setTotal(false)
    setOperador(e.target.innerText)
    if (currentState === '') return
    if (previousState !== '') {
      resultadoFinal()
    } else {
      setpreviousState(currentState)
      setcurrentState('')
    }
  }

  const masMenos = () => {
    if (currentState.charAt(0) === '-') {
      setcurrentState(currentState.substring(1))
    } else {
      setcurrentState(`- ${currentState}`)
    }
  }

  const percent = () => {
    if (previousState) {
      setcurrentState(String((parseFloat(currentState) / 100) * previousState))
    } else {
      setcurrentState(String(parseFloat(currentState) / 100))
    }
  }

  const reset = () => {
    setpreviousState('')
    setcurrentState('')
    setInput('0')
  }

  return (
    <div className="container">
      <div className="wrapper">
        <Pantalla input={input} previousState={previousState} />
        <div className="btn light-gray" onClick={reset} aria-hidden="true">
          AC
        </div>
        <div className="btn light-gray" onClick={percent} aria-hidden="true">
          %
        </div>
        <div className="btn light-gray" onClick={masMenos} aria-hidden="true">
          +/-
        </div>
        <div className="btn red" onClick={tipoOperador} aria-hidden="true">
          /
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          7
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          8
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          9
        </div>
        <div className="btn red" onClick={tipoOperador} aria-hidden="true">
          X
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          4
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          5
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          6
        </div>
        <div className="btn red" onClick={tipoOperador} aria-hidden="true">
          +
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          1
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          2
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          3
        </div>
        <div className="btn red" onClick={tipoOperador} aria-hidden="true">
          -
        </div>
        <div className="btn zero" onClick={inputNumero} aria-hidden="true">
          0
        </div>
        <div className="btn" onClick={inputNumero} aria-hidden="true">
          .
        </div>
        <div className="btn" onClick={resultadoFinal} aria-hidden="true">
          =
        </div>
      </div>
    </div>
  )
}

export default App
