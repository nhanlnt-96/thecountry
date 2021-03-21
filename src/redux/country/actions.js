import { GET_ALL_COUNTRY, GET_COUNTRY_FAILED, GET_COUNTRY_LOADING, SEARCH_COUNTRY } from './actionType';

export const getAllCountry = (country) => {
  return {
    type: GET_ALL_COUNTRY,
    data: country
  }
};

export const getCountryLoading = () => {
  return {
    type: GET_COUNTRY_LOADING,
    isLoading: true
  }
};

export const getCountryFailed = (isFailed) => {
  return {
    type: GET_COUNTRY_FAILED,
    isFailed
  }
};

export const searchCountry = (countryName) => {
  return {
    type: SEARCH_COUNTRY,
    data: {
      countryName: countryName
    }
  }
}