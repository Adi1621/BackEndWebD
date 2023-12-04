const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    console.log("running /");
    res.render("home");
})


app.listen(4444,()=>{
    console.log("Server Started");
})