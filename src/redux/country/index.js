import { GET_ALL_COUNTRY } from "./actionType";

const countryInitState = {
    country: undefined
};


const countryReducer = (state = countryInitState, action) => {
    switch (action.type) {
        case GET_ALL_COUNTRY:
            return {
                ...state,
                country: action.data,
            }
        default:
            return state;
    }
}

export default countryReducer;