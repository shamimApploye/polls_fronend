// redux/reducers/index.js
import { combineReducers } from 'redux';
import pollsReducer from './pollsReducer';

const rootReducer = combineReducers({
  polls: pollsReducer,
});

export default rootReducer;
