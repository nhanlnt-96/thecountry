import {takeEvery} from 'redux-saga/effects';
import {GET_ALL_COUNTRY, SEARCH_COUNTRY_NAME} from "../country/actionType";
import {handlerGetCountry, handlerSearchCountry} from "./handlers/countryHandler";


export function* watcherSaga() {
    yield takeEvery(GET_ALL_COUNTRY, handlerGetCountry);
    yield takeEvery(SEARCH_COUNTRY_NAME, handlerSearchCountry);
}