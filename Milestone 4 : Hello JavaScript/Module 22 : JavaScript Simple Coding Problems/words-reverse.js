console.log("Reverse way in text : \n\n");

function reverseText(text){
    let reversed = '';
    for(let i = text.length-1; i >= 0; i--){
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = 'I am a bad boy';
reverseText(myString);

console.log("\n\nReverse way in words : \n\n");

function reverseWords(str){
    const words = str.split(' ');
    const result = [];
    for(let i = words.length-1; i >= 0; i--){
        const element = words[i];
        result.push(element);
        console.log(element);
    }
    const reversed = result.join(' ');
    return reversed;
}

const myWords = 'I am a bad boy';
reverseWords(myString);