import { combineReducers } from "redux";
import countryReducer from "./getCountry";
import countryDetailReducer from "./showCountryDetail";

const rootReducer = combineReducers({
    countriesData: countryReducer,
    countriesDetailData: countryDetailReducer
});

export default rootReducer;