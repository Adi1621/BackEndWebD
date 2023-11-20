let obj={
    name:"Aditya",
    age:21,
    fun:()=>{
        console.log(this);
    }
}
obj.fun();
//arrow function cannot bind this
// takes value from lexical environment

let obj2={
    name:"Aditya",
    age:21,
    foo:function(){
        let fun=()=>{
            console.log(this);
        }
        fun();
    }
}

obj2.foo();

function foo2(){
    let fun2=()=>{
        console.log(this);
    }
    fun2();
}
foo2();