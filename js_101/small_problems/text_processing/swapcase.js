function swapCharCase(char) {
  if (!/[a-zA-Z]/.test(char)) return char; // ignore non-alphabetical characters
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  }
  return char.toUpperCase();
}

function swapCase(string) {
  return string.split('').map(swapCharCase).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"