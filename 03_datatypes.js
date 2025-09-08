// code readability should be high.
//alert(6 + 6) not run because we are using node.js, not browser.

// Datatypes
// 1. String "" or ''
// 2. Number 0 or 1 and power of 53
// 3. Boolean true or false
// 4. null (when variable is empty)
// 5. undefined (when variable is not assigned any value)
// 6. BigInt (2n, 3n)
// 7. Symbol (used in advanced programming)

// objects (complex data types)
// 1. Arrays []
// 2. Object Literals {}
// 3. Functions
// 4. Dates

let name = "shazaib"  // datatype of string
let age = 18         // // datatype of number 
let isLoggedIn = false // datatype of boolean


console.log(typeof undefined) // undefined
console.log(typeof null) // object (bug)
console.log(typeof  BigInt(123)) // bigint
console.log(typeof 123n) // bigint
console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof isLoggedIn) // boolean