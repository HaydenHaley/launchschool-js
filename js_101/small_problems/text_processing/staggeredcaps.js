function staggeredCase(string) {
  let offset = 0;
  let returnArray = [];
  let splitString = string.split('');
  for (let index = 0; index < splitString.length; index++) {
    returnArray.push((offset % 2 === 0) ? splitString[index].toUpperCase() : splitString[index].toLowerCase());
    if (/[a-zA-Z]/.test(splitString[index])) {
      offset++;
    }
  }
  return returnArray.join('');
}

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);