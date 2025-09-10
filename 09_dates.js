// Date and Time in JavaScript

const now = new Date(); // current date and time
// console.log(now); // [Date: current date and time]
// console.log(now.toString()); // [String: current date and time as string]
// console.log(now.toISOString()); // [String: current date as string]
// console.log(now.toJSON()); // [String: current time as string]
// console.log(now.toLocaleDateString()); // [String: current date as string]
// console.log(now.toLocaleString()); // [String: current date and time as string]
// console.log(now.toLocaleTimeString()); // [String: current time as string]
console.log(now.getFullYear()); // [Number: current year]
console.log(now.getMonth() + 1); // [Number: current month (0-11, so add 1)]
console.log(now.getDate()); // [Number: current date (1-31)]
console.log(now.getDay()); // [Number: current day of the week (0-6, 0 is Sunday)]
console.log(now.getHours()); // [Number: current hour (0-23)]
console.log(now.getMinutes()); // [Number: current minute (0-59)]
console.log(now.getSeconds()); // [Number: current second (0-59)]
console.log(now.getMilliseconds()); // [Number: current millisecond (0-999)]
console.log(now.getTime ()); // [Number: milliseconds since January 1, 1970]

