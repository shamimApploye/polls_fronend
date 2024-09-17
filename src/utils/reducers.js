// redux/reducers/index.js
import { combineReducers } from 'redux';
import pollsReducer from '../custom_modules/polls/pollsReducer';
import signupReducer from '../custom_modules/signup/signupReducer';

const rootReducer = () => combineReducers({
  polls: pollsReducer,
  signup: signupReducer
});

export default rootReducer;
