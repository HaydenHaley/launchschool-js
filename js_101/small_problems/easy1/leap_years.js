const CALENDER_SWITCH_YEAR = 1752;

function isLeapYear(year) {
  if (year <= 0) return false; // guard clause in case of invalid input

  if (year % 4 === 0) {
    if (year <= CALENDER_SWITCH_YEAR) {
      return true;
    } else if (year % 100 === 0) {
      return year % 400 === 0;
    }
    return true;
  }
  return false;
}

isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true

// if not divisible by 4, false.
// if before calender switch year, true.
// if divisible by 100, true only if also divisible by 400.
