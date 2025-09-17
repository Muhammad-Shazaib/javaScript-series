const user = { // THIS current context ko refer krta hai, jisko call krta hai, 
  userName: "shazaib",
  price: 12,

  welComeMessage: function () {
    console.log(`${this.userName}, welcome to website`);
    console.log(this);
    
  },
};
// user.welComeMessage() 
// user.userName = 'Rayyan' // update
// user.welComeMessage()  // update

// console.log(this); // window object

// function twelve(){ // 
//     let userName = 'Rayyan'
//     console.log(this.userName); // undefined
// }
// twelve()

const twelve = ()  => { // arrow function,  // 
    let userName = 'Rayyan'
  //  console.log(this.userName); // undefined
    //console.log(this); // window object

}
twelve()

// const addThree =(num1, num2) => {
// return num1 +num2

// }
// console.log(addThree(3,4))

//const addThree =(num1, num2) =>  num1 +num2 implicit return keyword is used to return a value from a function
// const addThree =(num1, num2) =>  (num1 +num2) implicit return keyword is used to return a value from a function
 const addThree =(num1, num2) =>  ({userName: "shazaib"})
console.log(addThree(3,4));
