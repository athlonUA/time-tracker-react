import {
  REQUEST_TIMER_ADD,
  SUCCESS_TIMER_ADD,
  ERROR_TIMER_ADD,
} from '../../actions';

const initialState = {
  loading: false,
  success: true,
  data: [],
};

export default function timerAddReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_TIMER_ADD:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case SUCCESS_TIMER_ADD:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
      };
    case ERROR_TIMER_ADD:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
