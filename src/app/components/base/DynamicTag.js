import { createElement as h } from 'react'
import styled from 'styled-components'

const withDynamicTag = Component => {
  const bucket = Object.create(null)

  const DynamicTag = props => {
    const { as } = props

    // eslint-disable-next-line no-prototype-builtins
    if (typeof props.as !== 'string' || !styled.hasOwnProperty(as)) {
      return h(Component, props)
    }

    if (bucket[as] === undefined) {
      bucket[as] = Component.withComponent(as)
    }

    return h(bucket[as], props)
  }

  const name = Component.displayName || Component.constructor.name

  if (name) {
    DynamicTag.displayName = `DynamicTag(${name})`
  }

  return DynamicTag
}

export default withDynamicTag
