// import the class from events module:
const EventEmitter = require('events');

//creating the object of the emitter class:
const customEmitter = new EventEmitter()

// on() method will listen for specific events
// emit() will emit to create the event

//emitting before registering a listener will have no effect :
customEmitter.emit('response');

customEmitter.on('response',()=>{
    console.log('data recieved');
} );

// we can have multiple event listeners too :
customEmitter.on('response',()=>{
    console.log('data recieved again');
} );


customEmitter.emit('response');
customEmitter.emit('response');
customEmitter.emit('response');
customEmitter.emit('response');
