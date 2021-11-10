const express = require('express');
const {products} = require('../node-express-course/02-express-tutorial/data')

const app = express();

app.get('/',(req,res)=>{
    // in api style servers we send json data:
    res.status(200).json({name : 'adarsh',age:'37'});
});
 
app.get('/api/products',(req,res)=>{
    res.status(200).json(products);
})

app.get('/api/products/:productId',(req,res)=>{
    let {productId} = req.params;
    console.log(productId);
    //find looks for the first object inside an array which matches the given condition:
    // bonus : we have reverse() method on arrays too.
    const singleProduct = products.find((products)=> products.id === Number(productId));
    res.json(singleProduct);
    if(!singleProduct){
        res.status(404).send("product does not exists");
    }

})

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>could not ${req.method} on ${req.url}</h1>`)
})

app.listen(5000,()=>{
    console.log('running on http://localhost:5000');
})