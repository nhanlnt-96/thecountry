import { GET_ALL_COUNTRY, SEARCH_COUNTRY_NAME } from './actionType';

const countryInitState = {
  country: [],
};


const countryReducer = (state = countryInitState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY:
      return {
        ...state,
        country: action.data,
        loading: false
      }
    case SEARCH_COUNTRY_NAME:
      const countryNameResult = state.country.filter(val => {
        if (val.name === action.data.countryName) {
          return {
            ...val
          }
        }
        return console.log(state.country);
      });
      return {
        ...state,
        country: countryNameResult
      }
    default:
      return state;
  }
}

export default countryReducer;