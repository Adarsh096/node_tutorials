// Here we have an example with arguments for the callback passed to the listeners
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
customEmitter.on('response',(name,age)=>{
    console.log('data recieved again');
    if(
        ( typeof name !== 'undefined' && name )
        && (typeof age !== 'undefined' && age )){
        //do stuff if name and age are defined and not null:
        console.log(`name: ${name} age:${age}`);
    }
    
    
} );

// emitting without additional arguments 
customEmitter.emit('response');
customEmitter.emit('response');
customEmitter.emit('response');
// emitting with additional params:
customEmitter.emit('response','carie',27);
