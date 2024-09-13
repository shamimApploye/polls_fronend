// --------------------- POLL SAGAS --------------------- //

import { call, put, takeLatest } from 'redux-saga/effects';
import defaultApi from '../../utils/defaultApi';
import {
  FETCH_POLLS_REQUEST,
  FETCH_POLLS_SUCCESS,
  FETCH_POLLS_FAILURE
} from '../../utils/constants'

function* fetchPollsSaga() {
  const data = yield call(defaultApi, 'polls/', 'GET',);
  try {
    yield put({ type: FETCH_POLLS_SUCCESS, payload: data })
  }
  catch (err) {
    yield put({ type: FETCH_POLLS_FAILURE, payload: err })
  }
}

function* rootSaga() {
  yield takeLatest(FETCH_POLLS_REQUEST, fetchPollsSaga);
}

export default rootSaga;
