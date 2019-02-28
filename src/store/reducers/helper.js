const resolversOf = (actionMap, defaultHandler) => {
  const resolvers = { default: defaultHandler, ...actionMap }

  return type => (resolvers[type] || resolvers.default)
}

export const reducerOf = (actionMap) => (defaultState, defaultHandler = (state) => () => state) => {
  const resolvers = resolversOf(actionMap, defaultHandler)

  return (state = defaultState(), action = {}) => (
    resolvers(action.type)(state)(action.payload)
  )
}
