// redux/reducers/index.js
import { combineReducers } from 'redux';
import pollsReducer from '../custom_modules/polls/pollsReducer';

const rootReducer = () => combineReducers({
  polls: pollsReducer,
});

export default rootReducer;
