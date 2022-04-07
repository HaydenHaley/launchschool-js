function formattedTime(timeString) {
  let stringTime = timeString.split(':');
  return stringTime.map(item => Number(item));
}

function afterMidnight(timeString) {
  let [hours, minutes] = formattedTime(timeString);
  if (hours >= 24) {
    hours -= 24;
  }
  let totalMinutes = minutes + (hours * 60);
  return totalMinutes;
}

function beforeMidnight(timeString) {
  let [hours, minutes] = formattedTime(timeString);
  if (hours === 0 && minutes === 0) return 0;
  let totalMinutes = minutes + (hours * 60);
  let minutesBefore = (24 * 60) - totalMinutes;
  return minutesBefore;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);