import {
  REQUEST_USER_LIST,
  SUCCESS_USER_LIST,
  ERROR_USER_LIST,
} from '../../actions';

const initialState = {
  loading: true,
  success: false,
  data: [],
};

export default function userListReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REQUEST_USER_LIST:
      return {
        ...state,
        loading: true,
        success: false,
      };
    case SUCCESS_USER_LIST:
      return {
        ...state,
        loading: false,
        success: true,
        data: payload,
      };
    case ERROR_USER_LIST:
      return {
        ...state,
        loading: false,
        success: false,
      };
    default:
      return state;
  }
}
