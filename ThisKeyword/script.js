//value of this is not fixed in js
console.log(this); //this --> window object
function foo(...args){
    console.log(this);
    console.log(...args);
}
/******************** Default Binding ********************/
foo();// --> window object

/******************* Implicit Binding ********************/

let obj ={
    name:"xyz",
    age:20,
    foo:foo
}
obj.foo();// --> object

let obj2 ={
    name:"xyz2",
    age:20,
    fun:foo
}
obj2.fun()

/******************** Explicit Binding *******************/

let obj3 ={
    name:"xyz3",
    age:21
}
foo();
// 1. call()
let arr = ["Cricket" , "Hockey"];

foo.call(obj3,arr[0],arr[1])

// 2. apply()
foo.apply(obj3,arr)

// 3. bind() 
// returns function
let xyz = foo.bind(obj3);
console.log(xyz);
xyz();
function fun(cb){
    cb();
}
fun(xyz);

