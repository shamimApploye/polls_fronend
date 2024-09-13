// --------------------- POLL ACTIONS --------------------- //
import {
  FETCH_POLLS_REQUEST
} from '../../utils/constants'


const fetchPollsRequest = () => ({
  type: FETCH_POLLS_REQUEST,
});

export const actions = {
    fetchPollsRequest,
}