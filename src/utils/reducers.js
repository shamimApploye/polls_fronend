// redux/reducers/index.js
import { combineReducers } from 'redux';
import pollsReducer from '../redux/reducers/pollsReducer';

const rootReducer = () => combineReducers({
  polls: pollsReducer,
});

export default rootReducer;
