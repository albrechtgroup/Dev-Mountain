function findNextSquare(sq) {
    let number = Math.sqrt(sq);

    if(Math.round(number) === number) {
      return Math.pow(++number, 2)
    }

    return -1;
}
  
// This JavaScript function findNextSquare(sq) takes 
// a positive integer sq as an argument and returns 
// the next perfect square after sq, if sq is itself 
// a perfect square. If sq is not a perfect square, 
// the function returns -1.

// Here's how the function works:

// It first calculates the square root of the input 
// sq using Math.sqrt() function and stores it in 
// the number variable.

// It then checks if the square root number is a whole 
// number or not using the Math.round() function. If 
// it is a whole number, it means that sq is a 
// perfect square.

// In that case, it increments the number by 1 and 
// calculates its square using Math.pow() function, 
// and returns the result.

// If the square root number is not a whole number, 
// it means that sq is not a perfect square, and the 
// function returns -1.

// For example, if you call the function with sq 
// equal to 9, it will return 16 (which is the next 
// perfect square after 9). If you call it with sq 
// equal to 10, it will return -1 (since 10 is not 
// a perfect square).
