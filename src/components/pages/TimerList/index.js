import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { EmptyState, ErrorState, TimerListState, LoadingState } from '../../ui';
import {
  REQUEST_TIMER_LIST,
  SUCCESS_TIMER_LIST,
  ERROR_TIMER_LIST,
} from '../../../redux/actions';
import { timersGetFromStorage } from '../../../utils/storage/timer';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerList() {
  const dispatch = useDispatch();

  const {
    loading: loadingTimerList,
    success: successTimerList,
    data: dataTimerList,
  } = useSelector(state => state.timerListReducer);

  useEffect(() => {
    dispatch({ type: REQUEST_TIMER_LIST });
    try {
      timersGetFromStorage().then(timers => {
        dispatch({
          type: SUCCESS_TIMER_LIST,
          payload: timers
            .map(timer => {
              const {
                id: timerId,
                user: { name: user },
                time: [timeFrom, timeTo],
                note,
              } = timer;

              return {
                id: timerId,
                user,
                note,
                timeFrom,
                timeTo,
                duration: moment
                  .utc(
                    moment
                      .duration(moment(timeTo) - moment(timeFrom))
                      .as('milliseconds'),
                  )
                  .format('H[h] m[m]'),
              };
            })
            .reverse(),
        });
      });
    } catch (err) {
      dispatch({
        type: ERROR_TIMER_LIST,
        payload: 'Something wrong happened.',
      });
    }
  }, [dispatch]);

  return (
    <>
      {loadingTimerList && <LoadingState />}
      {!loadingTimerList && !successTimerList && <ErrorState />}
      {!loadingTimerList && successTimerList && dataTimerList.length === 0 && (
        <EmptyState />
      )}
      {!loadingTimerList && successTimerList && dataTimerList.length > 0 && (
        <TimerListState data={{ timers: dataTimerList }} />
      )}
    </>
  );
}
