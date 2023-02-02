function getAverage(a1, a2, a3){
    const total = a1 + a2 + a3;
    const average = total / 3;
    return average;
}

var a1marks = 60;
var a2marks = 59;
var a3marks = 60;

var myAverage = getAverage(a1marks, a2marks, a3marks);
console.log('My assignment average marks : ', myAverage);