import React from 'react'
import renderer from 'react-test-renderer'

import { Button } from './Button'
import { PRIMARY, SECONDARY } from '../../../constants/properties'

describe('<Button />', () => {
  it('renders Button component', () => {
    const component = renderer.create(<Button />).toJSON()

    expect(component).toBeDefined()
    expect(component.type).toBe('button')
  })

  it('renders Primary Button component', () => {
    const primaryComponent = renderer.create(
      <Button type={PRIMARY} />
    ).toJSON()

    expect(primaryComponent.props.type).toBe(PRIMARY)
  })

  it('renders Secondary Button component', () => {
    const secondaryComponent = renderer.create(
      <Button type={SECONDARY} />
    ).toJSON()

    expect(secondaryComponent.props.type).toBe(SECONDARY)
  })
})
