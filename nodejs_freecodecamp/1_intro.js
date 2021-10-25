//Node js does not have a window object since there is no browser.

const amount = 12;

if(amount<10){
    console.log("small number");
}
else{
    console.log("large number");

}
console.log(`Hey there!!`);

// Node has a few global variables, some of them are:

//__dirname : path to the current directory
//__filename : file name with full path
//require : function to use modules (CommonJS)
//module : info about the current module(file)
//process : info about the env where the program is being executed


console.log(__dirname)
console.log(__filename)

// we have set interval and setTimeout:
setInterval(()=>{// every 1 second print hello world
    console.log('hello world')
},1000)

