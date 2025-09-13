// function declaration
// functions are first class citizens in javascript

function sayMyName(name) {
    console.log("Your name is " + "shazaib");
}

//sayMyName()

// function expression or anonymous function
// const addTwoNumbers = function(num1, num2) { // parameters (num1, num2) are placeholders for the values that will be passed to the function
//     console.log(num1 + num2);
// }

// const result = addTwoNumbers(3,4)

function addTwoNumbers(num1, num2) {
   // let result = num1 + num2;   
   // return result; // return keyword is used to return a value from a function
    return num1 + num2; //  return keyword is used to return a value from a function
} 
const result = addTwoNumbers(3,4)
// console.log(result);

function loginUserMessage(username= "shazaib") {
if(!username) {
    return "Please enter a username";
}
        return `${username} just logged in`;
}
    
const message = loginUserMessage()
 console.log(message);


