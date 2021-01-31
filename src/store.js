import { createStore, applyMiddleware, compose } from 'redux';
// local storage file
import { saveState, loadState } from './localStorage';
import throttle from 'lodash/throttle';
// Import thunk
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const initialState = {};

const persistedState = loadState();

const middleware = [thunk];
//const enhancers = [];

const store = createStore(
  rootReducer,
  persistedState || initialState,
  compose(
    applyMiddleware(...middleware),

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000),
);

export default store;
