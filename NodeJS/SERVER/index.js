const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => { //request handler
    const log = `${Date.now()}: ${req.url} New Req Recieved\n`
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("Hello from Server");
    })
    res.end("Hello From Server")
}); 

myServer.listen(8000, () => console.log("Server Started"));
