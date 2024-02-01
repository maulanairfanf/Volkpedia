import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from 'redux';

import thunk from 'redux-thunk';
import authReducer from './auth/reducer';
import userReducer from './user/reducer';
import cartReducer from './cart/reducer';

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  cart: cartReducer
});
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

export default store;
