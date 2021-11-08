const http = require('http');
const fs = require('fs');

//create server without the streams
/*
http.createServer((req,res)=>{
    const text = fs.readFileSync('./content/big_file.txt','utf8')
    res.end(text)
}).listen(5000,()=>{
    console.log("running on http://localhost:5000")
});
*/

//create server with streams :
http.createServer((req,res)=>{
    if(req.url == '/'){
        const textStream = fs.createReadStream('./content/big_file.txt',{encoding:'utf8'})
        
        textStream.pipe(res);

        textStream.on('error',(err)=>{
            console.log(err)
            // res.end(err);
        })
    }
    if(req.url=='/mypage'){
        console.log('visiting my page...');
        res.writeHead(200,{'Content-Type':'text/html'});
        let mypagestream = fs.createReadStream(__dirname+'/content/sample.html','utf8');
        mypagestream.pipe(res);
    }

}).listen(5000,()=>{
    console.log("running on http://localhost:5000")
});

