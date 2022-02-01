import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allItemsReducer from './getItems';
import newItemReducer from './addItems';
import currentUserReducer from './setUser';
import allColorsReducer from './getColors';
import itemsbyColorReducer from './getItemsbyColor';

const reducer = combineReducers({
  allItems: allItemsReducer,
  newItem: newItemReducer,
  currentUser: currentUserReducer,
  allColors: allColorsReducer,
  itemsbyColor: itemsbyColorReducer,
});
let middleware = applyMiddleware(thunkMiddleware);
if (process.env.API_URL.includes('localhost')) {
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  );
}
const store = createStore(reducer, middleware);
export default store;
