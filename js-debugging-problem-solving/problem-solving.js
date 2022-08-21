// Problem Solving

// First thing to get out of the way is to understand exactly what the problem is asking for
// It's easy to not get the right answer all because we didn't completely understand the question

// Writing out what you  need to do in comments or even on paper can be a great help because it forces you to take it one step at a time instead of thinking about the whole thing at once
// Of course there is no fast track way to get good at problem solving you have to keep trying questions over and over again, practice makes perfect

// Task
// Sum of all numbers of a given array(list), except the highest and the lowest element (by value, not index!)

// The highest or lowest element respectively is a single element at each edge, if there are more than one with the same value.

// Mind the input validation

// Input validation
// If an empty value(null, none, nothing) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// Example
[6, 2, 1, 8, 10] // 16 
[1, 1, 11, 2, 3] // 6

// Breaking down the problem
// 1. We need a function that takes in an array as an argument
// 2. We need to check if the input is null, or an empty array or an array with only 1 element, if so return 0
// 3. We need to figure out what the largest and smallest value in the given array is
// 4. We either need to take those two values out of the array or record them so we know to minus them from the sum
// 5. We need to add all remaining values together to give us our return expression

function sumArray(array) { 
  if (array === null || array.length <= 1) {
    return 0
  } else {
    array.sort(function(a,b) {return a - b}) // array -> [1, 2, 6, 8, 10] 
    array.pop()
    array.shift()
    // array -> [2, 6, 8] 
    let result = array.reduce((a,b) => a + b)
    return result
  }
}

function sumArray(array) {
  if (array == null || array.length <= 1) {
    return 0
  }

  let max = Math.max(...array) // 10
  let min = Math.min(...array) // 1
  let sum = 0

  for (let i = 0; i < array.length; i++) {
    // [1, 2, 6, 8, 10]
    sum += array[i]
  }
  return sum - max - min
}

const sumArray = (array) => {
 
  array && array.length > 1 ? array.sort((a,b) => a - b).slice(1, -1).reduce((sum, number) => sum + number, 0) : 0
  //                                [1, 2, 6, 8, 10]     // [2, 6, 8] 
}





