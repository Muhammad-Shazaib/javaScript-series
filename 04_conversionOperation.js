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

//console.log(stringNumber);
//console.log(typeof(stringNumber));

// 1263 -> "1263"
// null -> "null"
// undefined -> "undefined"
// true -> "true"
// false -> "false"


//****************************  Operations  *******************************

let a = 10
let negValue = -a  // unary operator
//console.log(negValue); // -10

//console.log(2 + 2) // 4 (binary operator)
//console.log(2 - 2) // 0
//console.log(2 * 2) // 4
//console.log(2 / 2) // 1
//console.log(2 ** 3) // 8 (exponentiation operator)
//console.log(2 % 3) // 2 (modulus operator - remainder)

let str1 = "shazaib"
let str2 = " khan"
let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2) // "12" (string concatenation)
// console.log(1 + "2") // "12"
// console.log("1" + "2") // "12"
// console.log("1" + 2 + 3) // "123"
// console.log(1 + 2 + "3") // "33"
// console.log("1" + (2 + 3)) // "15"
// console.log(2 + 3 + "1") // "51"
// console.log("2" + 3 + 1) // "231"
// console.log("2" + (3 + 1)) // "24"

console.log(true) // 2
console.log(+true) // 1
console.log(+false) // 0

console.log(+"") // 0
console.log(+"shazaib") // NaN
