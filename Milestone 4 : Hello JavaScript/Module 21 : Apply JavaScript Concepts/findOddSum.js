function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

function getOddSumOfArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 ===0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 14, 66, 77, 88, 99];
const oddNumbers = getOddSumOfArray(myNumbers);
console.log(oddNumbers);
const oddNumberSum = getSumOfArray(oddNumbers);
console.log("Total odd numbers sum : ", oddNumberSum);
const numbersSum = getSumOfArray(myNumbers);
console.log("Total sum of array : ", numbersSum);
getSumOfArray(myNumbers);
