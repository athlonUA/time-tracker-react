import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { ErrorState, LoadingState, TimerAddState } from '../../ui';
import {
  REQUEST_TIMER_ADD,
  SUCCESS_TIMER_ADD,
  ERROR_TIMER_ADD,
  REQUEST_USER_LIST,
  SUCCESS_USER_LIST,
  ERROR_USER_LIST,
} from '../../../redux/actions';
import { timerAddToStorage } from '../../../utils/storage/timer';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerAdd() {
  const history = useHistory();

  const dispatch = useDispatch();

  const {
    loading: loadingUserList,
    success: successUserList,
    data: dataUserList,
  } = useSelector(state => state.userListReducer);
  const { loading: loadingTimerAdd } = useSelector(
    state => state.timerAddReducer,
  );

  useEffect(() => {
    dispatch({ type: REQUEST_USER_LIST });
    try {
      axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        dispatch({ type: SUCCESS_USER_LIST, payload: res.data });
      });
    } catch (err) {
      dispatch({
        type: ERROR_USER_LIST,
        payload: 'Something wrong happened.',
      });
    }
  }, [dispatch]);

  const submitForm = form => {
    const { userIdx, time, note } = form;
    const [timeFrom, timeTo] = time;

    const timerCurrent = {
      id: uuidv4(),
      user: dataUserList[userIdx],
      time: [
        timeFrom.format('YYYY-MM-DD HH:mm'),
        timeTo.format('YYYY-MM-DD HH:mm'),
      ],
      note,
    };

    dispatch({ type: REQUEST_TIMER_ADD });
    try {
      timerAddToStorage(timerCurrent).then(() => {
        dispatch({ type: SUCCESS_TIMER_ADD, payload: timerCurrent });

        history.push('/list');
      });
    } catch (err) {
      dispatch({
        type: ERROR_TIMER_ADD,
        payload: 'Something wrong happened.',
      });
    }
  };

  return (
    <>
      {loadingUserList && <LoadingState />}
      {!loadingUserList && !successUserList && <ErrorState />}
      {!loadingUserList && successUserList && (
        <TimerAddState
          data={{ users: dataUserList }}
          state={{ loading: loadingTimerAdd }}
          actions={{ submitForm }}
        />
      )}
    </>
  );
}
