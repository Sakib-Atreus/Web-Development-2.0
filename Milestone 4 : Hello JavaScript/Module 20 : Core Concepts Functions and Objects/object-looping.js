var shoppingCart = {
    mobile: 2,
    laptop: 2,
    monitor: 1,
    keyboard: 1,
    mouse: 2
}

var keys = Object.keys(shoppingCart);
console.log(keys);
var values = Object.values(shoppingCart);
console.log(values);

// using loop
for(var i=0; i<keys.length; i++){
    var propertyName = keys[i];
    var propertiesValues = shoppingCart[propertyName];
    console.log(propertyName, propertiesValues);
}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value); 
}