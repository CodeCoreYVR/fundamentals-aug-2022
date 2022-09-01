// Write a function that takes a string and reverses it

// using a for loop
function reverseString(str) {
  let word = 'o'
  for (let i = 0; i < str.length; i++) {
    word += str[str.length - i - 1]   
  }
  return word
}

// using string and array methods
function reverseString(str) {
  return str.split('').reverse().join('')
}
