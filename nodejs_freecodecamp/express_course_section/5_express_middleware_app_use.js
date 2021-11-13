// req ==> middleware ==> response
const express = require('express');

const app = express();

const {products} = require('../node-express-course/02-express-tutorial/data');

const {logger} = require('./5_node_express_middleware_logger');
// middleware is any function to which the request is passed to, before passing it to  the actual request handler for response.

// moving this code to another node module and later importing it:
/*
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
*/

// We can apply multiple middlewares to all the api by app.use()
app.use([logger]);

// or we can selectively apply middlewares to paths matching the pattern:
//Note : Since we have registered two middlewares for /api/v1 we will get two console.logs for them:
app.use('/api/v1',[logger]);


app.get('/',(req,res)=>{
    return res.status(200).send('<h1>Home Page</h1>');
});

app.get('/api/v1/products',(req,res)=>{
    return res.status(200).json(products);
});

app.listen(5000,(req,res)=>{
    console.log('running on http://localhost:5000 ...');
})