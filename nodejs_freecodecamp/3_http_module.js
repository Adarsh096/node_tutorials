const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to the home page");
    }else if(req.url ==='/about'){
    res.write("welcome to my  about page");
    res.end();
    }else{
        res.end(`<h1>Oopps 404 Not Found</h1>
        <p>We could not find the page you are looking for</p>
        <a href="/">back home</a>`)
    }
})

server.listen(5000,()=>{
    console.log("running on port 5000...")
});