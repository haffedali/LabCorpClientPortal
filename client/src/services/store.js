import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

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
