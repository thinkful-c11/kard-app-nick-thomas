import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

import kardReducer from './reducers/kard';

const store = createStore(kardReducer, applyMiddleware(thunk));

export default store;
