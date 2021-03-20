import {call, put} from 'redux-saga/effects';
import {requestGetCountry} from "../requests/countryRequest";
import {getAllCountry} from "../../country/actions";

export function* handlerGetCountry(action) {
    try {
        const response = yield call(requestGetCountry);
        const {data} = response;
        yield put(getAllCountry(data));
    } catch (error) {
        console.log(error);
    }
}