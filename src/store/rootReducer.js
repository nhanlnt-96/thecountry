import { combineReducers } from "redux";
import countryReducer from "./getCountry";

const rootReducer = combineReducers({
    countriesData: countryReducer,
});

export default rootReducer;