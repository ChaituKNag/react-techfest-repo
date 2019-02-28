import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

function configureStoreEnv(initialState) {
  const middlewares = [thunk]

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  )
}

const configureStore = configureStoreEnv

export default configureStore
