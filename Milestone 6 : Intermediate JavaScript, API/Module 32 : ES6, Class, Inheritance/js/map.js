const numbers = [2, 4, 6, 8, 10];
const output = [];
for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}
console.log(output);


function getDoubles(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

// map

const doubleIt = num => num * 2;

const result = getDoubles(numbers);
console.log(result);

const makeDouble2 = numbers.map(doubleIt);
console.log(makeDouble2);


// final map
const makeDouble = numbers.map(ss => ss * 2);
console.log(makeDouble);

const makeMultiply = [2, 4, 6, 8, 10].map(sr  => sr * sr);
console.log(makeMultiply);