import { all, fork } from 'redux-saga/effects';
import pollSaga from '../custom_modules/polls/sagas';

// Root saga to combine all the individual sagas
export default function* rootSaga() {
  yield all([
    fork(pollSaga),
    // fork(userSaga),
    // fork(productSaga),
  ]);
}