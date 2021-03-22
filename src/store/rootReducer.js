import { combineReducers } from "redux";
import countryReducer from "./country";

const rootReducer = combineReducers({
    countryReducer: countryReducer
});

export default rootReducer;