import { combineReducers } from 'redux';

import timerAddReducer from './TimerAdd';
import timerListReducer from './TimerList';
import timerViewReducer from './TimerView';
import userListReducer from './UserList';

const rootReducer = combineReducers({
  timerAddReducer,
  timerListReducer,
  timerViewReducer,
  userListReducer,
});

export default rootReducer;
