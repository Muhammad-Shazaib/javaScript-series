// singleton object

// object literals
const mySymbol = Symbol("key1");

let jsUser = {
    name: "Shazaib",
    "full name": " Muhammad Shazaib", // property with space
    [mySymbol]: "value1", // symbol as property
    age: 20,
    email: "shazaib@example.com",
    city: "Karachi",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],

};
console.log(jsUser.city); // dot notation to access property
console.log(jsUser ["city"]); // alternative way to access property
console.log(jsUser["full name"]); // property with space
console.log(jsUser[mySymbol]); // symbol as property

jsUser.email = "shazaib2@example.com"; // update property
// Object.freeze(jsUser); // freeze the object to prevent further modifications
jsUser.email = "shazaib3@example.com" //
console.log(jsUser); // email will not be updated due to freeze

jsUser.greeting = function (){
    console.log("Hello JS User");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function (){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greetingTwo());
