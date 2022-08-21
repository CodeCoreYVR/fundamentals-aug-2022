function capString(string) {
  return string.toLowerCase().replace(string[0], string[0].toUpperCase())
}

function capLetter(params) {
  let outputStr = 'M';
  for (let i = 0; i < params.length; i++) {
    if (params[i] === params[0]) {
      outputStr += params[i].toUpperCase()
    } else {
      outputStr += params[i].toLowerCase()
    }
    
  }
  return outputStr
}



