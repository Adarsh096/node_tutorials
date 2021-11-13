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

app.get('/api/products/:productID/reveiws/:reviewID',(req,res)=>{
    //map method of array will do a certain operation on each element and create a new array:
    res.send('hello world')
})

// we can add query params using a ? and then key=val joined by &
// eg http://domain.com/products?id=8&name=sunday
//try out : http://localhost:5000/api/v1/products/query?search=albany&limit=1
// try out : http://localhost:5000/api/v1/products/query?search=albany
app.get('/api/v1/products/query',(req,res)=>{
    // for a request like : http://localhost:5000/api/v1/query?id=2&name=john
    // output will be : { id: '2', name: 'john' }
    console.log(req.query)
    const {search, limit} = req.query
    let sortedProducts = [...products] // products is imported above
    if(search){
        // filter method takes a function which returns boolean values
        // returns the data from the array where the function returns true
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search);
        });
    }
    if(limit){// all values in the query params are strings. 
        // we cast the strings to the Number below
        // slice method takes start index and stop index(excluded) for an array
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
        return res.status(200).json({'success':true,data:sortedProducts})
    }
    // if search and limit values are not specified then they will be 'undefined'
    // in that case we return all the products.

    //NOTE : always use 'return' keyword when you have conditionals since nodejs will keep on reading the code
    // and we will get errors like can't set headers after the response is sent to the user.
    return res.status(200).json({'success':true,data:sortedProducts});
})



app.all('*',(req,res)=>{
    res.status(404).send(`<h1>could not ${req.method} on ${req.url}</h1>`)
})

app.listen(5000,()=>{
    console.log('running on http://localhost:5000');
})