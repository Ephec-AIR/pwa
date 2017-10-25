/**
 * Give a date range between start of day, week, month, year and now
 */

class DateRangeHelper {
  static get dayRange() {
    const end = new Date();
    const start = new Date().setHours(0, 0, 0, 0);
    return {start, end}
  }

  static get weekRange () {
    const end = new Date();
    const day = end.getDay();
    // adjust when day is sunday
    const diff = end.getDate() - day + (day == 0 ? -6 : 1);
    const start = new Date(d.setDate(diff));
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
}

export default DateRangeHelper;
