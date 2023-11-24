let express = require("express");
let app = express();
let path = require("path");

// app.use(express.urlencoded({extended:true})); 

app.set('view engine', 'hbs');

app.get("/home", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about", {
        name: "Aditya Kanswal",
        age: 21
    });
});

app.listen(4444, () => {
    console.log("server started at port 4444");
});



/*
Step 1 Require express
Step 2 Calling express 
Step 3 Starting Server
*/