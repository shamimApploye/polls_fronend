// redux/reducers/index.js
import { combineReducers } from 'redux';
import pollsReducer from '../custom_modules/polls/reducer';

const rootReducer = () => combineReducers({
  polls: pollsReducer,
});

export default rootReducer;
