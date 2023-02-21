// arrow function  (shortcut wy to using function)

const add = (first, second) => first + second;
const result = add(7,  2);
console.log(result);

// no parammeter arrow
const getPie = () => 3.14;
const pie = getPie(3.14);
console.log(pie);

// one parameter
const userTimes  = num => num * 7;
const calculate = userTimes(7);
console.log(calculate);

// multi line arrow function
// if you want to return something, use the  return
const doMath = (x, y, z)  => {
    const firstSum = x + y;
    const  secondSum = y + z;
    const multiply = firstSum * secondSum;
    const final = multiply / 2;
    return final;
}

const finalResult = doMath(1,2,3);
console.log(finalResult);

