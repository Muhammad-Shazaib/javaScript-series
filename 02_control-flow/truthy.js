// **************************** truthy values *****************************

// true
// 1
// "0"
// "false"
// " "
// []
// {}
// function () {}

// ***************************** falsy values *****************************

// false
// -0
// 0
// ""
// BigInt
// undefined
// null
// NaN

// ******************* Nullish coalescing operator ****************************

// (??): null or undefined
let val1;
// val1 = 5 ?? 10; // 5
// val1 = null ?? 10; // 10
// val1 = undefined ?? 10 ; // 10
val1 = null ?? 10 ?? 20;
// console.log(val1);

// **************************** ternary operator ****************************
// condition ? true : false

const icsTeaPrice = 100;
icsTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
