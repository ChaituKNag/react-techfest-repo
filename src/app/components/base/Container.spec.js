import React from 'react'
import renderer from 'react-test-renderer'

import { Container } from './Container'

describe('<Container />', () => {
  it('renders Container component', () => {
    const component = renderer.create(<Container />).toJSON()

    expect(component).toBeDefined()
    expect(component.type).toBe('div')
  })
})
