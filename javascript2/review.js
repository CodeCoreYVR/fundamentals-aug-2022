// declare a variable
// {keyword} {variableName} 
let letVariable // undefined

// declare and initialize
// {keyword} {variableName} = {value}
const constVariable = 123

// difference between let and const
letVariable = 0 // let can be reassigned
constVariable = 1 // Uncaught TypeError: Assignment to constant variable
constVariable++ // Uncaught TypeError: Assignment to constant variable

// If we declare a variable with const, you have to initialize it at the same time
const name // Uncaught SyntaxError: Missing initializer in const declaration

// define a string
'Single quotes'
"double quotes"
`Back ticks`

// No difference between "" and '' other than escaping the quote inside with '\'
'You\'re awesome.'

// Using back ticks we can interpolate 
`There are ${constVariable} users signed up.`

// Only back ticks can be used for multi-line strings
const multiline = `
  Only back ticks
  allow for
  multiline strings.
`

// Difference between == and ===
// JS will try coerce the operands into the same type of data before comparing with ==
2 == '2' // true

// Using ===, JS will no try to coerce different data types
2 === '2' // false