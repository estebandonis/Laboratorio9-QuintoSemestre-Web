import React from 'react'
import { NumericFormat } from "react-number-format"

import { styles } from './Pantalla.module.css'

const Pantalla = ({ input, previousState }) => {

  console.log(previousState.includes('-'))
  console.log('input', input)
  console.log('previous', previousState)

  let value
  if (input !== "" || input === "0"){
    value = input
  } else {
    value = previousState
  }

  return (
    <div className={styles}>
      
      {
        input.length <= 9 && !previousState.includes('-') ? <NumericFormat value={value} displayType={"text"} thousandSeparator={true} /> : <div>Error</div>
      }
      
    </div>
  )
}

/* Pantalla.propTypes = {
  valor: PropTypes.string,
} */

export default Pantalla
