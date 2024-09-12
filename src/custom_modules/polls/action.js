// --------------------- POLL ACTIONS --------------------- //

const fetchPollsRequest = () => ({
  type: FETCH_POLLS_REQUEST,
});

const fetchPollsSuccess = (polls) => ({
  type: FETCH_POLLS_SUCCESS,
  payload: polls,
});

const fetchPollsFailure = (error) => ({
  type: FETCH_POLLS_FAILURE,
  error,
});

export const actions = {
    fetchPollsFailure,
    fetchPollsRequest,
    fetchPollsSuccess
}