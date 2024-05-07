//Importing via require
const logFunc = require('./logger');

logFunc("JavaScript");


//OS Module
const os = require('os');

let totalmemory = os.totalmem();
let freememory = os.freemem();

console.log(`Total memory:${totalmemory}`);
console.log(`Free memory:${freememory}`);
