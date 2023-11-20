console.log("running file");
function add(a,b){
    return a+b;
}

let x = 10;

// module.exports.add=add;
// module.exports.x=x;/

module.exports={
    x,
    add
}