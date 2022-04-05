function logInBox(string) {
  let dashesNeeded = string.length + 4;
  let paddedString = string.padStart(string.length + 2).padEnd(string.length + 4);
  console.log('+' + '-'.repeat(dashesNeeded) + '+');
  console.log('|'.padEnd(dashesNeeded + 1) + '|');
  console.log('|' + paddedString + '|');
  console.log('|'.padEnd(dashesNeeded + 1) + '|');
  console.log('+' + '-'.repeat(dashesNeeded) + '+');
}

logInBox('To boldly go where no one has gone before.');
logInBox('');