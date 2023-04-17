// For the following problems, please type out the answer
// to each problem instruction. Answers are expected to
// be valid JS code, unless stated otherwise.

// *** Problem 1 ***
//  Students should be able to define functions with a 
//  variety of syntaxes.

// 1.1a
//  Define a function that logs the string
//  "My function was invoked!".
//  This function has no parameters and returns nothing.
//  Do this with a function declaration.
function logString() {
    console.log("My function was Invoked!");
}

logString();


// 1.2
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be the traditional syntax
//  of a function expresssion.

const logString2 = function() {
    console.log("My 2nd function was Invoked!!")
};

logString2();


// 1.3
//  Do problem 1.1 but with a function expression instead.
//  The defined function expression should be an arrow function.

const logString3 = () => console.log("My 3rd function was Invoked!!!");

logString3();
 

// *** Problem 2 ***
//  Students should understand how to write functions that return
//  values.

// 2.1
//  Create a function that takes two parameters and returns the
//  product (multiplication) of the parameters. Assume that the
//  two parameters will always be number data types.
//  Your function must use the return keyword. Also, your function
//  should not log anything.

const myFunc2 = (a, b) => {
    return a * b;
}

console.log(myFunc2(3, 333)); // 999


// 2.2
//  Create the function from 2.1, only this time, use an arrow
//  function with an implicit return.

const myFunc = (a, b) => a * b;

console.log(myFunc(2, 3)); // 6


// 2.3
//  Define a function that takes two parameters and returns the
//  quotient (division) of the parameters.  The first parameter
//  is the dividend, and the second is the divisor. Assume that
//  the two parameters are always numbers.
//  In the case that the divisor is 0 and the dividend is not,
//  your function must return null and log the string
//  "cannot divide by 0".
//  Note: as an additional constraint to this problem, your
//  function must contain an "if" statement without any "else"
//  or "else if"s chained onto it.

const divFunction = (dividend, divisor) => {
    // return dividend/divisor;
    return divisor === 0 && dividend !== 0 ? 'Cannot divide by 0' : dividend / divisor;
}

console.log(divFunction(100, 3)); // 33.3333333


// *** Problem 3 ***
//  Students should be able to invoke (call) functions.

// 3.1
//  Define a function that logs "Coding is fun!", and invoke the
//  the function. The function should not return anything.
//  Do not save the result of the function.

function codingIsFun() {
    console.log("Coding is FUN!!!");
}

codingIsFun();


// 3.2
//  Define a function that takes one parameter, a number, and
//  returns the parameter plus 50. Invoke your function three
//  times with three different numbers, and save those values
//  to three different variables.

function plus50(num) {
    return num + 50;
}

let sum1 = plus50(51);
let sum2 = plus50(49);
let sum3 = plus50(100);
console.log(sum1); // 101 


// 3.3
//  Create an array with three values. These three values will be
//  the results of invoking the function from problem 2.3 three times,
//  with each invokation having different arguments.
//  After your array is created, log it to the console.




// *** Problem 4 ***
//  Students should understand what callback functions and higher
//  order functions are. Students should be able to write callbacks
//  that will be invoked by pre-defined higher order functions.

// 4.1a
//  Note the higher order function, "higher", which takes a callback
//  function as its second parameter. Define a callback function
//  named "callback" that has one number parameter. Your callback
//  function should return the sum of this number and 36.
let callBack = (num) => num + 36;

function higher(num, cb) {
    return cb(num)
}


// 4.1b
//  Finally, invoke "higher" with the first parameter being a
//  number of your choice, and the second parameter being the
//  callback written in 4.1a. Save the result of this invocation
//  to a variable.
let sum5 = higher(35, callBack);
console.log(sum5); // 71


