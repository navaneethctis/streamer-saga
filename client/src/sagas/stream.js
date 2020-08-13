import {
  call,
  fork,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import * as actions from '../actions';

import history from '../history';

import * as api from '../apis/streamer';

function* createStream({ payload }) {
  const {
    authentication: { userId }
  } = yield select();

  try {
    const { data } = yield call(api.createStream, { ...payload, userId });

    yield put(actions.setStream(data));

    history.push('/');
  } catch (error) {
    console.error(error);
  }
}

function* deleteStream({ payload }) {
  try {
    yield call(api.deleteStream, payload);

    yield put(actions.clearStream(payload));

    history.push('/');
  } catch (error) {
    console.error(error);
  }
}

function* readStream({ payload }) {
  try {
    const { data } = yield call(api.readStream, payload);

    yield put(actions.setStream(data));
  } catch (error) {
    console.error(error);
  }
}

function* readStreams() {
  try {
    const { data } = yield call(api.readStreams);

    yield put(actions.setStreams(data));
  } catch (error) {
    console.error(error);
  }
}

function* updateStream({ payload: { id, updates } }) {
  try {
    const { data } = yield call(api.updateStream, id, updates);

    yield put(actions.setStream(data));

    history.push('/');
  } catch (error) {
    console.error(error);
  }
}

function* watchCreateStream() {
  yield takeLatest(actions.types.CREATE_STREAM, createStream);
}

function* watchDeleteStream() {
  while (true) {
    const action = yield take(actions.types.DESTROY_STREAM);

    yield call(deleteStream, action);
  }
}

function* watchReadStream() {
  yield takeEvery(actions.types.SHOW_STREAM, readStream);
}

function* watchReadStreams() {
  yield takeEvery(actions.types.INDEX_STREAM, readStreams);
}

function* watchUpdateStreams() {
  while (true) {
    const action = yield take(actions.types.EDIT_STREAM);

    yield call(updateStream, action);
  }
}

export default [
  fork(watchCreateStream),
  fork(watchDeleteStream),
  fork(watchReadStream),
  fork(watchReadStreams),
  fork(watchUpdateStreams)
];

/*
const updateStream = (id, updates) => async dispatch => {
  const { data } = await streamer.patch(`/streams/${id}`, updates);

  dispatch({
    payload: data,
    type: EDIT_STREAM
  });

  history.push('/');
};
*/
