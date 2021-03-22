import { spawn } from 'redux-saga/effects';
import { watcherSaga } from './watcher/watcherSaga';

export default function* rootSaga() {
  yield spawn(watcherSaga)
};