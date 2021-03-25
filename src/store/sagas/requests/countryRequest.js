import {call, put} from 'redux-saga/effects';
import {allCountry} from "../../../network";
import {getCountryFail, getCountryReceive} from "../../getCountry/actions";

export function* countryRequest() {
    try {
        const response = yield call(allCountry);
        yield put(getCountryReceive(response.data));
    } catch (error) {
        yield put(getCountryFail(error));
    }
};