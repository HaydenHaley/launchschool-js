function timeOfDay(rawMinutes) {
  // extracts sign
  let sign = Math.sign(rawMinutes);
  rawMinutes = Math.abs(rawMinutes);

  // extracts minutes
  let minutes = rawMinutes % 60;

  // extracts hours
  rawMinutes -= minutes;
  let hours = rawMinutes / 60;

  // if the time goes over the one-day limit, ignore excess days
  while (hours > 24 || (minutes > 0 && hours > 23)) {
    hours -= 24;
  }

  // accounts for negatives here
  if (sign < 0) {
    hours = 23 - hours; // 23 to account that hours start at 0
    minutes = 60 - minutes;
  }


  // adds leading zero to hour/minute if needed
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  return hours + ':' + minutes;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");