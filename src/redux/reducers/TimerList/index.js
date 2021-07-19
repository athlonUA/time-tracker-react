import {
  REQUEST_TIMER_LIST,
  SUCCESS_TIMER_LIST,
  ERROR_TIMER_LIST,
} from '../../actions';
import { getDuration } from '../../../utils/time';

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
      const data = payload
        .map(timer => {
          const {
            id,
            user: { name: user },
            time: [timeFrom, timeTo],
            note,
          } = timer;
          const duration = getDuration(timeFrom, timeTo);

          return {
            id,
            user,
            note,
            timeFrom,
            timeTo,
            duration,
          };
        })
        .reverse();

      return {
        ...state,
        loading: false,
        success: true,
        data,
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
