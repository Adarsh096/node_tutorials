// creating a server app using http module:

const http = require('http');
const {readFileSync} = require('fs');

const server = http.createServer((req,res)=>{
    console.log('user hit the server');
    console.log(req.method)
    console.log(req.url)
    if(req.url === '/'){
        //writeHead() is used to provide metadata to the response :
        // add mime-types :
        // syntax is : type/subtype or type/subtype;parameter=value
        res.writeHead(200,{'content-type':'text/html'})

        // write the body of the response :
        res.write('<h1>home page</h1>');

        // we always have a method res.end(data[,encoding]...)
        res.end(); 
    }
    else if(req.url === '/file'){
        res.writeHead(200,{'content':'text/html'});
        res.write(readFileSync('index.html'));
        res.end();
    }
    else{//404
    res.writeHead(404,{'content-type':'text/html'})
    res.write('<h1>404 Page Not Found</h1>')
    res.end();
    }
})

// port 80 is for HTTP and port 443 is for HTTPS
server.listen(5000,()=>{
    console.log('running on port http://localhost:5000 ...');
});
