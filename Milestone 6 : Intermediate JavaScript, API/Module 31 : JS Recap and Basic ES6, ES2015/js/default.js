// After coming ES6

function add(first, second = 0){
    const total = first + second;
    return total;
}

const result = add(10);
console.log(result);


function fullName(firstName, lastName = 'Mia'){
    const name = firstName + ' ' + lastName;
    return name;
}

const yourName = fullName('Sakib');
console.log(yourName);