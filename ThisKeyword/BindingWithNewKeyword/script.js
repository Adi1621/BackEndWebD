function fun(name,age){
    this.name=name;
    this.age=age;
}

let obj = new fun("Aditya",21);
console.log(obj);