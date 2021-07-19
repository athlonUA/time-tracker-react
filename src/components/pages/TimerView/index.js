import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ErrorState, LoadingState, TimerViewForm } from '../../ui';
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
    timerGetFromStorage(id)
      .then(timer => {
        dispatch({
          type: SUCCESS_TIMER_VIEW,
          payload: timer,
        });
      })
      .catch(() => {
        dispatch({
          type: ERROR_TIMER_VIEW,
          payload: 'Something wrong happened.',
        });
      });
  }, [dispatch, id]);

  return (
    <>
      {loadingTimerView && <LoadingState />}
      {!loadingTimerView && !successTimerView && <ErrorState />}
      {!loadingTimerView && successTimerView && (
        <TimerViewForm
          data={{ timer: dataTimerView }}
          methods={{
            closeTimer: () => history.goBack(),
            deleteTimer: id => timerRemoveFromStorage(id) && history.goBack(),
          }}
        />
      )}
    </>
  );
}
