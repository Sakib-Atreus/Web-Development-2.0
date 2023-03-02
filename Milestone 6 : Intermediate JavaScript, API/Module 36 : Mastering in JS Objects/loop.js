const numbers = [12, 54, 65, 3, 54];
for(const number of numbers){
    console.log(number);
}

// for of can not used with objects
const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// cannot work in objects

// for(const key of bottle){
//     console.log(key);
// }

const keys = Object.keys(bottle);
for(const key of keys){
    // console.log(key);
    console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    console.log(key, bottle[key]);
}

// advanced
const pair = Object.entries(bottle);
console.log(pair);
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);
}