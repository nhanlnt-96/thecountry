import {takeLatest} from 'redux-saga/effects';
import { GET_ALL_COUNTRY, SEARCH_COUNTRY_NAME } from '../../country/actionType';
import { handlerGetCountry, handlerSearchCountry } from '../handlers/countryHandler';


export function* watcherSaga() {
  yield takeLatest(GET_ALL_COUNTRY, handlerGetCountry);
  yield takeLatest(SEARCH_COUNTRY_NAME, handlerSearchCountry);
}