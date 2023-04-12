
// // create a variable for Jon's health

// // let jonSnowHealth = 100; // data-type:number

// //change the above to a string

// // jonSnowHealth = `${jonSnowHealth}`
// // jonSnowHealth = String(jonSnowHealth)
// // jonSnowHealth += '' //string coercion

// // console.log(Boolean(jonSnowHealth)) // returns false for 0 or ''

// // console.log(typeof jonSnowHealth)

// // let theWinnerIs = "Jamie is the winner";

// //strings are immutable so this doesnt directly manipuilate the string
// // theWinnerIs.replace('Jamie','Jon')

// //assigning value to a new variable
// // let theNewWinnerIs = theWinnerIs.replace('Jamie','Jon')

// //reassign the value of theWinnerIs
// theWinnerIs = theWinnerIs.toLowerCase().replace("jamie", "Jon");

// console.log(theWinnerIs);

// //check if string includes Jon and console log it to confirm

// if (theWinnerIs.includes("Jon")) {
//   console.log("changes confirmed to string");
// }

// //lets convert our string to kebab case : jon-is-the-winner

// // let newWinnerLower = theWinnerIs.toLowerCase()
// // let newWinnerSplit = newWinnerLower.split(' ')
// // let newWinnerJoin = newWinnerSplit.join('-')

// // let newWinnerKebab = theWinnerIs.toLowerCase().split(" ").join("-");

// //Functions
// //function declaration gets hoiseted to the top of the file
// function isJonAlive() {
//   if (jonSnowHealth > 0) {
//     console.log("Jon is alive");
//   } else {
//     console.log("jon has been slain, RIP Jon");
//   }
// }

// //calling the function to run it
// // isJonAlive()

// //function with params for everytime jon is attacked
// const surpriseAttackJon = function (attack) {
//   jonSnowHealth -= attack;
// //   isJonAlive();
// };

// surpriseAttackJon(30);
// surpriseAttackJon(20);
// surpriseAttackJon(25);
// surpriseAttackJon(35);

// //function with multiple arguments
// //lets create a function which helps 2 people greet each other

// // const greeting = (person1,person2) => {
// //     console.log(`${person1} says hello to ${person2}`)
// // }

// const greeting = (person1,person2) => console.log(`${person1} says hello to ${person2}`)

// greeting('Vinson','Melissa')
// greeting('Dj','Ashley')

// //create a function to represent a dice roll

// function rollDice(){
//     let possibleRoles = [1,2,3,4,5,6]
//     let randomNumber = Math.floor(Math.random() * possibleRoles.length)
//     return possibleRoles[randomNumber]
// }

// // let firstRoll = rollDice() //after the equals the function is executed and its value is place here
// // console.log(firstRoll)

// //lets create a function that calls rollDice twice and multiplies the value and returns it

// function diceMultiplier(){
//     let firstRoll = rollDice()
//     let secondRoll = rollDice()

//     return firstRoll * secondRoll
// }

// let multipliedDice = diceMultiplier()
// console.log(multipliedDice,firstRoll,secondRoll)

// //create a variable for Jon's health

// let jonSnowHealth = 100; // data-type:number

// //change the above to a string

// // jonSnowHealth = `${jonSnowHealth}`
// // jonSnowHealth = String(jonSnowHealth)
// // jonSnowHealth += '' //string coercion

// // console.log(Boolean(jonSnowHealth)) // returns false for 0 or ''

// // console.log(typeof jonSnowHealth)

// let theWinnerIs = "Jamie is the winner";

// //strings are immutable so this doesnt directly manipuilate the string
// // theWinnerIs.replace('Jamie','Jon')

// //assigning value to a new variable
// // let theNewWinnerIs = theWinnerIs.replace('Jamie','Jon')

// //reassign the value of theWinnerIs
// theWinnerIs = theWinnerIs.toLowerCase().replace("jamie", "Jon");

// console.log(theWinnerIs);

// //check if string includes Jon and console log it to confirm

// if (theWinnerIs.includes("Jon")) {
//   console.log("changes confirmed to string");
// }

