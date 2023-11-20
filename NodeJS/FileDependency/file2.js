console.log("running file2");

let file1=require("./file1");

function dog(){
    console.log("dog barks");
}

let food = "Bone";

module.exports={
    dog,
    food
}