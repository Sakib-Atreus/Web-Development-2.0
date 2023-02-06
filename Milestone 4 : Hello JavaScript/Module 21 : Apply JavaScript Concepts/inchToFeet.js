function inchTofeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchTofeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchTofeet(nanaInches);
console.log(nanaFeet);