const express = require('express');
const path = require('path')
const app = express()

// serve the static files/assets from the specified directory:
// convention is to use the directory name : static  OR public.
app.use(express.static('./navbar-app'));

// since our index.html is also in the static assets directory we dont need the below  request handler. Try commenting it out and run the app:
/*
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'));
})
*/

app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
});

app.listen(5000,()=>{
    console.log('listening on http://localhost:5000 ...');
});