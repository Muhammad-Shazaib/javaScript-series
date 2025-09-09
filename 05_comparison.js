console.log(2 > 1) // greater than true
console.log(2 < 1) // less than false
console.log(2 >= 1) // greater than or equal true
console.log(2 <= 1) // less than or equal false
console.log(2 == 2) // equal true
console.log(2 != 2) // not equal false
console.log(2 === 2) // strictly equal true
console.log(2 !== 2) // strictly not equal false


// Comparing different types
console.log(2 == '2') // equal true (type coercion)
console.log(2 === '2') // strictly equal false (no type coercion)

console.log(null > 0) // greater than false
console.log(null < 0) // less than false
console.log(null == 0) // equal false
console.log(null >= 0) // greater than or equal true
console.log(null <= 0) // less than or equal true


console.log(undefined > 0) // greater than false
console.log(undefined < 0) // less than false
console.log(undefined == 0) // equal false
console.log(undefined >= 0) // greater than or equal false
console.log(undefined <= 0) // less than or equal false

console.log("2" == 2) // equal true
console.log("2" === 2) // strictly equal false
console.log("2" != 2) // not equal false
console.log("2" !== 2) // strictly not equal true
