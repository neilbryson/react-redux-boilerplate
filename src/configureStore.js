import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap';

import actionCreators from './modules';

const configureStore = preloadedState => {
  const { enhancer, middleware, reducer, thunk } = connectRoutes(routesMap);
  const rootReducer = combineReducers({ actionCreators, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(enhancer, middlewares);
  const store = createStore(rootReducer, preloadedState, enhancers);
  return { store, thunk };
};

export default configureStore;
