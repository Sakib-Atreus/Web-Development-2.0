function greeting(greetingHandler, name){
    // console.log(person);
    greetingHandler(name);
}
// const name = 'Halim mama';
// const numbers = [45, 23, 12];
// const laptop = {price: 70000, brand: 'hp', memory: '16gb'};
// greeting(laptop);

function greetingHandler(name){
    console.log('Good Morning', name);
}

greeting(greetingHandler);

greeting(greetingHandler, 'SS');
greeting(greetingHandler, 'SR');
greeting(greetingHandler, 'Hate Me');

function submitHandler(){
    console.log('Submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)