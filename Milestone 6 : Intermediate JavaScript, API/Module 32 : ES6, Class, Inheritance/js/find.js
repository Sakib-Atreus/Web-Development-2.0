const numbers = [12, 24, 56, 72, 1, 7, 3, 2, 5, 18];

const fives = numbers.find(num => num % 3 === 0);
console.log(fives);
const fivesAll = numbers.filter(num => num % 3 === 0);
console.log(fivesAll);

const products = [
    {id: 1, name:'laptop', price: 40000},
    {id: 1, name:'mobile', price: 20000},
    {id: 1, name:'watch', price: 5000},
    {id: 1, name:'tablet', price: 30000}
];

const cheap = products.find(product => product.price < 10000);
console.log(cheap);

