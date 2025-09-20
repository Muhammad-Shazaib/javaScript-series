
// string data type in JavaScript
let name = "Shazaib"; // double quotes
let name2 = 'Shazaib'; // single quotes
let name3 = `Shazaib`; // backticks (template literals)
let repoCount = 55;

// console.log(name +" "+ repoCount); // concatenation old way, outdated, not used now a days, not recommended

// console.log(`Hello, my name is ${name} and I have ${repoCount} repositories.`); // template literals (ES6 feature), recommended way


const fullName = new String('Muhammad-Shazaib'); // 
//console.log(fullName.length); // [String: 'Muhammad Shazaib']
//console.log(fullName.charAt(5)); // [String: 'Muhammad Shazaib']
//console.log(fullName.indexOf('m')); // [String: 'Muhammad Shazaib']


const newString = fullName.substring(0, 8); // [String: 'Muhammad Shazaib']
//console.log(newString.toUpperCase()); // [String: 'MUHAMMAD ']

const anotherString = fullName.slice(-8, 4); // [String: 'Muhammad Shazaib']
console.log(anotherString); // [String: 'Muhammad Shazaib']

const newString2 = "  Hello World   "; // [String: '   Hello World   ']
console.log(newString2); // [String: '   Hello World   ']  // original string with whitespace
console.log(newString2.trim()); // [String: 'Hello World'] // trim() method removes whitespace from both ends of a string


const url = "https://www.youtube.  com"; // [String: 'https://www.youtube.  com']
console.log (url)
console.log(url.replace("  ", "")); // [String: 'https://www.youtube.com'] // replace() method replaces a specified value with another value in a string
console.log(url.includes("youtube")); // [String: true] // includes() method checks if a string contains a specified value and returns true or false

console.log(fullName.split('-')); // [String: [ 'Muhammad', 'Shazaib' ]] // split() method splits a string into an array of substrings