import {call, put} from 'redux-saga/effects';
import {requestGetCountry, requestSearchCountry} from '../requests/countryRequest';
import {getAllCountry, searchCountryName} from '../../country/actions';

//get country
export function* handlerGetCountry(action) {
    try {
        const response = yield call(requestGetCountry);
        yield put(getAllCountry(response.data));
    } catch (error) {
        console.log(error);
    }
}

//search country
export function* handlerSearchCountry(action) {
    try {
        const response = yield call(requestSearchCountry);
        yield put(searchCountryName(response.name));
    } catch (error) {
        console.log(error);
    }
}