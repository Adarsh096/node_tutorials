const { readFile, writeFile } = require('fs')
// to use the encapsulation provided for promise declaration :
const util = require('util')


const getText= (path) => {
    return new Promise((resolve,reject)=>{
        // any code inside the promise is executed asynchronously:
        // we use resolve and reject functions for success and error states respectively.
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


// using the util module:
const writeFilePromise = util.promisify(writeFile);


// attaching await (verbose for now):
const start = async() => {
    try{
    const first = await getText('./content/first.txt');
    // nested async call to second ie after above async is done then we do the below call:
    const second = await getText('./content/second.txt');

    // writing to a new file :
    await writeFilePromise('./content/result-sync.txt',`This is the async await approach. contents are : ${first} and ${second}\n`,{flag:'a'})
    console.log(first);
    console.log(second);
    console.log("wrote the entries in : ./content/result-sync.txt")
    } catch(error){
        console.log(error);
    }
}

// calling the async await function :
start();
