import {
  REQUEST_TIMER_VIEW,
  SUCCESS_TIMER_VIEW,
  ERROR_TIMER_VIEW,
} from '../../actions';

const initialState = {
  loading: false,
  success: true,
  data: [],
};

export default function timerViewReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_TIMER_VIEW:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case SUCCESS_TIMER_VIEW:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
      };
    case ERROR_TIMER_VIEW:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
