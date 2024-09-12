// redux/reducers/pollsReducer.js
const initialState = {
  polls: [],
  loading: false,
  error: null,
};

export default function pollsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POLLS_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_POLLS_SUCCESS':
      return { ...state, loading: false, polls: action.payload };
    case 'FETCH_POLLS_FAILURE':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}
