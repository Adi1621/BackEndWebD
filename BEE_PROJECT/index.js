const express = require("express");

const app = express();

app.listen(7000, () => { console.log("server started") });

app.get("/", (req,res) => {
    return res.send("Hi form server");
})
