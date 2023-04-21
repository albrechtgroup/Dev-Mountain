/////////////////////////////////////////////////
/// *===> DJ Code <===* ///
function printDigits(num) {
  while (num) {
    console.log(num % 10);
    num = Math.floor(num / 10);
  }
}
console.log(printDigits(5951));

// DIGITS BACKWARDS
function printDigits(num) {
    // IF NUM is NEGATIVE, NUM TO POSITIVE
    if (num < 0) {
      num = -num;
    }

    // IF NUM EQUALS 0 PRINT 0
    if (num === 0) {
      console.log(0);
      return;
    }
  
    // WHILE NUM GRATER THAN 0
    while (num > 0) {
      const digit = num % 10; // 12345 % 10 = 5  // 1234 % 10 = 4 
      console.log(digit); // 5  // 4
      num = (num - digit) / 10; // 12340 / 10 = 1234  // 1230 / 10 = 123
    }
  }

// CALL TO FUNCTION
 
function printDigits(num){ // => function that takes in one parameter
    let rem = Math.abs(num); // => variable to hold value as it changes. Abs value in case negative
    while (rem%10 > 0){ // => loop to keep going while modulo result greater then zero
    console.log(rem % 10) // => print last value using modulo
    rem = Math.floor(rem/10) // => using Math floor to drop last value
    }
}

printDigits(12345);


let counter = 0

const reverse = (num) => {
    let reverseNum = 0
    while(num > 0){
        let digit = num % 10
        reverseNum = (reverseNum * 10) + digit
        num = Math.floor(num/10)
    }
    return reverseNum
    
}

console.log(reverse(312))