// create object using object literals
const player = {};
player.name = 'Small Nirob';
player.specialty = 'batsman';
player.bat = function(){
    console.log('swing you bat');
}
console.log(player);
player.bat();

const student = {
    name: 'Kil Bil',
    job: 'khai andey',
    ball: function(){
        console.log('throw the ball')
    },
    salary: 100000
}

// object constructor
const person = new Object();
console.log(person);

// object create method
// const item = Object.create(null);
const atel = Object.create(student);
console.log(atel.name);

// class
class Person{
    // name = 'abul';
    // address =  'sodor ghat';
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

const  person1 = new Person('SS', 56, 'Niruddesh');
console.log(person1);

// function
function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('elon', 32);
console.log(tesla);