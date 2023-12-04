const express = require("express");
const app = express();
app.use(middleware1);
function middleware1(req,res,next){
    console.log("running middleware1 ")
    next();
}

app.get("/",(req,res)=>{
    console.log("running /");
    res.send("home");
})


app.listen(4444,()=>{
    console.log("Server Started");
})