import { combineReducers } from 'redux';

import timerAddReducer from './TimerAdd';
import timerListReducer from './TimerList';
import timerViewReducer from './TimerView';

const rootReducer = combineReducers({
  timerAddReducer,
  timerListReducer,
  timerViewReducer,
});

export default rootReducer;
