console.log("*==> Solution <==*");

const printDigits = num => {
    while (num) {
      let digitToPrint = num % 10
      console.log(digitToPrint)
      num = (num - digitToPrint) / 10
    }
  }
  
  printDigits(1)
  printDigits(162)
  printDigits(597842)

console.log("*===> Version 2 <===*");

const printDigits2 = num => {
    while(num > 0) { // continue until all digits have been printed
        const digit = num % 10; // get the digits from the right
        console.log(digit); // print the digit
        num = Math.floor(num/10); // remove the digit furthest from the right
    }
}


printDigits2(162)
printDigits2(597842)
