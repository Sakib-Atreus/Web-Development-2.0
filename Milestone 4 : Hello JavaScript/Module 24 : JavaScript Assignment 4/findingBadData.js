// function findingBadData(number){
//     if(typeof findingBadData !== 'number'){
//         return 'Please input a integer number.'
//     }
//     let count = 0;
//     for(let i = 0; i < number.length; i++){
//         const element = number[i];
//         if(element < 0){
//             return count + 1;
//         }
//     }
//     console.log(count); 
// }

// const data = [10, 20, -2, -3, 7];
// findingBadData(data);


let count = 0;
function findingBadData(array){
    if(!Array.isArray(array)){
        return 'Please input an array.';
    }
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            count += 1;
            console.log(array[i])
         }
    }
    console.log("Total number: ", count)
}

const data = [10, 20, -2, -3, 7];
findingBadData(data);

// let count = 0;
// function findingBadData(array) {
//     array.forEach(element => {
//         if (element < 0) {
//             count += 1;
//             console.log(element)
//         }
//     }
//     )
//     console.log("Total number: ", count)
// }

// const data = [10, 20, -2, -3, 7];
// findingBadData(data);



