import {combineReducers} from 'redux'
import reducer from './reducer';


const rootReducer = combineReducers({
    contacts: reducer
});
export default rootReducer;