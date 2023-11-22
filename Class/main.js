class Vehicle{
    constructor(name,price,model){
            this.name=name;
            this.price=price;
            this.model=model;
            
    }
    /*Set keyword*/ 
    set setPrice(price){
        
        this.price=price;
    }
}

let vehicle1=new Vehicle("BMW",15000000,2025);
vehicle1.setPrice=30000000;
console.log(vehicle1)

let vehicle2=new Vehicle("Defender",20000000,2025);
console.log(vehicle2)

let vehicle3=new Vehicle("Mustang",10000000,1968);
console.log(vehicle3)


class Student{
    constructor(name,rollno,grade){
        this.name=name;
        this.rollno=rollno;
        this.grade=grade;
    }
}
let student1=new Student("Aditya Kanswal",2110991621,"A+");
console.log(student1);

/*****************Inheritance****************/
class Car extends Vehicle{
    constructor(name,price,model,color){
        super(name,price,model);
        this.color=color;
    }
}
let car1=new Car("Audi",100000000,2026,"Black");
console.log(car1);