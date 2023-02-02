var shoppingCart = {
    books: 2,
    pen: 5,
    chair: 1
}

var pen1 = shoppingCart.pen;
console.log(pen1);

var pen2 = shoppingCart['pen'];
console.log(pen2);

var propertyName = 'books';
var propertyValues = shoppingCart[propertyName]
console.log(propertyName, propertyValues)

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
console.log(properties, propertiesValues);


// set value property
shoppingCart.books = 7;
console.log(shoppingCart);
shoppingCart['books'] = 18;
console.log(shoppingCart);
shoppingCart[propertyName] = 27;
console.log(shoppingCart);
