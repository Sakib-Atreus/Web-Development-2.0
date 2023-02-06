function milesToKm(miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const myGfHome = 727;
const ss = milesToKm(myGfHome);
console.log(ss);