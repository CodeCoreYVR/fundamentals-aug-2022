// JS : Objects

// key/property - value pairs
// keys are stings (quotes are optional)
// values can be any data-type

const myObj = {
  a: 5,
  b: "string",
  nestArr: [1,2,3],
  nestedObj: {c: 7}
}

// Using dot notation
myObj.a // 5
myObj.nestArr // [1,2,3]

const car = {}

// trying to access a property that doesn't exist gives us undefined
car.doors // undefined

// assign values to properties
// Doesn't matter if the key exists or not
car.doors = 5
car.color = "blue"

// Using bracket notation
car['doors'] = 5

// We can evaluate expressions using []
const property = 'color'
car[property] // 'blue'
car.property // undefined

// write a function, countChars, that takes a string and returns an object containing the count of each character

const countChars = function(str) {
  const output = {}

  for (let i = 0; i < str.length; i++) {

    if (output[str[i]]) {

      output[str[i]]++

    } else {

      output[str[i]] = 1

    }
    
  }
  return output
}

countChars("test") // returns {t: 2, e: 1, s: 1}
// Exercises
// 1. Print person
function printPerson(person) {
  console.log(`${person.name} is ${person.age} years old`);
}

printPerson({
  name: "joe",
  age: 50
}) // -> "Joe is 50 years old"

// 2. Object word lengths
const getWordLengths = (sentence) => {
  const wordLengths = {}
  const words = sentence.split(" ")
 // words -> ["Hello", "Universe"]
  for (let word of words) {
    wordLengths[word] = word.length
  }
  return wordLengths
}

getWordLengths("Hello Universe")

// for...in loop syntax will loop through every key/property in the object
for (const key in car) {
  console.log("key", key, "value", car[key]);
}

function printPerson2(person) {
  for (const property in person) {
    console.log(`Person's ${property} is ${person[property]}`);
  }
}

// return an array of an object's keys or values
Object.keys(car)
Object.values(car)

// Delete a key/value pair by using the "delete" keyword
delete car.doors

// Verify if the key exists in the object
car.hasOwnProperty('doors')// -> false
car.hasOwnProperty('color')// -> true

typeof {} // "object"
typeof [] // "object"
Array.isArray({}) // -> false
Array.isArray([]) // -> true

// object keys have to be unique
const obj = {
  a: 1,
  b: 2,
  a: 3
}

obj // {a: 3, b: 2}







