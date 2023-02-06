function factorial(numbers){
    let result = 1;
    for(let i = 1; i<=numbers; i++){
        result = result * i;
    }
    return result;
}

const result = factorial(9);
console.log(result);

function factorialR(numbersR){
    let resultR = 1;
    for(let j = numbersR; j <= numbersR; j--){
        if(j == 0){
            break;
        }
        resultR = resultR * j;
    }
    return resultR;
}

const resultR = factorialR(9);
console.log(resultR);

function factorialS(numbersS){
    let resultS = 1;
    for(let j = numbersS; j >= 1; j--){
        resultS = resultS * j;
    }
    return resultS;
}

const resultS = factorialS(9);
console.log(resultS);