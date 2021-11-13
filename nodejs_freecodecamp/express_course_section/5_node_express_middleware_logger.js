// defining a simple function to log the requests:
const logger = function logger(req,res,next){
    const method = req.method;
    const url = req.url;
    const time = new Date();
    let timestamp = `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    console.log(timestamp,method,url);
    // each middleware must call the next()
    // otherwise the browser will be stuck
    next();
}


// exoporting the middleware by adding properties with same name key and value in the module.exports:
module.exports = {logger};
