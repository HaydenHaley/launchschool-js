/* 
rules:
ending in 1 use -st
ending in 2 use -nd
ending in 3 use -rd
all others use -th

if ending in a teen (11-13, inclusive) ignore other rules and use -th 
*/

function centuryWithSuffix(century) {
  const SPECIAL_CASES = {
    '1': 'st',
    '2': 'nd',
    '3': 'rd' 
  };

  century = String(century);
  // if a teen, or if not one of the special cases, use -th
  if (century[century.length - 2] === '1' || !Object.keys(SPECIAL_CASES).includes(century[century.length - 1])) {
    return century + 'th';
  }
  return century + SPECIAL_CASES[century[century.length - 1]];
}

function century(year) {
  const YEARS_IN_CENTURY = 100;
  let centuryNumber = 1;
  while (year > YEARS_IN_CENTURY) {
    centuryNumber++;
    year -= YEARS_IN_CENTURY;
  }
  return centuryWithSuffix(centuryNumber);
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"