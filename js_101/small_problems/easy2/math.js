function multiply(numberone, numbertwo) {
  return numberone * numbertwo;
}

function square(number) {
  return multiply(number, number);
}

console.log(multiply(5, 3) === 15); // logs true
console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true