// //lets convert our string to kebab case : jon-is-the-winner

// // let newWinnerLower = theWinnerIs.toLowerCase()
// // let newWinnerSplit = newWinnerLower.split(' ')
// // let newWinnerJoin = newWinnerSplit.join('-')

// let newWinnerKebab = theWinnerIs.toLowerCase().split(" ").join("-");

// //Functions
// //function declaration gets hoiseted to the top of the file
// function isJonAlive() {
//   if (jonSnowHealth > 0) {
//     console.log("Jon is alive");
//   } else {
//     console.log("jon has been slain, RIP Jon");
//   }
// }

// //calling the function to run it
// // isJonAlive()

// //function with params for everytime jon is attacked
// const surpriseAttackJon = function (attack) {
//   jonSnowHealth -= attack;
// //   isJonAlive();
// };

// surpriseAttackJon(30);
// surpriseAttackJon(20);
// surpriseAttackJon(25);
// surpriseAttackJon(35);

// //function with multiple arguments
// //lets create a function which helps 2 people greet each other

// // const greeting = (person1,person2) => {
// //     console.log(`${person1} says hello to ${person2}`)
// // }

// const greeting = (person1,person2) => console.log(`${person1} says hello to ${person2}`)

// greeting('Vinson','Melissa')
// greeting('Dj','Ashley')

// //create a function to represent a dice roll

// function rollDice(){
//     let possibleRoles = [1,2,3,4,5,6]
//     let randomNumber = Math.floor(Math.random() * possibleRoles.length)
//     return possibleRoles[randomNumber]
// }

// // let firstRoll = rollDice() //after the equals the function is executed and its value is place here
// // console.log(firstRoll)

// //lets create a function that calls rollDice twice and multiplies the value and returns it

// function diceMultiplier(){
//     let firstRoll = rollDice()
//     let secondRoll = rollDice()

//     return firstRoll * secondRoll
// }

// let multipliedDice = diceMultiplier()
// console.log(multipliedDice,firstRoll,secondRoll)

// Traditional anonymous function
(function (a) {
  return a + 100;
});

// ARROW Functions
// 1. Remove the word "function" and place arrow between the argument and opening body bracket
(a) => {
  return a + 100;
};

// 2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

// 3. Remove the parameter parentheses
a => a + 100;



// Wednesday's Demo Lecture:
onst add = (num1,num2) => num1 + num2

const subtract = (num1,num2) => num1 - num2

const multiply = (num1,num2) => num1 * num2

const divide = (num1,num2) => num1 / num2

const calculator = (num1,num2,cb) => {
  //checking to see if input is coercible to a number
  if(+num1 && +num2){
    num1 = Number(num1)
    num2 = +num2
    return cb(num1,num2)
  } else {
    return console.log(`please provide numbers only`)
  }
}

console.log(calculator(10,2,divide)) 
console.log(calculator(10,'2',multiply))


const applyPercentDiscount = (product,discount) => {
    product.displayPrice = product.basePrice * (1 - discount)
}

const applyFlatDiscount = (product,discount) => {
  product.displayPrice = product.basePrice - discount
}

//higher-order method that allows us to write a loop once and apply discounts
const applyDiscounts = (arr,cb,discount) => {
  for(let i = 0;i < arr.length;i++){
    cb(arr[i],discount)
  }
}

// applyDiscounts(dogProducts,applyFlatDiscount,1)
// applyDiscounts(catProducts,applyPercentDiscount,.20)

//apply discount by categories
const discountByCategory = (arr,cb,discount,category) => {
  for(let i =0;i < arr.length;i++){
    if(arr[i].category === category){
      cb(arr[i],discount)
    }
  }
}

discountByCategory(dogProducts,applyFlatDiscount,2,1)
discountByCategory(catProducts,applyPercentDiscount,.10,2)
console.log(dogProducts)
console.log(catProducts)


const applyDiscountByInventory = (arr,cb,discount,amount) => {
  for(let i =0;i < arr.length;i++){
    if(arr[i].inventory < amount){
      cb(arr[i],discount)
    }
  }
}