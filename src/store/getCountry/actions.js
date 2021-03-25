import {
  GET_COUNTRY_FAIL,
  GET_COUNTRY_LOAD,
  GET_COUNTRY_RECEIVE
} from './actionType';

export const getCountryLoad = () => {
  return {
    type: GET_COUNTRY_LOAD
  }
};

export const getCountryReceive = (countryData) => {
  return {
    type: GET_COUNTRY_RECEIVE,
    payload: countryData
  }
};

export const getCountryFail = (error) => {
  return {
    type: GET_COUNTRY_FAIL,
    payload: error
  }
};
