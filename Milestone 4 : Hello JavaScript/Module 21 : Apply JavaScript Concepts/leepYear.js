function leapYear(year){
    const isLeapYear = year % 4;
    if(isLeapYear === 0){
        return true;
    }
    else{
        return false;
    }
}

const lol = 2020;
const islolLeapYear = leapYear(lol);
console.log(islolLeapYear);