import { call, put } from 'redux-saga/effects';
import { requestGetCountry } from '../requests/countryRequest';
import { getAllCountry, getCountryFailed } from '../../country/actions';

export function* handlerGetCountry(action) {
  try {
    const response = yield call(requestGetCountry);
    yield put(getAllCountry(response.data));
  } catch (error) {
    yield put(getCountryFailed(error.message));
  }
}