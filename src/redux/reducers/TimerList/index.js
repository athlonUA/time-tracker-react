import {
  REQUEST_TIMER_LIST,
  SUCCESS_TIMER_LIST,
  ERROR_TIMER_LIST,
} from '../../actions';

const initialState = {
  loading: true,
  success: false,
  data: [],
};

export default function timerListReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_TIMER_LIST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case SUCCESS_TIMER_LIST:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
      };
    case ERROR_TIMER_LIST:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
