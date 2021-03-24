import {takeLatest} from 'redux-saga/effects';
import {GET_COUNTRY_LOAD} from "../../country/actionType";
import {countryRequest} from "../requests/countryRequest";

export function* countryHandler() {
    yield takeLatest(GET_COUNTRY_LOAD, countryRequest);
}
