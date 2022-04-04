function shortLongShort(stringone, stringtwo) {
  let shortString;
  let longString;
  if (stringone.length > stringtwo.length) {
    longString = stringone;
    shortString = stringtwo;
  } else {
    longString = stringtwo;
    shortString = stringone;
  }
  return shortString + longString + shortString;
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"