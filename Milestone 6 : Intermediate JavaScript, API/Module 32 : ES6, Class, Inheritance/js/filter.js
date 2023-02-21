const numbers = [12, 24, 56, 72, 1, 7, 3, 2, 5, 18];

const bigNums = numbers.filter(number => number > 20);
console.log(bigNums);
const tiny = numbers.filter(n  => n < 10);
console.log(tiny);
const even = numbers.filter(e => e  % 2);
console.log(even);

const products = [
    {id: 1, name:'laptop', price: 40000},
    {id: 1, name:'mobile', price: 20000},
    {id: 1, name:'watch', price: 5000},
    {id: 1, name:'tablet', price: 30000}
];

const expensive = products.filter(product => product.price > 20000);
console.log(expensive);