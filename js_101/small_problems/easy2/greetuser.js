const readline = require('readline-sync');

console.log("Hello there! What's your name?");
let name = readline.prompt();

if (name[name.length - 1] === '!') {
  name = name.slice(0, -1);
  console.log(`HELLO THERE, ${name.toUpperCase()}, WHY ARE WE YELLING?`);
} else {
  console.log(`Hello there, ${name}! It's a pleasure to meet you!`);
}