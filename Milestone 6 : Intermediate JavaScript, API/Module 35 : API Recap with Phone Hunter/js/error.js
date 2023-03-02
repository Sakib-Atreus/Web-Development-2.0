fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log(error));

try{
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);
}
catch{

}

// synchronous asynchronous
console.log(1);
setTimeout(() => {
    console.log(2);
}, 3000)
console.log(7);
console.log(9);
console.log(0);