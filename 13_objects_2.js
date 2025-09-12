
// const tinderProfile = new Object(); // singleton object
//console.log(tinderProfile); // {}

const tinderProfile = {}; // object literal/ non-singleton object, 

tinderProfile.id = "123abc" // add property
tinderProfile.name = "Shazaib"
tinderProfile.isLoggedIn = false
tinderProfile.age = 20
tinderProfile.email = "shazaib@example.com"
tinderProfile.city = "Karachi"
// console.log(tinderProfile); // {}

const regularUser = { // object literal/ non-singleton object,
    email:"shazaib6@gmail",
    fullName:{
        userFullName: {
            firstName: "Muhammad",
            lastName: "Shazaib"
        },
    }
}

// console.log(regularUser.fullName.userFullName.firstName); // Muhammad

const obj1 = {1: "a", 2: "b"} // keys are numbers
const obj2 = {3: "a", 4: "b"} // keys are numbers
const obj3 = {...obj1, ...obj2} // spread operator to combine objects
// const obj3 = Object.assign({}, obj1, obj2) // combine objects using Object.assign
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const user1 =[
    {
    userId: 1,
    userName: "shazaib"
},

 {
    userId: 1,
    userName: "shazaib"
},

 {
    userId: 1,
    userName: "shazaib"
},

 {
    userId: 1,
    userName: "shazaib"  
},

 {
    userId: 1,
    userName: "shazaib"
},
]
user1[1].userId// update property of object inside array
console.log(tinderProfile); // 1
console.log(Object.keys(tinderProfile)); // ["id", "name", "isLoggedIn", "age", "email", "city"]
console.log(Object.values(tinderProfile)); // ["id", "name", "isLoggedIn", "age", "email", "city"]
console.log(Object.entries(tinderProfile)); // ["id", "name", "isLoggedIn", "age", "email", "city"]

console.log(tinderProfile.hasOwnProperty("isLoggedIn")); // true
