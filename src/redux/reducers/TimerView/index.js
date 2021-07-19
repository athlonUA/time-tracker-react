import {
  REQUEST_TIMER_VIEW,
  SUCCESS_TIMER_VIEW,
  ERROR_TIMER_VIEW,
} from '../../actions';
import { getDuration } from '../../../utils/time';

const initialState = {
  loading: false,
  success: true,
  data: null,
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
      const {
        id,
        user: { name: user },
        time: [timeFrom, timeTo],
        note,
      } = payload;
      const duration = getDuration(timeFrom, timeTo);

      const data = {
        id,
        user,
        note,
        timeFrom,
        timeTo,
        duration,
      };

      return {
        ...state,
        loading: false,
        success: true,
        data,
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
