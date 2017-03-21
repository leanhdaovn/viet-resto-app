import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import navReducer from './screens/AppNavigator/reducers';
import rootReducer from './rootReducer';

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const appReducer = combineReducers({
  nav: navReducer,
  app: rootReducer
});

export default configureStore = (preloadedState) => createStore(
  appReducer,
  preloadedState,
  composeWithDevTools(
    applyMiddleware(logger, thunk)
  )
);
