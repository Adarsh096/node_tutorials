// file system module is named as 'fs'
// we have a synchronous and async approach.

//sysnchronous :
const {readFileSync,writeFileSync} = require('fs');


const first = readFileSync('./content/first.txt','utf-8');
const second = readFileSync('./content/second.txt','utf-8');

console.log(first,second);

// writing to a file. Creates a file if not exists otherwise overwrite the file:
writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`);

// to append to the file :
writeFileSync('./content/result-sync.txt',`Here is the result : ${first},${second}`,{flag:'a'});

// Asynchronous file:
const {readFile,writeFile} = require('fs');

readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})

// we provide the encoding to get the text and not the buffer:

readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(result);
})

// In async approach to get synchronous behaviour we put callbacks inside callbacks but this leads to callback hell issue...

//callback hell simulation:
//just google it:

//alternatives are : promises and async-await




