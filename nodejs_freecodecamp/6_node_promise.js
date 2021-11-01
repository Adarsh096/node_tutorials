const { readFile } = require('fs')

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

// call to a promise:
getText('./content/first.txt')
.then((result)=>{ console.log(result)})
.catch((err)=> console.log(err))

