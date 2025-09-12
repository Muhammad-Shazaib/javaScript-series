// Arrays in JavaScript
// An array is a special variable that can hold more than one value at a time.
// Arrays are used to store a collection of items in a single variable.

// const fruits = ["apple", "banana", "cherry"];
// console.log(fruits); // [Array: 3 items]
// console.log(fruits.length); // [Number: 3]
// console.log(fruits[0]); // [String: "apple"]
// console.log(fruits[1]); // [String: "banana"]
// console.log(fruits[2]); // [String: "cherry"]

// Array methods
// fruits.push("date"); // add "date" to the end
// fruits.push("mango"); // add "mango" to the end
// fruits.pop(); // remove last item ("mango")

// fruits.unshift("kiwi"); // add "kiwi" to the 0 index
// fruits.shift(); // remove first item ("kiwi")

// console.log(fruits.indexOf("banana")); // [Number: 1]
// console.log(fruits.includes("cherry")); // [Boolean: true]

// const newFruits = fruits.join();

// console.log(fruits); // [Array: 4 items]
// console.log(typeof newFruits); // [String: "apple,banana,cherry,date"]

// slice() method
// splice() method
const arr1 = [1, 2, 3, 4, 5];
console.log("A", arr1.slice(1, 3)); // [Array: 2 items] // [2, 3] // does not modify the original array

const myn1 = arr1.slice(1, 3); // [2, 3] // does not modify the original array 

console.log(arr1); // [Array: 5 items] 
console.log("B", myn1); // [Array: 2 items]

const myn2 = arr1.splice(1, 3); // [2, 3, 4] // modifies the original array
console.log(arr1); // [Array: 2 items] // [1, 5]
console.log("C", myn2); // [Array: 3 items] // [2, 3, 4]
