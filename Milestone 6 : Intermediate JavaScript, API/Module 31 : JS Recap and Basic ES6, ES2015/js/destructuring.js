const fish =  {
    name: 'Hilsha',
    price: 700,
    address: 'padma'
}

const name = fish.name;
console.log(name);

const {price, address} = fish;
console.log(price, address);
console.log(address);

const {myName, age} = {myName: 'Sakib', age:23}
console.log(myName);
console.log(age);


// array destructuring
const [first, second] = [44, 55, 66, 77];
console.log(first, second);

const ss = ['samiul', 'islam',  'sakib'];
const [previous, old, newss] = ss;
console.log(previous);

function getNames(){
    return ['Alim', 'Halim'];
}

const [cousin, cousin2] = getNames();
console.log(cousin, cousin2);
