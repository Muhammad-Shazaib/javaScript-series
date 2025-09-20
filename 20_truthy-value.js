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
// ternary operator bilkul if else ki tarah hota hai
// if else me aur ternary operator me chota sa difference hota hai.
// if else value return nhe krta hai
// lekin ternary operator value return karta hai.
// if else alternative hai.

// condition ? true : false

const icsTeaPrice = 100;
icsTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");

let isOpen = false;
let isLocked = true;

let resp = '';

if (isOpen) {
    resp = 'Gate is Open';
} else {
    resp = 'Gate is Closed';
}

 // ternary operator.
 //  bracket optional hai (isOpen).
   resp = (isOpen) ? 'Gate is Open' : 'Gate is Closed'; // value return kr raha hai lakin usko banany ka sai tarika nhe hai.
                    // string litteral
resp = `gate is ${isOpen ? 'open ' : 'closed '}and it is ${isLocked ? 'locked ' : 'unlocked '}`;

console.log(resp);