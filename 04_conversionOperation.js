// NaN - not a number
// Null - empty value
// Undefined - value is not assigned
// String - sequence of characters
// Number - numeric value
// Boolean - true or false
// Object - collection of key value pairs
// Symbol - unique value
// BigInt - larger integers

let score = undefined; 

//console.log(typeof score);
//console.log(typeof(score));


let valueInNumber = Number(score) // convert string to number

//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "1263" -> 1263
// "1263shazaib" -> NaN
// true -> 1 , false -> 0
// null -> 0
// undefined -> NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // convert number to boolean

//console.log( booleanIsLoggedIn);
//console.log(typeof(booleanIsLoggedIn));


// 1 -> true
// 0 -> false
// "" -> false
// "shazaib" -> true


let someNumber = 1263
let stringNumber = String(someNumber) // convert number to string

console.log(stringNumber);
console.log(typeof(stringNumber));

// 1263 -> "1263"
// null -> "null"
// undefined -> "undefined"
// true -> "true"
// false -> "false"