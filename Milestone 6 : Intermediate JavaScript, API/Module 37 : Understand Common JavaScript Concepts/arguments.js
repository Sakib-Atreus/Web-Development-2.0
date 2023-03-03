function sum(a,b,c){
    console.log(arguments);
    console.log(arguments[4]);
    const args = [...arguments];
    console.log(args);
    // console.log = a+b+c;
    const result = a+b+c;
    return result;
}
// console.log(arguments);
const total = sum(45, 34, 23, 67, 89);
console.log(total);
console.log(sum.length);