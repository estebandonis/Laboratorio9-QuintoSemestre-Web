import React from 'react'
import { NumericFormat } from 'react-number-format'
import PropTypes from 'prop-types'

import { styles } from './Pantalla.module.css'

function Pantalla({ input, previousState }) {
  console.log('input', input)
  console.log('previs', previousState)
  
  let value
  if (input !== '' || input === '0') {
    value = input
  } else {
    value = previousState
  }

  return (
    <div className={styles}>

      {
        input.length <= 9 && !previousState.includes('-') && previousState.length <= 9 ? <NumericFormat value={value} displayType="text" thousandSeparator /> : <div>Error</div>
      }

    </div>
  )
}

Pantalla.propTypes = {
  input: PropTypes.string,
  previousState: PropTypes.string,
}

Pantalla.defaultProps = {
  input: PropTypes.string,
  previousState: PropTypes.string,
}

export default Pantalla
