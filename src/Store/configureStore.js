import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "Reducer";

const loggerMiddleware = createLogger();

export const configureStore = () =>
  createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
