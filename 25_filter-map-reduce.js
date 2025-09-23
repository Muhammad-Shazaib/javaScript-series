// filter, map, reduce methods
// these methods return a new array
// these methods do not change the original array
// these methods take a callback function as an argument
// these methods take a condition as an argument
// these methods take a function as an argument
// these methods can be chained together
// these methods can be used with arrays of objects



// filter method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => {
  // filter returns an array
  return num > 5;
});
//console.log(newNums);

// map method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const addNumbers =numbers.map((num) => num + 5);
const addNumbers = numbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 41);
// console.log(addNumbers);

// reduce method
const myNumber = [1, 2, 3];

// reduce with initial value
// const sum = myNumber.reduce( (accumulator, currentVal) => {
//     console.log(`accumulator: ${accumulator} and currentVal: ${currentVal}`);
//     return accumulator + currentVal;
// }, 0); // 0 is initial value of accumulator

const sum = myNumber.reduce(
  (accumulator, currentVal) => accumulator + currentVal,
  2
);
console.log(sum);

// example of reduce method
const shoppingCart = [
  {
    item: "phone",
    price: 20000,
  },

  { item: "laptop", price: 50000 },

  { item: "tablet", price: 30000 },
];


const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay);