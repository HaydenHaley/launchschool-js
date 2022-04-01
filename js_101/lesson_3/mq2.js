let munstersDescription = "The Munsters are creepy and spooky.";
let stringArray = munstersDescription.split('');

for (let index = 0; index < stringArray.length; index++) {
  if (stringArray[index] === stringArray[index].toUpperCase()) {
    stringArray[index] = stringArray[index].toLowerCase();
  } else {
    stringArray[index] = stringArray[index].toUpperCase();
  }
}

console.log(stringArray.join(''));