// Data types in JavaScript
// There are 7 primitive data types in JavaScript
// 1. String "" or ''
// 2. Number 0 or 1 and power of 53
// 3. Boolean true or false
// 4. null (when variable is empty)
// 5. undefined (when variable is not assigned any value)
// 6. BigInt (2n, 3n)
// 7. Symbol (used in advanced programming)

console.log(typeof "Hello") // string
console.log(typeof 42) // number
console.log(typeof true) // boolean true or false
console.log(typeof null) // empty value // 
console.log(typeof undefined) // not assigned value //
console.log(typeof Symbol()) // unique value ka liye used hota hai symbol

// Non-primitive (Reference) data type

// 1. Object (used to store multiple values in a single variable)
// 2. Array (used to store multiple values in a single variable in a list form)
// 3. Function (used to perform a task)

console.log(typeof { name: "Shazaib", age: 31 }) // object
console.log(typeof [1, 2, 3, 4, 5]) // object (array is a type of object)
console.log(typeof function() {}) // function (used to perform a task)


// *************************** memory allocation in primitive and non-primitive data types ***************************

// stack memory and heap memory 

// stack memory - Primitive data types are stored in stack memory (copy value)
// heap memory - Non-primitive data types are stored in heap memory (reference original value)
// primitive data types are stored in stack memory (copy value)
// non-primitive data types are stored in heap memory (reference original value)

// Example of primitive data type (stack memory)
let myName = "Shazaib";
let myAge = 31;
let myName2 = myName; // copy value
myName2 = "Ali";
 console.log(myName); // Shazaib
console.log(myName2); // Ali
