// redux/actions/pollsActions.js
import axios from 'axios';

export const fetchPollsRequest = () => ({
  type: 'FETCH_POLLS_REQUEST',
});

export const fetchPollsSuccess = (polls) => ({
  type: 'FETCH_POLLS_SUCCESS',
  payload: polls,
});

export const fetchPollsFailure = (error) => ({
  type: 'FETCH_POLLS_FAILURE',
  error,
});

export const fetchPolls = () => {
  return (dispatch) => {
    dispatch(fetchPollsRequest());
    axios
      .get('http://127.0.0.1:8000/polls/')
      .then((response) => {
        dispatch(fetchPollsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchPollsFailure(error.message));
      });
  };
};
