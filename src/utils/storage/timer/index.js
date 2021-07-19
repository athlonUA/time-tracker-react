import { getDataFromStorage, setDataToStorage } from '../general';

const STORAGE_KEY = 'app-tracker-timers';

export function timersGetFromStorage() {
  return new Promise(resolve => {
    let timers = null;
    try {
      timers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (err) {
      timers = [];
    }

    resolve(timers);
  });
}

export function timerAddToStorage(timer) {
  return new Promise(resolve => {
    let timers = getDataFromStorage(STORAGE_KEY);
    timers = [...timers, timer];

    setDataToStorage(STORAGE_KEY, timers);

    resolve(true);
  });
}

export function timerGetFromStorage(id) {
  return new Promise(resolve => {
    const timers = getDataFromStorage(STORAGE_KEY);

    resolve(timers.find(timer => timer.id === id));
  });
}

export function timerRemoveFromStorage(id) {
  return new Promise(resolve => {
    let timers = getDataFromStorage(STORAGE_KEY);
    timers = timers.filter(timer => timer.id !== id);

    setDataToStorage(STORAGE_KEY, timers);

    resolve(true);
  });
}
