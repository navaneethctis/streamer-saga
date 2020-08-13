import { all } from 'redux-saga/effects';

import streamSaga from './stream';

export default function* () {
  yield all([...streamSaga]);
}
