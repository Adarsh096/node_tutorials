/*
since a middleware works on the request object and then relays the req and res to other middlewares,
we can alter the request object and add any custom value eg : add auth token to the request based on
a criteria.
*/

// NOTE : we can not access req.params in the middlewares. refer (https://github.com/expressjs/express/issues/2088)

const express = require('express');
const app = express();

const {logger} = require('./5_node_express_middleware_logger');

// defining a middleware :
const authorize = function(req,res,next){
    // altering the req object
    
    // let {id} = req.params; // not valid for middleware.
    console.log(`in the middleware : ${req.params.id}`);// it will be undefined as it is not accessible.

    // if(Number(id)>1){ // authorizing the access of data with id > 1
        console.log('adding auth token');
        req.mytoken = 'asl-456-t67-990';
    // }
    console.log('calling the next()');
    next();
}


// applying the middleware :
app.use([authorize]);

app.get('/',(req,res)=>{
    res.send('hello there!');
})

app.get('/api/v1/:id',(req,res)=>{
    console.log(req.params);
    if(req.mytoken){
        return res.status(200).send('You have the access to the content');
    }
    return res.status(401).send('Unauthorized');
})


app.listen(5000,()=>{
    console.log('running on http://localhost:5000/ ...');
})