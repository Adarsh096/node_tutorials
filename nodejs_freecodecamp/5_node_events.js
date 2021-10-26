// event loop : Allows nodejs to do non-blocking IO even if it is single threaded.
//https://nodejs.dev/learn/the-nodejs-event-loop


// javascript is single threaded and synchronous.

console.log("first");
setTimeout(()=>{
    console.log("second");
},0);// after 0 seconds execute the callback
console.log("third");
console.log("fourth");
setTimeout(()=>{
    console.log("fifth");
},0);

// Asynchronous code gets registered and offloaded and later called after all codes ahead are done.

// setInterval executes at a given interval:

setInterval(()=>{
    console.log("sixth");

},2000); // every 2 secs

console.log("seventh");

