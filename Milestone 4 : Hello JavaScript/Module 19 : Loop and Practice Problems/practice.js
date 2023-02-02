var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);
var bananaIndex = fruits.indexOf('Banana');
fruits[bananaIndex] = 'Mango';
console.log(fruits);

fruits[2] = 'Banana';
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);
fruits.pop('Watermmelon');
console.log(fruits);