import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { TimerAddForm } from '../../ui';
import {
  REQUEST_TIMER_ADD,
  SUCCESS_TIMER_ADD,
  ERROR_TIMER_ADD,
} from '../../../redux/actions';
import { timerAddToStorage } from '../../../utils/storage/timer';

// eslint-disable-next-line
import styles from './index.module.css';

export default function TimerAdd() {
  const history = useHistory();

  const dispatch = useDispatch();
  const { loading: loadingTimerAdd } = useSelector(
    state => state.timerAddReducer,
  );

  const submitForm = timer => {
    dispatch({ type: REQUEST_TIMER_ADD });
    timerAddToStorage(timer)
      .then(() => {
        dispatch({ type: SUCCESS_TIMER_ADD, payload: timer });

        history.push('/list');
      })
      .catch(() => {
        dispatch({
          type: ERROR_TIMER_ADD,
          payload: 'Something wrong happened.',
        });
      });
  };

  return (
    <>
      <TimerAddForm
        data={{ loading: loadingTimerAdd }}
        methods={{ submitForm }}
      />
    </>
  );
}
