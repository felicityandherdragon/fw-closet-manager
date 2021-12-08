import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  
});
let middleware = applyMiddleware(thunkMiddleware);
if (process.env.API_URL.includes('localhost')) {
  middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  );
}
const store = createStore(reducer, middleware);
export default store;
