const express = require("express");
const app = express();
function middleware1(req,res){
    console.log("running middleware1 ")
}

app.get("/",(req,res)=>{
    console.log("running /");
    res.send("home");
})


app.listen(4444,()=>{
    console.log("Server Started");
})