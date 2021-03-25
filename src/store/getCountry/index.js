import { GET_COUNTRY_DETAIL, GET_COUNTRY_FAIL, GET_COUNTRY_LOAD, GET_COUNTRY_RECEIVE } from './actionType';

const countryInitState = {
  loading: false,
  countries: [],
  error: null
};


const countryReducer = (state = countryInitState, action) => {
  switch (action.type) {
    case GET_COUNTRY_LOAD:
      return {
        loading: true
      };
    case GET_COUNTRY_RECEIVE:
      return {
        ...state,
        loading: false,
        countries: action.payload
      };
    case GET_COUNTRY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        loading: false,
        countryDetail: action.payload
      }
    default:
      return state;
  }
}

export default countryReducer;