// alert("Hello World!!!");

// Sum Zero:
function addToZero(nums) {
  // Create a Set to store the numbers
  const numSet = new Set(nums);

  // Iterate through the numbers
  for (let num of nums) {
    // Check if the negative of the current number exists in the Set
    if (numSet.has(-num)) {
      return true;
    }
  }

  // No two numbers sum to zero
  return false;
}

console.log(addToZero([]));               // false
console.log(addToZero([1]));              // false
console.log(addToZero([1, 2, 3]));        // false
console.log(addToZero([1, 2, 3, -2]));    // true


// Unique Characters:
function hasUniqueChars(word) {
  // Create a Set to store unique characters
  const charSet = new Set();

  // Iterate through each character in the word
  for (let char of word) {
    // If the character is already in the Set, return false
    if (charSet.has(char)) {
      return false;
    }

    // Add the character to the Set
    charSet.add(char);
  }

  // All characters are unique
  return true;
}

console.log(hasUniqueChars("Monday"));   // true
console.log(hasUniqueChars("Moonday"));  // false


// Pangram Sentence:
function isPangram(sentence) {
  // Convert the sentence to lowercase
  const lowercaseSentence = sentence.toLowerCase();

  // Create a Set to store unique letters
  const letterSet = new Set();

  // Iterate through each character in the sentence
  for (let char of lowercaseSentence) {
    // Check if the character is a letter (a-z)
    if (char >= 'a' && char <= 'z') {
      letterSet.add(char);
    }
  }

  // Check if the Set has all 26 letters
  return letterSet.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));  // true
console.log(isPangram("I like cats, but not mice"));  // false


// Longest Word:
function findLongestWord(words) {
  let longestLength = 0;

  // Iterate through each word in the list
  for (let word of words) {
    // Update longestLength if the current word is longer
    if (word.length > longestLength) {
      longestLength = word.length;
    }
  }

  return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));  // 5

