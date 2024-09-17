import { SIGN_UP_FAILURE, SIGNUP_FORM_SUCCESS, SUBMIT_SIGNUP_FORM } from "../../utils/constants"

const handleSignupForm = (state) => {
    return {
        ...state,
        loading: true
    }
}

const handleSignUPSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        signup: action.payload
    }
}

const handleSignupFailure = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const ACTION_HANDLERS = {
    [SUBMIT_SIGNUP_FORM]: handleSignupForm,
    [SIGNUP_FORM_SUCCESS]: handleSignUPSuccess,
    [SIGN_UP_FAILURE]: handleSignupFailure
}

const initialState = {
    data: [],
    loading: false,
    error: null
}

const reducers = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]

    return handler ? handler(state, action) : state
}

export default reducers