import { reducerOf } from './helper'

describe('#reducerOf', () => {
  it('creates a reducer with default props', () => {
    const reducer = reducerOf()(() => ({ foo: 'bar' }))

    expect(reducer()).toEqual({ foo: 'bar' })
  })

  it('accepts defaultHandler', () => {
    const defaultHandler = jest.fn(state => () => state)
    const reducer = reducerOf()(() => ({ foo: 'bar' }), defaultHandler)
    const state = reducer()

    expect(state).toEqual({ foo: 'bar' })
    expect(defaultHandler).toHaveBeenCalledWith({ foo: 'bar' })
  })

  it('triggers reducer bound to action type', () => {
    const actionMap = {
      foo: jest.fn(state => ({ data }) => ({ ...state, hasBeenCalled: data })),
      bar: jest.fn()
    }
    const reducer = reducerOf(actionMap)(() => ({}))
    const state = reducer({}, { type: 'foo', payload: { data: 'FOO has been called' } })

    expect(state).toEqual({ hasBeenCalled: 'FOO has been called' })
    expect(actionMap.foo).toHaveBeenCalled()
    expect(actionMap.bar).not.toHaveBeenCalled()
  })
})
