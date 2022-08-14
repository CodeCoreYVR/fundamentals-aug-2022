// Functions
// A container for a piece of code that can be executed anywhere
// in your program. The arguments are values that are passed
// to the function when called. The parameters/arguments are the "variables"
// that hold values of the arguments that were passed to the function call

//Defining a function
// function syntax
function functionDeclaration(param1, param2) {
  // function body (your code goes here)
  return // expression
}

// Function expression:
// A function without a name is called an anonymous function
// We declare a variable and assign it an anonymous function as it's value.
// We can do this because functions can be passed around as values.
// One benefit of this over declaration is that we can't reassign function expressions.
const functionExpression = function(param1, param2) {
  // code
  return //expression
}

// example
function printName(firstName, lastName) {
  return `Your name is: ${firstName} ${lastName}`
}

// Get definition of the function
printName

// Invoke/call/execute
// "Jane" and "Doe" are the arguments passed to this function call
// firstName and lastName will hold the values of these arguments for that call
// A string is returned from this function and used inside of the expression
// wherever you're calling the function
printName("Jane", "Doe")

// If we don't have a return statement,
// the function will return undefined when called
function returnUndefined() {
  console.log("this function does something");
  // the function will return undefined because the return statement is omitted
}

// Any code in the function that comes after the return statement will not run
const afterReturnExample = function() {
  return "I'm returned and I exit the function"
  console.log("I will not print");
  return "This will not be returned"
}

// Arrow function (ES6+)
const arrow = (param1, param2) => {
  // code
  return //expression / statement
}

// Exercises

// 1
function insult (name) {
  return `${name}, you doofus!`
}
insult("Bob")

// 2
function increment (number) {
  return ++number  
}
increment(2)

// 3
const repeat = (myString, numOfTimes) => {
  let result = ``;

  for (let i = 0; i < numOfTimes; i++) {
    result += `${myString} \n`;
  }
  return result;
};

console.log(repeat("Love me some watermelon", 7));

// or

const repeat = (string, num) => {
  return string.repeat(num)
}