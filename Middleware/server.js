const express = require("express");
const app = express();
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

function middleware1(req, res, next) {
    console.log("running middleware1 ");
    next();
}
function middleware2(req, res, next) {
    console.log("running middleware2 ");
    next();
}
function middleware3(req, res, next) {
    console.log("running middleware3 ");
    next();
}

app.get("/", (req, res) => {
    console.log("running /");
    res.send("home");
})


app.listen(4444, () => {
    console.log("Server Started");
})