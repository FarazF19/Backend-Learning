//Building Http server
const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    if(req.url==="/favicon.ico") return res.end();
    const log = `${Date.now()} : ${req.method} ${req.url} Hey there\n`
    fs.appendFile('log.txt',log, (err,data)=>{
        switch (req.url){
            case "/":
            if(req.method==='GET') return  res.end('Homepage')
            break;
            case "/about":
                res.end('Iam Faraz');
            break;
            case '/signup':
            if(req.method==="GET") res.end("This is a Signup Form");
            else if(req.method==='POST'){
                //DB Query
                res.end('Success')
            }
            default: 
                res.end('404');
        }
    })
    
})

myServer.listen(8000,()=>console.log("Server Started!"));