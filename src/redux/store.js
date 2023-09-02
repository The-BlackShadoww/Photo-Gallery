import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const myStore = createStore(reducer, applyMiddleware(logger, thunk));

export default myStore; 
