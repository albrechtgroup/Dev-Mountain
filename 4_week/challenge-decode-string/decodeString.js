// Write your code below this line:

function decodeString(code) {
    // Capture the number to decode the string
    let decipher = Number(code[0])
    // Create a solution string to add letters to one-by-one
    let solution = ""
    // Start iterating through the string, starting at index 1 to avoid the decipher
    for (let i = 1; i < code.length; i++) {
    // Capture the ascii code for the given letter, plus the value of the decipher
    let strValue = code[i].charCodeAt() + decipher
    // Add the letter the belongs to the updated ascii value to the solution string
    solution += String.fromCharCode(strValue)
  }
    // return the solution string
    return solution
}


//////////////////////////
function decodeStr2(str) {
  let decipher2 = Number(str[0]);
  let solution2 = '';
  for (let i = 1; i < str.length; i++) {
    let strValue = str[i].charCodeAt() + decipher2;
    solution2 += String.fromCharCode(strValue)
  }
  return solution2
}

console.log(decodeStr2("2fcjjm")); // hello
