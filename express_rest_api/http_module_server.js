const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        console.log("Hit / endpoint...")
        res.write('Hello World');
        res.end();
    }
    else if(req.url == '/api/courses'){
        console.log("Hit /api/courses endpoint...")
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log("listening on port 3000...\n access endpoints on http://localhost:3000/");