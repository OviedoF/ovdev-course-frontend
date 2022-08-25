import { combineReducers } from "redux";
import screensActiveReducer from "./screensActive.reducer";
import authReducer from './auth.reducer';
 
const reducer = combineReducers({
    screensActive: screensActiveReducer,
    auth: authReducer
});
 
export default reducer;