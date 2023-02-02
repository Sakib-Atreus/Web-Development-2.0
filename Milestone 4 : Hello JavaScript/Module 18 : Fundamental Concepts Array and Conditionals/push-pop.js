var  numbers = [223, 34, 56, 78, 90];
console.log(numbers);
numbers.push(63);
console.log(numbers);
numbers.pop();
console.log(numbers);

var friends = ["Balam", "Kalam", "Salam"];
console.log(friends);
friends.push("Jamal");
friends.push("Mannan");
console.log(friends);
friends.pop();
console.log(friends);


var gf = ["SS", "ST", "SR", "SU", "SZ"];
console.log(gf);
gf.shift("SS");
console.log(gf);
gf.unshift("ss");
console.log(gf);
gf.splice(2, 0, "SD");
console.log(gf);