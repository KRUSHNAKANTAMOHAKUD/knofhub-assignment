import { createStore, compose, applyMiddleware } from "redux";
import { eventDataReducer } from "./reducers";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export default createStore(
  eventDataReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
