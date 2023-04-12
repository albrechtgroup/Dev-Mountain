// Basic Version:
function hasUniqueCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueCharacters("hello")); // false
console.log(hasUniqueCharacters("world")); // true
console.log(hasUniqueCharacters("javascript")); // true
