import { 
  applyMiddleware, 
  combineReducers,
  compose, 
  createStore
} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

import * as reducers from "./reducers";

const rootReducer = combineReducers(reducers);

/**
 * 
 * @param {string} currentPage - current page we are showing in ui
 */
function configureStore(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
    applyMiddleware(...middlewares)
  ));

  return store;
}

export default configureStore;
