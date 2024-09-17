import { call, put, takeLatest } from "redux-saga/effects";
import defaultApi from "../../utils/defaultApi";
import { 
    SIGN_UP_FAILURE, 
    SIGNUP_FORM_SUCCESS, 
    SUBMIT_SIGNUP_FORM 
}    from "../../utils/constants";


function* submitFormSaga({payload}) {
    const data = yield call(defaultApi, 'auth/signup', 'POST', payload);
    try {
        yield put({ type: SIGNUP_FORM_SUCCESS, payload: data })
    }
    catch (err) {
        yield put({ type: SIGN_UP_FAILURE, payload: err })
    }
}

function* rootSaga() {
    yield takeLatest(SUBMIT_SIGNUP_FORM, submitFormSaga)
}

export default rootSaga