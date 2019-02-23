import { combineReducers, createStore } from 'redux';

import * as rootReducer from '../reducers';

const combinerRootReducer = combineReducers({
    ...rootReducer
});

/**
 * @description Configures store with all the reducers
 * @returns {object} creates and returns store
 */
export default function configureStore() {
    const store = createStore(combinerRootReducer);
    return store;
}