/**
 * Give a date range between start of day, week, month, year and now
 */

import startOfWeek from 'date-fns/start_of_week';
//import subHours from 'date-fns/sub_hours';

class DateRangeHelper {
  static get dayRange() {
    const end = new Date();
    const start = new Date(new Date().setHours(0, 0, 0, 0));
    return {start, end}
  }

  static get weekRange () {
    const end = new Date();
    const start = startOfWeek(end, {weekStartsOn: 1});
    //console.log(start);
    //console.log(subHours(start, 1));
    return {start, end}
  }

  static get monthRange () {
    const end = new Date();
    const start = new Date(end.getFullYear(), end.getMonth(), 1);
    return {start, end}
  }

  static get yearRange () {
    const end = new Date();
    const start = new Date(end.getFullYear(), 0, 1);
    return {start, end}
  }

  static adjustISOHours (d) {
    const adjustedDateTime = new Date(d);
    return new Date(adjustedDateTime.setHours(adjustedDateTime.getHours() + 2)).toISOString();
  }

  static removeMinutesAndSeconds (d) {
    const cleanedDate = new Date(d);
    return new Date(cleanedDate.setMinutes(0, 0, 0));
  }
}

export default DateRangeHelper;
