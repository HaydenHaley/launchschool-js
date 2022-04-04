const readline = require('readline-sync');
const SQFEET_IN_SQMETER = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readline.prompt();

console.log("Enter the width of the room in meters:");
let width = readline.prompt();

let areaInMeters = (Number(length) * Number(width));
let areaInFeet = areaInMeters * SQFEET_IN_SQMETER;
console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)