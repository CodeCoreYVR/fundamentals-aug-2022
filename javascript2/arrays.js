// JS Arrays:
// Arrays are ordered collections of data

// Use square brackets [] to define an array
// Each element is separated by by a comma ,
// Each value is an element, when defining an array,
// we can have expressions as elements
[1 + 2, "string", false, [3, 4, 5]]

// We can display arrays on multiple lines
[
  1 + 2,
  "string",
  false,
  [3, 4, 5]
]

// You can make nested arrays
[1, [2, [3, [4, null]]]]

// Ways to work with arrays
const arr = [1,2,3,4,5]
arr.length // 5
arr[0] // 1
arr[4] // 5
arr[1 + 2] // 4

// Arrays are mutable
arr[4] = 100
arr // [1,2,3,4,100]

// Remove the last element
// .pop() does not take any arguments and it removes the last element
// returns the element that was removed
arr.pop() // 100
arr // [1,2,3,4]

// Append elements:
// .push() appends values/elements to the end of the array
// returns the new array length
arr.push(5, 6, 7) // 7
arr // [1,2,3,4,5,6,7]

// Remove the first element
// .shift() does not take any arguments and it removes the first element
// returns the element that was removed
arr.shift() // 1
arr // [2,3,4,5,6,7]

// Prepend elements
// .unshift() adds elements to beginning of an array
// returns the new array length
arr.unshift(0, 1) // 8
arr // [0,1,2,3,4,5,6,7]

// .slice() returns a new array as a portion of the array that it was called on
// syntax: .slice(index1, index2)
// index1: is the beginning index of the new array (inclusive)
// index2: is the ending index of the new array (exclusive)
arr.slice(2, 5) // [2,3,4]
// omitting index2 will copy to the end of the array
arr.slice(4) // [4,5,6,7]

// It does not mutate the array that it was called on
arr // [0,1,2,3,4,5,6,7]

// Looping over elements in an array
// Use [] and i to evaluate each element in letters
const letters = ['a', 'b', 'c', 'd']
//                0,   1,   2,   3

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

// for...of
// element is the current value/element that we're iterating over
// after the "of" keyword, we specify the array we're iterating over
// no need to define number of iterations because JS will know when to stop
for (let element of letters) {
  console.log(element);
}

//Exercises

//1 create an array containing 0,5,6,-12, and use a loop to compute the sum of it's elements
const numbers = [0,5,6,-12]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
console.log(sum);

// Iterations
// 1. sum += numbers[0] -> 0 + 0 -> 0
// 2. sum += numbers[1] -> 0 + 5 -> 5
// 3. sum += numbers[2] -> 5 + 6 -> 11
// 4. sum += numbers[3] -> 11 + -12 -> -1

// or with for...of loop

let total = 0;
for(let element of numbers) {
    total = total + element;
}
console.log(total);


//2 create an array containing the words "apple", "dog", "computer", "cup", use a loop to log "[Word] has [length] characters." for each word.
const words = ['apple','dog','computer','cup']

for (let word of words){   
  console.log(`${word} has ${word.length} characters`);
}

// join and split
// Array method -> join(string) joins together all elements in an array, seperated by the argument "string" and returns that string
// It does not mutate the array it was called on
words.join(" | ")

// String method -> split(string) returns an array of strings split by
// the argument "string" that we passed in, and returns an array of every string that was split
"The quick brown fox jumps over the lazy dog".split(" ")
// ["The", "quick", "brown", "fox", "jumps", "over", "the" "lazy", "dog"]






