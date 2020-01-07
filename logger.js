const EventEmitter = require('events');

class Logger extends EventEmitter {

    log(message) {
        console.log("Message Logged!");
        this.emit('messageLogged', { id: 1, message: message });
    }


}


module.exports = Logger;