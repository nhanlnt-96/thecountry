import { combineReducers } from "redux";
import countryReducer from "./country";

const rootReducer = combineReducers({
    countriesData: countryReducer
});

export default rootReducer;