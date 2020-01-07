const path = require('path');
const os = require('os');
const EventEmitter = require('events');

const Logger = require('./logger')

const logObj = new Logger();

//Listens for a event
logObj.on('messageLogged', (arg) => {
    console.log("Listener Called!", arg);

});

logObj.log("I just emitted an event!")


// let pathObj = path.parse(__filename);
// console.log(`Total Mem: ${os.totalmem()}`);
// console.log(`Free Mem: ${os.freemem()}`);