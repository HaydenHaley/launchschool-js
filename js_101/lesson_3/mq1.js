const MESSAGE = "The Flintstones Rock!";

let repetitions = 10;
for (let index = 0; index <= repetitions; index++) {
  console.log(MESSAGE.padStart(MESSAGE.length + index));
}