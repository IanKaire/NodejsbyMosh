//Event Emitter Module
const EventEmitter = require('node:events');

const eventEmitterA = new EventEmitter();
const eventEmitterB = new EventEmitter();

//Listen to an event
eventEmitterA.on('Message logged', () => {
     console.log('Your message');
});

//Raise an event
eventEmitterA.emit("Message logged");


//Listen to an event before emitting it 'the order matters'

//Event Arguments
eventEmitterB.on('Arguments', (arg) => {
    console.log('Your arguments', arg);
});

//Raise an event
eventEmitterB.emit("Arguments", {id: 1, url: 'https:/'});

