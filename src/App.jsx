import { useState, useEffect } from 'react'
import { Pantalla } from '@components'
import './App.css'

function App() {

  const [previousState, setpreviousState] = useState("")
  const [currentState, setcurrentState] = useState("")
  const [input, setInput] = useState("0")
  const [operador, setOperador] = useState(null)
  const [total, setTotal] = useState(false)

  const inputNumero = (e) => {
    if (currentState.includes(".") && e.target.innerText === ".") return

    if (total) {
      setpreviousState("")
    }

    currentState ? setcurrentState((pre) => pre + e.target.innerText) : setcurrentState(e.target.innerText)
    setTotal(false)
  }

  useEffect(() => {
    setInput(currentState)
  }, [currentState])

  useEffect(() => {
    setInput("0")
  }, [])

  const tipoOperador = (e) => {
    setTotal(false)
    setOperador(e.target.innerText)
    if (currentState === "") return
    if (previousState !== "") {
      resultadoFinal()
    } else {
      setpreviousState(currentState)
      setcurrentState("")
    }
  }

  const resultadoFinal = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true)
    }

    let cal

    if (operador === "/") {
      cal = String(parseFloat(previousState) / parseFloat(currentState))
    } else if (operador === "+") {
      cal = String(parseFloat(previousState) + parseFloat(currentState))
    } else if (operador === "X") {
      cal = String(parseFloat(previousState) * parseFloat(currentState))
    } else if (operador === "-") {
      cal = String(parseFloat(previousState) - parseFloat(currentState))
    } else {
      return
    }

    setInput("")
    setpreviousState(cal)
    setcurrentState("")
  }

  const masMenos = () => {
    if (currentState.charAt(0) === "-") {
      setcurrentState(currentState.substring(1))
    } else {
      setcurrentState("-" + currentState)
    }
  }

  const percent = () => {
    previousState
      ? setcurrentState(String((parseFloat(currentState) / 100) * previousState))
      : setcurrentState(String(parseFloat(currentState) / 100))
  }

  const reset = () => {
    setpreviousState("")
    setcurrentState("")
    setInput("0")
  }

  return (
    <div className='container'>
      <div className='wrapper'>
        <Pantalla input={input} previousState={previousState} />
        <div className='btn light-gray' onClick={reset}>
          AC
        </div>
        <div className='btn light-gray' onClick={percent}>
          %
        </div>
        <div className='btn light-gray' onClick={masMenos}>
          +/-
        </div>
        <div className='btn red' onClick={tipoOperador}>
          /
        </div>
        <div className='btn' onClick={inputNumero}>
          7
        </div>
        <div className='btn' onClick={inputNumero}>
          8
        </div>
        <div className='btn' onClick={inputNumero}>
          9
        </div>
        <div className='btn red' onClick={tipoOperador}>
          X
        </div>
        <div className='btn' onClick={inputNumero}>
          4
        </div>
        <div className='btn' onClick={inputNumero}>
          5
        </div>
        <div className='btn' onClick={inputNumero}>
          6
        </div>
        <div className='btn red' onClick={tipoOperador}>
          +
        </div>
        <div className='btn' onClick={inputNumero}>
          1
        </div>
        <div className='btn' onClick={inputNumero}>
          2
        </div>
        <div className='btn' onClick={inputNumero}>
          3
        </div>
        <div className='btn red' onClick={tipoOperador}>
          -
        </div>
        <div className='btn zero' onClick={inputNumero}>
          0
        </div>
        <div className='btn' onClick={inputNumero}>
          .
        </div>
        <div className='btn' onClick={resultadoFinal}>
          =
        </div>
      </div>
    </div>
  )
}

export default App
