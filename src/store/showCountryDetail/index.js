import {GET_COUNTRY_DETAIL} from "./actionType";

const countryInitState = {
    countryDetail:{}
};

const countryDetailReducer = (state = countryInitState, action) => {
    switch (action.type) {
        case GET_COUNTRY_DETAIL:
            return {
                ...state,
                countryDetail: action.payload
            }
        default:
            return state;
    }
}

export default countryDetailReducer;