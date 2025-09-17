// function scope
// block scope
// global scope
// lexical scope
// scope chain

// var - function scope, global scope, window object
// let - block scope, global scope, window object
// const - block scope, global scope, window object

var a = 100
let b = 200
const c = 300

if (true) {
var a = 101
let b = 201
const c = 301 
//console.log(a); // 101
//console.log("INNER: ",b); // 201
// console.log(c); // 301
}

//console.log(a); // 100
// console.log(b); // 200
// console.log(c); // 300



function one (){

    const username = "shazaib"

    function two() {
        const website = "learnwithshazaib.com"
        console.log(username);
    }

    // console.log(website);
    two()
    
}
//one()
if (true) {
    const username = "shazaib"
    if(username === 'shazaib'){
        const website = "learnwithshazaib.com"
       // console.log(username + " " + website);
        
    }
   // console.log(website);
}

// console.log(username);


 
// ++++++++++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5)); // 6

function addOne (num){ // function declaration
    return num + 1
}

//addOne(5) // 6

console.log(addTwo(5)); // error

const addTwo = function (num){ // function expression
    return num + 2
}
// addTwo(5) // 7