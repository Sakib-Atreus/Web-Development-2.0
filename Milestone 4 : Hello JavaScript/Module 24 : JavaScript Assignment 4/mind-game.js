function mindGame(positiveNumber){
    if(typeof positiveNumber !== 'number'){
        return 'Please input a integer number.';
    }
    let numberMul = positiveNumber * 3;
    let numberSum = numberMul + 10;
    let numberDiv = numberSum / 2;
    let numberSub = numberDiv - 5;

    return numberSub;
}

const test = mindGame(5);
console.log(test);