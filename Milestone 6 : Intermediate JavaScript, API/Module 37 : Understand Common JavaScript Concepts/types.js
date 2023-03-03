let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = {job: 'Web Develop[er'}
let q = p;
console.log(p, q);

// q = {job: 'Database Management'}
// console.log(p, q);

q.job = 'Software Engineering';
console.log(p, q);