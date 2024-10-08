// --------------------- POLL REDUCERS --------------------- //

import {
    FETCH_POLLS_FAILURE,
    FETCH_POLLS_REQUEST,
    FETCH_POLLS_SUCCESS
} from '../../utils/constants';

const handlePollsRequest = (state, action) => {
    return {
        ...state,
        loading: true
    };
}

const handlePollsRequestSuccess = (state, action) => {
    return {
        ...state,
        loading: false,
        polls: action.payload
    };
}

const handlePollsRequestFailure = (state, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    };
}


//  Action Handlers
const ACTION_HANDLERS = {
    [FETCH_POLLS_REQUEST]: handlePollsRequest,
    [FETCH_POLLS_SUCCESS]: handlePollsRequestSuccess,
    [FETCH_POLLS_FAILURE]: handlePollsRequestFailure,
}


//  Default Initial State
const initialState = {
    polls: [],
    loading: false,
    error: null,
};

// Central Reducer of the Module
const pollsReducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]


    return handler ? handler(state, action) : state
}

export default pollsReducer