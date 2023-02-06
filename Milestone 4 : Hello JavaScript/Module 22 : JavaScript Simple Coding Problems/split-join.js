const lyrics = 'Tumi bondhu kala Pakhi ami jeno ki. bosonto kale tomay bolte parini';
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(parts);
console.log(sentences);
console.log(chars);

const partial = lyrics.slice(5,8);
console.log(partial);
const partial2 = lyrics.substring(5, 8);
console.log(partial2);