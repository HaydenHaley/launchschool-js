const readline = require('readline-sync');

console.log('Enter a noun:');
let noun = readline.prompt();

console.log('Enter a verb:');
let verb = readline.prompt();

console.log('Enter an adjective:');
let adjective = readline.prompt();

console.log('Enter an adverb:');
let adverb = readline.prompt();

console.log(`One day, a women saw a ${noun} outside.`);
console.log(`She was so impressed by how well it could ${verb} that she ${adverb} grabbed it and brought it home.`);
console.log(`She posed it to be ${verb}ing like before and covered it in resin, so it could look ${adjective} in her house forever.`);