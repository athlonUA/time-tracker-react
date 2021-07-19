import moment from 'moment';

export function getDuration(timeFrom, timeTo) {
  return moment
    .utc(moment.duration(moment(timeTo) - moment(timeFrom)).as('milliseconds'))
    .format('H[h] m[m]');
}
