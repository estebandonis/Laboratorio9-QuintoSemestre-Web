import React from 'react'
import { render, screen } from '@testing-library/react'

import Pantalla from './Pantalla'

describe('Eye component', () => {
  it('Renders correctly', () => {
    render(<Pantalla input={1} previousState={0} />)
  })

  it('Throws error when number over 9 chars', () => {
    render(<Pantalla input={98839482984} previousState={0} />)

    const element = screen.getByText('Error')
    expect(element).toBeInTheDocument()
  })

  it('Throws error when result number is negative', () => {
    render(<Pantalla input={1} previousState={-12} />)

    const element = screen.getByText('Error')
    expect(element).toBeInTheDocument()
  })
})
