const express = require('express');
const app = express();

// generally in the env for nodejs apps we export an env PORT or port
const portApp = process.env.PORT || 3000;

// routes definitions:
app.get('/',(req,res)=>{
    res.send("hello world");
});

app.get('/api/courses',(req,res)=>{
    res.send([1,2,3]);
});


app.get('/api/course/:id',(req,res)=>{
    var id = req.params.id;
    res.send(`here is your value for ${id}`);
});

// app.post();
// app.put();
// app.delete();

app.listen(portApp,()=>{
    console.log(`listening on port ${portApp}. Hop on to http://localhost:${portApp}`)
})