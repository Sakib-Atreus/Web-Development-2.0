// Problem 1 : Let's play a mind game

function mindGame(positiveNumber) {
    if (typeof positiveNumber !== 'number') {
        return 'Please input an integer number.';
    }
    else {
        let numberMul = positiveNumber * 3;
        let numberSum = numberMul + 10;
        let numberDiv = numberSum / 2;
        let numberSub = numberDiv - 5;

        return numberSub;
    }
}

// Function Description:

// This code returns a value for which we will set some mathematical operations. 
// When we input an integer number, this number is updated 4 times. 
// First multiply by 3 then summed with 10 then divided by 2, and last subtracted with 5, 
// then finally returns the output or final result.


// ----------------------------------------------------- //


// Problem 2 : Finding even or odd

function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'Please input a string type word';
    }
    else {
        const word = str.length;
        if (word % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
}

// Function Description:

// This function will check some conditions and calculate the length of a string.
// First check whether the input is a string or not then go to the next line.
// Then we calculate the length of the given string.
// Finally check whether the number of lengths is even or odd and then return the final output.


// ----------------------------------------------------- //


// Problem 3 : Is Less or Greater than Seven

function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Please input an integer number';
    }
    else {
        const check = number - 7;
        if (check < 7) {
            return check;
        }
        else {
            return number * 2;
        }
    }
}

// Function Description:

// This function work for checking if the input number is greater than 7 or less than 7,
// First we check whether the input value is an integer or not. 
// Then we subtracted the given input number with 7.
// If the result is greater than 7, multiply the given input number by 2.
// And return the value, otherwise if the result is less than 7,
// we can simply return the subtracted result.


// ----------------------------------------------------- //


// Problem 4 : Finding Bad data

function findingBadData(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array) || typeof array[i] !== 'number') {
            return 'Please input an array and integer value.';
        }
        else {
            if (array[i] < 0) {
                count += 1;
            }
        }
    }
    return count;
}

// Function Description:

// This function will work to find the negative value in the given array.
// First we check whether the given input value is an array or not.
// If the given input is an array then we can check the number in this array,
// and find the negative value in this array, then count the total negative value,
// and finally we can return the total count value of the negative number. 


// ----------------------------------------------------- //


// Problem 5 : Convert your gems into diamond

function gemsToDiamond(number1, number2, number3) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number') {
        return 'Please input an integer number';
    }

    else {
        const powerOfNumber1 = number1 * 21;
        const powerOfNumber2 = number2 * 32;
        const powerOfNumber3 = number3 * 43;

        const totalDiamond = powerOfNumber1 + powerOfNumber2 + powerOfNumber3;
        if (totalDiamond >= 2000) {
            return totalDiamond - 2000;
        }
        else {
            return totalDiamond;
        }
    }
}

// Function Description:

// This function calculates some value with a condition.
// First, check whether the given input value is an integer number or not.
// Then multiply the 3 numbers with the given instruction.
// Then calculate the total of 3 numbers.
// And lastly, we check whether this total number is greater than 2000 or not. 
// If the value is greater than 2000, we just subtract 2000 and return the result. 
// And if less than 2000 we just return the total number.


// ----------------------------------------------------- //