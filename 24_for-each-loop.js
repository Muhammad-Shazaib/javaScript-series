// forEach loop

// const coding = ["javascript", "python", "java", "c++", "c#", "php", "ruby"];

// coding.forEach(function (val) {
// console.log(val);
//});

// using arrow function
// coding.forEach( (item)=> {
//     console.log(item);
// })

//
// function printMe(item) {
//     console.log(item);
// }
// coding.forEach(printMe);

// with index and array
// coding.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// with object array, using arrow function
const myCoding = [
  { langName: "javascript", fileExtension: ".js" },
  { langName: "python", fileExtension: ".py" },
  { langName: "java", fileExtension: ".java" },
];
myCoding.forEach((item) => {
  //  console.log(item.langName, item.fileExtension);
});

// const coding = ["javascript", "python", "java", "c++", "c#", "php", "ruby"];

//forEach does not return anything
// const values = coding.forEach((item)=> {
// console.log(item);
// // this return will not work
// return item;
// })
// undefined, forEach does not return anything
// console.log(values);
