import {GET_ALL_COUNTRY, SEARCH_COUNTRY_NAME} from './actionType';

export const getAllCountry = (country) => {
    return {
        type: GET_ALL_COUNTRY,
        data: country
    }
};

export const searchCountryName = (countryName) => {
    return {
        type: SEARCH_COUNTRY_NAME,
        data: {
            countryName
        }
    }
}
