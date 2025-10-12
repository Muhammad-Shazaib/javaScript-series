// Promises in JavaScript
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.
// Creating a Promise

const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  // DB calls, crytography, network calls
  setTimeout(() => {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

 new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task 2");
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});


const promiseThree = new Promise((resolve, reject)=>{
setTimeout(()=>{
resolve({userName:'shazaib', email:'abc@example.com'})
},1000)
})

promiseThree.then((user)=>{
    console.log(user);
    
})