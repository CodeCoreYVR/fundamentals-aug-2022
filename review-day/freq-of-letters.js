function freqOfLetters() {
  let output = {}
  const sentence = prompt("Please enter a sentence")
  
  for (const letter of sentence) {
    if (letter === " ") {
      continue
    } else if (output[letter]) {
      output[letter]++
    } else {
      output[letter] = 1
    }
  }
  return output
}