// Immediately invoked function expression (IIFE)

// function one (){ // function declaration
//     console.log(`DB CONNECTED`);
// }
// one()

// named IIFE
(function one() {
  // function expression or anonymous function
  console.log(`DB CONNECTED`);
})();

// unnamed IIFE
(() => {
  // arrow function
  console.log(`DB CONNECTED 2 `);
})();

// parameter IIFE
((name) => {
  // arrow function
  console.log(`DB CONNECTED 2 ${name}`);
})("Shazaib");
