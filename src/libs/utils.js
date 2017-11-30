import getDaysInMonth from 'date-fns/get_days_in_month';

const MONTHS = ["Jan", "Fev", "Mar", "Avr", "Mai", "Juin", "Jui", "Août", "Sept", "Oct", "Nov", "Dec"];
const DAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const HOURS = ["00h00", "01h00", "02h00", "03h00", "04h00", "05h00", "06h00", "07h00", "08h00",
  "09h00", "10h00", "11h00", "12h00", "13h00", "14h00", "15h00", "16h00", "17h00", "18h00",
  "19h00", "20h00", "21h00", "22h00", "23h00"];

export function fillArray (consumption, labelsLength) {
  const cpt = [];
  for (let i = 0; i <= labelsLength; i++) {
    if (consumption[i]) {
      cpt[i] = consumption[i];
    } else {
      cpt[i] = null
    }
  }
  return cpt;
}

export function getLabels (type) {
  const labels = {
    year: () => {
      return MONTHS;
    },
    month: () => {
      const currentMonth = new Date().getMonth() + 1;
      const stop = getDaysInMonth(new Date());
      const daysOfMonth = [];
      for (let i = 1; i <= 24; i++) {
        daysOfMonth.push(`${(i < 10 ? '0' + i : i)}/${currentMonth}`);
      }
      return daysOfMonth;
    },
    week: () => {
      return DAYS;
    },
    day: () => {
      return HOURS;
    }
  }
  return labels[type]();
}
