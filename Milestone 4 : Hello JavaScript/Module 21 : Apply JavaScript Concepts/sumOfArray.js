function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    console.log("Total sum of array : ", sum);
    return sum;
}

const myNumbers = [12, 14, 66, 77, 88, 99];
getSumOfArray(myNumbers);