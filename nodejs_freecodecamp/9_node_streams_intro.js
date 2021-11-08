// streams extends EventEmitter class:
//import the streams module:
const {createReadStream} = require('fs');

// highwatermark is the flag to control the buffer size
// encoding is the flag to mention the encoding of the content and the actual content will be printed instead of memory addresses :
//NOTE : remove the encoding flag to minimize the data output in the console log:
const stream = createReadStream('./content/big_file.txt',{highWaterMark:9000,encoding:'utf8'});

stream.on('data',(result)=>{
    console.log(result);
    console.log(`${result.length/1000} KB`);
});
// error event listener:
stream.on('error',(err)=>{
    console.log(`error occured : ${err}`);
});

