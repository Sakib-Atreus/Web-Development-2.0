const number = [220, 30, 40, 50, 60];
const maxNumber = Math.max(...number);
console.log(maxNumber);
const minNumber = Math.min(...number);
console.log(minNumber);

// fortest:
// const number2 = number;
// const number2 = [number];
const number2 = [...number];
number.push(1110);
number2.push(7027);
console.log(number);
console.log(number2);


const numbers2 = [100, 200, ...number, 77];
number.push(1110);
numbers2.push(7027);
console.log(numbers2);