// --------------------- POLL ACTIONS --------------------- //
import {
  FETCH_POLLS_FAILURE,
  FETCH_POLLS_REQUEST,
  FETCH_POLLS_SUCCESS
} from '../../utils/constants'


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