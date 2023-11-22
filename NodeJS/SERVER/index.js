const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {   //request handler
    if(req.url === "/favicon.ico") return res.end(); 
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("Hello from Server");
    })
    res.end("Hello From Server")
}); 

myServer.listen(8001, () => console.log("Server Started"));
