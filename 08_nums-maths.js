// Numbers and Math in JavaScript

const num1 = 10; // integer
const num2 = 20.5; // float
const num3 = 0.1; // float
const num4 = -5; // negative integer
const num5 = -0.5; // negative float
const num6 = 1e3; // exponential notation (1000)
const num7 = 0b1010; // binary (10 in decimal)
const num8 = 0o12; // octal (10 in decimal)
const num9 = 0xA; // hexadecimal (10 in decimal)

// Basic arithmetic operations
const sum = num1 + num2; // addition
const difference = num2 - num1; // subtraction
const product = num1 * num2; // multiplication
const quotient = num2 / num1; // division
const remainder = num2 % num1; // modulus
const power = num1 ** 2; // exponentiation

// console.log(`Sum: ${sum}`);
// console.log(`Difference: ${difference}`);
// console.log(`Product: ${product}`);
// console.log(`Quotient: ${quotient}`);
// console.log(`Remainder: ${remainder}`);
// console.log(`Power: ${power}`);

const score = 400
// console.log(score);

const balance = new Number(1000); // Number object
// console.log(balance.toString().length); // [Number: 1000]
// console.log(balance.toFixed(2)); // [Number: 1000]


const otherNum = 123.4669; // float
// console.log(otherNum.toPrecision(4)); // [Number: 123] // toPrecision() method formats a number to a specified length


const largeNum = 1234567890; // integer
//console.log(largeNum.toLocaleString('en-pk')); // [Number: '1,23,45,67,890'] // toLocaleString() method formats a number with commas as thousands separators based on locale


// ************************ Math Object ************************

// console.log(Math)
// console.log(Math.abs(-4)); // [Number: 4] // abs() method returns the absolute value of a number
// console.log(Math.round(4.6)); // [Number: 5] // round() method rounds a number to the nearest integer
// console.log(Math.ceil(4.1)); // [Number: 5] // ceil() method rounds a number up to the next largest integer
// console.log(Math.floor(4.9)); // [Number: 4] // floor() method rounds a number down to the next smallest integer
// console.log(Math.min(1, 2, 3, -4, 5)); // [Number: -4] // min() method returns the smallest of zero or more numbers
// console.log(Math.max(1, 2, 3, -4, 5)); // [Number: 5] // max() method returns the largest of zero or more numbers

console.log(Math.random());
console.log((Math.random() * 10) + 1); // random number between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); // random number between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // random number between min and max (inclusive)

