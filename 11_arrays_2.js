const marvelHeroes = ['thor', 'ironman', 'spiderman'];
const dcHeroes = ['superman', 'flash', 'batman'];

//marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes); 
// console.log(marvelHeroes[3][1]); // flash

// const allHeroes = marvelHeroes.concat(dcHeroes); // merging two arrays
// console.log(allHeroes); // 

const allHeroes2 = [...marvelHeroes, ...dcHeroes]; // merging two arrays using spread operator
// console.log(allHeroes2);

const real_another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]];
console.log(real_another_array); // flattening the array
const real_another_array2 = real_another_array.flat(Infinity); // flattening the array
 console.log(real_another_array2);


 console.log(Array.isArray('Shazaib')); // checking if it is array or not
    console.log(Array.from('Shazaib')); // converting string to array();


    console.log(Array.from({name: 'Shazaib', age: 20})); // converting object to array

    let score = 100
    let score2 = 200
    let score3 = 300

    console.log(Array.of(score, score2, score3)); // converting multiple values to array
    
    