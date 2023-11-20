console.log("running file1");
let file2=require("./file2");

function cat(){
    console.log("Cat says meww");
}

let food = "Fish";

module.exports={
     cat,
    food
}