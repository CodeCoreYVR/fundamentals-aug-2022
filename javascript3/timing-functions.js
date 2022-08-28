// setTimeout is a higher order function that will execute the callback
// ONCE after x amount of milliseconds
// setInterval is a higher order function that will execute the callback
// EVERY x amount of seconds

// The setTimeout/setInterval function receives 2 params
// 1. callback
// 2. number of milliseconds

setTimeout(() => {
  console.log("Hello World");
}, 5000);

// Exercise
// Ready, Set, Go!
console.log("Ready");
setTimeout(() => {console.log("Set");}, 1000);
setTimeout(() => {console.log("Go!");}, 2000);

// If we put "Ready" after setTimeout, setTimeout is not going to block our code while it's waiting to invoke the callback
// This is called asynchronous code
// "Ready" will be logged to the console first
setTimeout(() => {console.log("Set");}, 1000);
setTimeout(() => {console.log("Go!");}, 2000);
console.log("Ready");

// setInterval returns an id which you can pass to clearInterval to cancel it
const id = setInterval(() => console.log("Hello World"), 1000)

// Exercise
// make counter go up from 1 every second
let sec = 0;

setInterval(() => {
  console.log(sec++);
}, 1000);

// Stretch create 2 counters, one for even and one for odd
let count = 0
setInterval(() => {
  count++
  if (count % 2 === 0) {
    console.log(count);
  }
}, 1000);
setInterval(() => {
  if (count % 2 !== 0) {
    console.log(count);
  }
}, 1000);

// Blast-off Countdown
let timer = 10
const interval = setInterval(() => {
  if (timer === 0) {
    console.log("Blast Off!");
    clearInterval(interval)
  } else {
    console.log(timer--);
  }
}, 1000);