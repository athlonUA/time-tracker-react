import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { EmptyState, ErrorState, TimerListTable, LoadingState } from '../../ui';
import {
  REQUEST_TIMER_LIST,
  SUCCESS_TIMER_LIST,
  ERROR_TIMER_LIST,
} from '../../../redux/actions';
import { timersGetFromStorage } from '../../../utils/storage/timer';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerList() {
  const history = useHistory();

  const dispatch = useDispatch();
  const {
    loading: loadingTimerList,
    success: successTimerList,
    data: dataTimerList,
  } = useSelector(state => state.timerListReducer);

  useEffect(() => {
    dispatch({ type: REQUEST_TIMER_LIST });
    timersGetFromStorage()
      .then(timers => {
        dispatch({
          type: SUCCESS_TIMER_LIST,
          payload: timers,
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_TIMER_LIST,
          payload: 'Something wrong happened.',
        });
      });
  }, [dispatch]);

  return (
    <>
      {loadingTimerList && <LoadingState />}
      {!loadingTimerList && !successTimerList && <ErrorState />}
      {!loadingTimerList && successTimerList && dataTimerList.length === 0 && (
        <EmptyState />
      )}
      {!loadingTimerList && successTimerList && dataTimerList.length > 0 && (
        <TimerListTable
          data={{ timers: dataTimerList }}
          methods={{
            viewTimer: id => history.push(`/view/${id}`),
          }}
        />
      )}
    </>
  );
}
