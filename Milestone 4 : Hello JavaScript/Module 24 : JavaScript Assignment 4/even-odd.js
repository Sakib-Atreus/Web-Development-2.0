function evenOdd(str){
    if(typeof str !== 'string'){
        return 'Please input a string type word';
    }
    else{
        const word = str.length;
        if(word % 2 === 0){
            return 'even';
        }
        else{
            return 'odd';
        }
    }
}

const word2 = evenOdd('Phero');
console.log(word2);