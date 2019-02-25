import React from 'react'
import renderer from 'react-test-renderer'

import { HeaderTag } from './HeaderTag'

describe('<HeaderTag />', () => {
  it('renders HeaderTag component with default h1 tag', () => {
    const component = renderer.create(<HeaderTag />).toJSON()

    expect(component).toBeDefined()
    expect(component.type).toBe('h1')
  })

  it('renders Header component with h2 tag', () => {
    const component = renderer.create(<HeaderTag as='h2' />).toJSON()

    expect(component.type).toBe('h2')
  })
})
