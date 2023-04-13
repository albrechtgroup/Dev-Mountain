// // create a variable for Jon's health

// // let jonSnowHealth = 100; // data-type:number

// // change the above to a string

// // jonSnowHealth = `${jonSnowHealth}`
// // jonSnowHealth = String(jonSnowHealth)
// // jonSnowHealth += '' //string coercion

// // console.log(Boolean(jonSnowHealth)) // returns false for 0 or ''

// // console.log(typeof jonSnowHealth)

// // let theWinnerIs = "Jamie is the winner";

// // strings are immutable so this doesnt directly manipuilate the string
// // theWinnerIs.replace('Jamie','Jon')

// // assigning value to a new variable
// // let theNewWinnerIs = theWinnerIs.replace('Jamie','Jon')

// // eassign the value of theWinnerIs
// // theWinnerIs = theWinnerIs.toLowerCase().replace("jamie", "Jon");

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
const add = (num1,num2) => num1 + num2

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


////////////////////////////////////
////// COPY AND CHANGE ARRAYS //////
////////////////////////////////////
const lotr = ['biLbO BaGGINs', 'leGOlAs', 'Frodo bAGGINS', 'sAMwiSe GamGEe', 'gAndALF tHe GREY'];

const copyArrToCamelCase = (arr) => {
    const newArr = [];
    // let myString = 'bilbo' 'Baggins'

    // myString.split('/') // ['b', 'i ', 'l', 'b', 'o', Baggins]

    for (let i = 0; i < arr.length; i++) {
        const str = arr[i]; // 'biLbO BaGGINs'
        const splitStr = str.split(' '); // ['biLbO', 'BaGGINs']
        let camelCaseStr = '';

        for (let x = 1; x < splitStr.length; x++) {
            let word = splitStr[x]; // 'biLbo' -> 'BaGGINs'

            word = word.toLowerCase(); // 'bilbo' => 'baggins'

            if (x !== 0) {
                // false => true
                //     'b' => 'B'                   + 'aggins'  = 'Baggins'
                word = word.charAt(0).toUpperCase() + word.slice(1);
            }

            camelCaseStr += word; // camelCaseStr = 'bilbo' => 'bilboBaggins'
        }

        newArr.push(camelCaseStr); // ['bilboBaggins']
    }
    return newArr;
};

const copyArrToSnakeCase = (arr) => {
    const newArr = [];
    // 'Frodo bAGGINS'
    for (let i = 0; i < arr.length; i++) {
        let str = arr[i]; // 'Frodo bAGGINS'
        str = str.toLowerCase(); // 'frodo baggins'
        const splitStr = str.split(' '); // ['frodo', 'baggins']
        const snakeCaseStr = splitStr.join('_'); // 'frodo_baggins'
        newArr.push(snakeCaseStr); // newArr = ['frodo_baggins']
    }

    return newArr;
};


// Higher Order Functions
const copyArrAndChange = (arr, cb) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let newValue = cb(arr[i]);
        result.push(newValue);
    }
    return result;
};


// Callback Functions
const copyToCamelCaseCB = (str) => {
    const splitStr = str.split(' ');
    let camelCaseStr = '';
    for (let i = 0; i < splitStr.length; i++) {
        let word = splitStr[i];
        word = word.toLowerCase();
        if (i !== 0) {
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }
        camelCaseStr += word;
    }
    return camelCaseStr;
};

const copyStrToSnakeCaseCB = (str) => str.toLowerCase().split(' ').join('_');

console.log(copyArrAndChange(lotr, copyToCamelCaseCB));
console.log(copyArrAndChange(lotr, (str) => str.toLowerCase().split(' ').join('_')));


////////////////////////////////////////
////// HIGHER ORDER ARRAY METHODS //////
////////////////////////////////////////

//// MAP ////
const nums = [1, 2, 3, 4, 5, 6, 7];
const multiplyBy10 = (num) => num * 10;

for (let i = 0; i < nums.length; i++) {
    // console.log(multiplyBy10(nums[i]));
}

let mappedNums = nums.map(multiplyBy10);
let mappedNumsCB = nums.map((num) => num * 10);

// console.log(mappedNums);

/*
    Pass a callback to map that will return 'pink'
    for each color in the array.
*/

const colors = ['red', 'blue', 'yellow', 'green', 'orange'];

const turnToPink = () => 'pink';

const mappedColors = colors.map((el) => {
    let primary = ['red', 'yellow', 'blue'];
    let isPrimary = primary.includes(el);

    return {
        color: el,
        isPrimary: isPrimary,
    };
});

console.log(colors);
console.log(mappedColors);

/*
    Edit the formalGreeting function and use the built in .map method 
    to map over the names parameter and return a new array with "Hello, " 
    appended to the beginning of each name
    
    Make sure to use arrow functions combined with the map method    
*/

const formalNames = ['Bernard', 'Elizabeth', 'Conrad', 'Mary Margaret'];

const formalGreeting = (names) => {
    // CODE HERE
    return names.map((name) => `Hello, ${name}`);
};

// Call formalGreeting passing in the formalNames array
let formalNamesUpdated = formalGreeting(formalNames);

console.log(formalNamesUpdated);


//// FILTER ////
/*
    Pass a callback to filter that will return
    only strings that begin with the letter A
*/

const places = ['Binghampton', 'Albany', 'New York', 'Ithaca', 'Auburn', 'Rochester', 'Buffalo'];

const placesThatStartWithA = places.filter((city) => city[city.length-1] === 'o');

// console.log(placesThatStartWithA);

/*
    Create a function called identifier that uses the filter higher order 
    array method to filter over the provided jobs array of objects

    The function should return the object of the person with a job as a programmer
    
    Make sure to use the arrow function in conjunction with the filter method
    
    Your returned value should be a single object, not an array with one object inside of it
    
    Use arrow functions and the filter method
*/

// Do not edit the code below.
let jobs = [{ receptionist: 'James' }, { programmer: 'Steve' }, { designer: 'Alicia' }];

// Do not edit the code above.

// CODE HERE
const identifier = arr => {
    return arr.filter(el => el.programmer)[0];
}
// console.log(identifier(jobs))

// call the function passing in the jobs array


//// REDUCE ////
/*
    Edit the productOfArray function and use 
    the built in .reduce method to loop over the numbers parameter
    and return the product of all the numbers in the array

    Make sure to use arrow functions combined with the reduce method    
*/

const numsToReduce = [43, 7, 24, 79, 290];

const productOfArray = (numbers) => {
    // Code here
    return numbers.reduce((acc, curr) => {
        return acc * curr
    })
};

console.log(productOfArray(numsToReduce));


// call productOfArray passing in numsToReduce

/*
    Pass a callback and an initial value to reduce 
    that will subtract all the expenses in the array
    from the initial budget

    This will allow us to see how much we have left
    in the budget after these expenses
*/

const budget = 2000;

const expenses = [
    {
        title: 'rent',
        amount: 1000,
    },
    {
        title: 'car payment',
        amount: 250,
    },
    {
        title: 'food',
        amount: 300,
    },
];

const remaining = expenses.reduce((a, c) => a - c.amount, budget)
console.log(remaining);