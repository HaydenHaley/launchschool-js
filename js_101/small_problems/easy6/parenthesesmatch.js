function xor(conditionalone, conditionaltwo) {
  // if one true and not the other, return true. otherwise return false.
  return (conditionalone && !conditionaltwo) || (!conditionalone && conditionaltwo);
}

function isBalanced(string) {
  // looks for the first open parentheses, stores the position.
  // looks for the first closed parentheses, stores the position.
  // if both are -1, return true. If one is but not the other, return false. Otherwise, keep checking.
  // return to start and check again, but start after the indexes of the last discovered ones.
  let lastOpen = 0;
  let lastClosed = 0;
  while (lastOpen < string.length) {

    lastOpen = string.indexOf('(', lastOpen);
    lastClosed = string.indexOf(')', lastClosed);

    if (lastOpen === -1 && lastClosed === -1) {
      // if no unmatched pairs remain
      return true;
    } else if (xor(lastOpen === -1, lastClosed === -1)) {
      // if one exists without the other
      return false;
    } else if (lastOpen > lastClosed) {
      // if a pair is found but they're mismatched - )( istead of ()
      return false;
    }

    // starts the next search after the last checked pair
    lastOpen++;
    lastClosed++;
  }
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);