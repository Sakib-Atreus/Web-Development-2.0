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

const test = isLGSeven(6);
console.log(test);
