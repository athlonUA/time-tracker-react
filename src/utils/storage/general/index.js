export function getDataFromStorage(key) {
  let timers = null;
  try {
    timers = JSON.parse(localStorage.getItem(key)) || [];
  } catch (err) {
    timers = [];
  }

  return timers;
}

export function setDataToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
