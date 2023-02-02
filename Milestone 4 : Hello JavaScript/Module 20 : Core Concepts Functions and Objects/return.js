function bringSingara(money){
    var singaraPrice = 5;
    console.log('Per singara price : ', singaraPrice);
    var quantity = money / singaraPrice;
    
    return quantity;
}

var myTaka = 70;
console.log("Given money : ", myTaka);
var singaras = bringSingara(myTaka);
console.log('Eating Singaras : ', singaras);