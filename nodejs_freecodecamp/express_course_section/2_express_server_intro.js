// install express :
// $ npm install express@4.17.1 --save 

//import the module :
const express = require('express');

const app = express()

// GET
app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})
// fall back api.
// CAUTION : Put it at the end otherwise all the responses will be overriden to 404 errors:
app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>');
});

app.listen(5000,()=>{
    console.log('running on http://localhost:5000 ...');
})


