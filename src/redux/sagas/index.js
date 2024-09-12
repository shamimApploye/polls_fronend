// redux/sagas/index.js
import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPollsSuccess, fetchPollsFailure } from '../actions/pollsActions';

function* fetchPollsSaga() {
  try {
    const response = yield call(axios.get, 'http://127.0.0.1:8000/polls/');
    yield put(fetchPollsSuccess(response.data));
  } catch (error) {
    yield put(fetchPollsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery('FETCH_POLLS_REQUEST', fetchPollsSaga);
}

export default rootSaga;
