import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools as compose } from 'redux-devtools-extension';
import rootReducer from '../reducers';
import middleware from '../middlewares';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware)),
);

export default store;

