// Here we have an example showing the use of events in the http module
// import the class from events module:
const EventEmitter = require('events');
const http = require('http')
//creating the object of the emitter class:
const customEmitter = new EventEmitter()

// on() method will listen for specific events
// emit() will emit to create the event

//instead of passing a callback to the createServer() we are going to add a listener:

const server = http.createServer()
// adding listener 
// this listener will respond to any request on any endpoint with the message Welcome:
server.on('request',(req,res)=>{
    res.end('Welcome');
});



server.listen(5000,()=>{
    console.log("server running on port http://localhost:5000")
});