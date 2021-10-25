const express = require('express');
const app = express();

const portApp = process.env.port || 3000;

app.get('/',(req,res)=>{
    console.log("This goes in the console")
    res.send("welcome to the app server")
})

app.listen(portApp,()=>{
    console.log("whatsupp")
    console.log("running on http://localhost:"+portApp)
});


