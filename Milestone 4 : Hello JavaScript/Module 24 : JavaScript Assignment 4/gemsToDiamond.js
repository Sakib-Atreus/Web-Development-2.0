// function gemsToDiamond(number1, number2, number3){
//     if(typeof gemsToDiamond !== 'number'){
//         return 'Please input a integer number';
//     }
    
//     const powerOfNumber1 = number1 * 21;
//     const powerOfNumber2 = number2 * 32;
//     const powerOfNumber3 = number3 * 43;

//     const totalDiamond = powerOfNumber1 + powerOfNumber2 + powerOfNumber3;
//     if(totalDiamond >= 2000){
//         return totalDiamond - 2000;
//     }
//     else{
//         return totalDiamond;
//     }
// }

// const test = gemsToDiamond(1, 1, 1);
// console.log(test);


function gemsToDiamond(number1, number2, number3){
    if(typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number'){
        return 'Please input a integer number';
    }
    
    const powerOfNumber1 = number1 * 21;
    const powerOfNumber2 = number2 * 32;
    const powerOfNumber3 = number3 * 43;

    const totalDiamond = powerOfNumber1 + powerOfNumber2 + powerOfNumber3;
    if(totalDiamond >= 2000){
        return totalDiamond - 2000;
    }
    else{
        return totalDiamond;
    }
}

const test = gemsToDiamond(1, 1, 1);
console.log(test);