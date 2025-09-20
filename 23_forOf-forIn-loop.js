
// for of loop

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
for (const element of arr) {
   // console.log(`Value is: ${element}`);
}

let greetings = "Hello World";
for (const element of greetings) {
 //   console.log(`Each charter is ${element}`);
}

// Maps
let myMap = new Map();
myMap.set('name', 'shazaib');
myMap.set('age', 31);
myMap.set('city', 'karachi');
// console.log(myMap);

for (const [key, value] of myMap) { 
   // console.log(`Key is ${key} and value is ${value}`); // destructuring
}

// for in loop used for objects
let myObject ={
    name: 'shazaib',
    age: 31,
    city: 'karachi'
}
// for (const [key, value] of myObject) {
//     console.log(` Key is ${key} and value is ${value}`); // TypeError: myObject is not iterable
//}  

for (const key in myObject) {
  // console.log(` Key is ${key} and value is ${myObject[key]}`);

}

const programmingLang =['javascript', 'python', 'java', 'c++', 'c#', 'php', 'ruby', 'go', 'swift', 'kotlin'];
for (const key in programmingLang) { 
    console.log(programmingLang[key]);
}