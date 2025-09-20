// for loop

for (let index = 0; index <= 10; index++) {
  // index is the loop variable
  const element = index;
  // Do something with element

  if (element == 5) {
    //console.log("Element is 5");
  }
  // console.log(element);
}

// console.log(element);  ReferenceError: element is not defined

for (let i = 1; i <= 10; i++) { 
 // console.log(`outer loop: ${i}`); 

  for (let j = 1; j <= 10; j++) {
    //  console.log(`  inner loop: ${j} of outer loop: ${i}`);  Nested loop
    //console.log(i + " * " + j + " = " + i * j);  String concatenation
   // console.log(`${i} * ${j} = ${i * j}`); // Template literals
  }
} 

let myArray = ['flash', 'batman', 'superman', ]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// break and continue

for (let index = 1; index <= 20; index++) { // Loop from 1 to 20 
    if (index == 12) {
        console.log(`Detected 12, stopping the loop`);
        break;
    }
    console.log(`Value of index is: ${index}`);

}

for (let index = 1; index <= 20; index++) { // 
    if (index == 12) {
        console.log(`Detected 12, stopping the loop`);
        continue;
    }
    console.log(`Value of index is: ${index}`);
}

