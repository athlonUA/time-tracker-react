const STORAGE_KEY = 'app-tracker-timer';

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
    let timers = null;
    try {
      timers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (err) {
      timers = [];
    }

    timers = [...timers, timer];

    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));

    resolve(true);
  });
}

export function timerGetFromStorage(id) {
  return new Promise(resolve => {
    let timers = null;
    try {
      timers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (err) {
      timers = [];
    }

    resolve(timers.find(timer => timer.id === id));
  });
}

export function timerRemoveFromStorage(id) {
  return new Promise(resolve => {
    let timers = null;
    try {
      timers = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (err) {
      timers = [];
    }

    timers = timers.filter(timer => timer.id !== id);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));

    resolve(true);
  });
}
