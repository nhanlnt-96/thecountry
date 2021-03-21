import { GET_ALL_COUNTRY, GET_COUNTRY_FAILED, GET_COUNTRY_LOADING, SEARCH_COUNTRY } from './actionType';

const countryInitState = {
  country: [],
  loading: false,
  error: null
};


const countryReducer = (state = countryInitState, action) => {
  switch (action.type) {
    case GET_COUNTRY_LOADING:
      return {
        loading: action.isLoading
      }
    case GET_ALL_COUNTRY:
      return {
        ...state,
        country: action.data,
        loading: false
      }
    case GET_COUNTRY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.isFailed
      }
    case SEARCH_COUNTRY:
      const countryName = state.country.map(val => console.log(val.name));
      return {
        ...state,
        country: countryName
      }
    default:
      return state;
  }
}

export default countryReducer;