const shopping = [
    { name: 'Shirt', price: 700},
    { name: 'Pant', price: 1100},
    { name: 'Shoe', price: 1200}
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
    }
    return sum;
}

const expense = totalCost(shopping);
console.log('Total expense today : ', expense);