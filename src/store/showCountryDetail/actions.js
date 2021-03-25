import {GET_COUNTRY_DETAIL} from "./actionType";

export const getCountryDetail = (countryDetail) => {
    return {
        type: GET_COUNTRY_DETAIL,
        payload: countryDetail
    }
}