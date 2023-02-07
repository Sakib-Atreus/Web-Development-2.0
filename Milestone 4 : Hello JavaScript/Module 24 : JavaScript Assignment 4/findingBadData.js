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


function findingBadData(array){
    
    // for(let check = 0; check < array.length; check++){
    //     if(!Array.isArray(array)){
    //         return 'Please input an array.';
    //     }
    // }
    
        let count = 0;
        for(let i = 0; i < array.length; i++){
            if(!Array.isArray(array) || typeof array[i] !== 'number'){
                return 'Please input an array and integer value.';
            }
            else{
                if(array[i] < 0){
                    count += 1;
                }
            }
        }
        // console.log(count)
        return count;
}

const data = findingBadData([4, -9, -5, 33, 1]);
// findingBadData(data);
console.log(data);

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



