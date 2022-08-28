// 1. Write a function that takes any number but always returns 0.
function returnZero(num) {
  return 0;
};

// const returnZero = num => 0

// 2. Write a function that takes a user object with "name" and "age" properties, and logs the string "[name] is [age] years old."

function describeUser(user){
    console.log(`${user.name} is ${user.age} years old`)
}

// const describeUser = ({name, age}) => console.log(`${name} is ${age} years old`);

// 3. Write a function that takes a sentence, and returns an object of all the words and their lengths

const wordLengths = (str) => {
  let result = {};
  const arr = str.split(" ");

  arr.forEach((word) => {
    result[word] = word.length;
  });

  // for(let word of arr) {
  //   result[word] = word.length;
  // }

  return result;
};

function senLength(str) {
  let obj = {}
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
      let length = words[i].length; 
      obj[words[i]] = length;
  }
  return obj
}

// const getWordLengths = sentence => 
//    sentence
//     .split(' ')
//     .reduce((wordLengths, word) => ({...wordLengths, [word]: word.length}), {})
