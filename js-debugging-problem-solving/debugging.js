// Debugging

// Being able to go through your code and find the issue whether it is crashing your program or just giving unintended results. Errors are a learning experience.

// Bugs
// Having bugs in our program can produce unintended results and not every bug will throw errors and crash your program. Most of the time your app will still run smoothly but there is something off with certain values.

function cartRace(speed) {
  if (speed > 600) {
    throw new Error("Too fast for horse!")
  }
}

// Syntax Error
const myConstant; // Syntax Error: Missing initializer in const declaration

Function helloWorld() {
  console.log('Hello World!');
}

// Logical Errors

if (score < 50) {
  console.log('passed');
} else {
  console.log('failed');
}

// the logic is incorrect but the program will run without issues

//Runtime Errors
this.hello()

// Type Errors
// Uncaught TypeError: Cannot read property
// This usually occurs when you read a property or call a method on an undefined object
let obj
obj.key

// Reference Error: event is not defined
function test() {
  let myVariable
}

console.log(myVariable); // Uncaught Reference Error: myVariable is not defined

