import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

/* Middlewares */
// All middles need to add into arry of middleWares
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));

/* Store */
export const store = createStore(rootReducer, undefined, composedEnhancers);
