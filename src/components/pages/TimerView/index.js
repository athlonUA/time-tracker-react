import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { ErrorState, LoadingState, TimerViewState } from '../../ui';
import {
  REQUEST_TIMER_VIEW,
  SUCCESS_TIMER_VIEW,
  ERROR_TIMER_VIEW,
} from '../../../redux/actions';
import {
  timerGetFromStorage,
  timerRemoveFromStorage,
} from '../../../utils/storage/timer';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerView() {
  const { id } = useParams();

  const history = useHistory();

  const dispatch = useDispatch();

  const {
    loading: loadingTimerView,
    success: successTimerView,
    data: dataTimerView,
  } = useSelector(state => state.timerViewReducer);

  useEffect(() => {
    dispatch({ type: REQUEST_TIMER_VIEW });
    try {
      timerGetFromStorage(id).then(timer => {
        const {
          id: timerId,
          user: { name: user },
          time: [timeFrom, timeTo],
          note,
        } = timer;

        dispatch({
          type: SUCCESS_TIMER_VIEW,
          payload: {
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
          },
        });
      });
    } catch (err) {
      dispatch({
        type: ERROR_TIMER_VIEW,
        payload: 'Something wrong happened.',
      });
    }
  }, [dispatch, id]);

  return (
    <>
      {loadingTimerView && <LoadingState />}
      {!loadingTimerView && !successTimerView && <ErrorState />}
      {!loadingTimerView && successTimerView && (
        <TimerViewState
          data={{ timer: dataTimerView }}
          actions={{
            goBack: () => history.goBack(),
            deleteTimer: id => timerRemoveFromStorage(id) && history.goBack(),
          }}
        />
      )}
    </>
  );
}
