import { call, put } from 'redux-saga/effects';
import { requestGetCountry, requestSearchCountry } from '../requests/countryRequest';
import { getAllCountry } from '../../country/actions';

//get country
export function* handlerGetCountry(action) {
  try {
    const response = yield call(requestGetCountry);
    yield put(getAllCountry(response.data));
  } catch (error) {
    console.log(error);
  }
}