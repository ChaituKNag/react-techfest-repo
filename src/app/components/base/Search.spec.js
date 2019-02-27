import React from 'react'
import renderer from 'react-test-renderer'

import { Search } from './Search'

describe('<Search />', () => {
  const component = renderer.create(<Search />).toJSON()
  it('renders Search component', () => {

    expect(component).toBeDefined()
    expect(component.type).toBe('div')
  })

  it('renders search icon for  Search component', () => {

    expect(component.children[0].type).toBe('span')
  })

  it('renders input box for Search component', () => {

    expect(component.children[1].type).toBe('input')
    expect(component.children[1].props.type).toBe('text')
  })
})
