import {takeLatest} from 'redux-saga/effects'
import {GET_ALL_COUNTRY} from "../country/actionType";
import {handlerGetCountry} from "./handlers/countryHandler";

export function* watcherSaga(){
    yield takeLatest(GET_ALL_COUNTRY,handlerGetCountry);
}