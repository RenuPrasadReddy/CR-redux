import { createStore } from "redux";
import rootReducer from "../reducers";
import {composeWithDevTools} from 'redux-devtools-extension'
// const store = createStore(rootReducer);

// export default store;

const composeEnhancers = composeWithDevTools({});
export default createStore(rootReducer, composeEnhancers());
