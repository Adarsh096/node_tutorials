const http = require("http")
const fs = require("fs")

// __dirname gives the current directory name:
console.log(__dirname + '/content/big_file.txt');

var myreadstream = fs.createReadStream(__dirname + '/content/big_file.txt');

// var myreadstream = fs.createReadStream(__dirname + '/content/big_file.txt','utf8');
    // use above way or the below one if you have more flags to work with:
// var myreadstream = fs.createReadStream(__dirname + '/content/big_file.txt',{encoding:"utf8"});

/*
myreadstream.on('data',function(chunk){
    console.log("new chunk received");
    console.log(chunk);
});
*/

// now we can pass the data read in smaller chunks without waiting for the whole file to be read:
// we use writable stream to do that :
let mywritestream  = fs.createWriteStream(__dirname + '/content/big_file_receiver.txt')
// this event listener will be executed after the above one but it will be executed for every 'data' event
// such that we read 16KB data and we write to the new file and then do the same thing till readstream ends.
/*
myreadstream.on('data',function(chunk){ 
    console.log("new chunk received again...");
    // console.log(chunk);
    mywritestream.write(chunk);
});
*/

// PIPE : allows passing of the readable streams to a writestream
// above event listeners can be replaced with :
console.log(`using pipe to create the file : ${__dirname + '/content/big_file_receiver.txt'}`)
myreadstream.pipe(mywritestream);


