/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
console.log('*** arrays.js ***');

let backpack = [];

backpack.push('Sword');
backpack.push('Torch');
backpack.push('Food');
backpack.push('kleenex');
backpack.push('Shield');
backpack.push('Clorox');
backpack.push('Sweater');

console.log(backpack);

// Finish from screenshots Live*


// Creating && modifying an 'array':
let favFoods = ["tacos", "pizza", "tortellini"];
console.log(favFoods); 
//  ["tacos", "pizza", "tortellini"];

// .push() adds to End of array (HEre 2 at a time*):
favFoods.push("fish tacos", "berry smoothies")
console.log(favFoods);
//  ['tacos', 'pizza', 'tortellini','fish tacos', 'berry smoothies']

// .pop() will 'pop off' the End of array:
favFoods.pop();
console.log(favFoods);
// ['Quesadilla!', 'tacos', 'pizza', 'tortellini', 'fish tacos']

// Adding New Favorite Recipe to beggining of array!*
favFoods.unshift("Quesadilla!");
console.log(favFoods);
// ['Quesadilla!', 'tacos', 'pizza', 'tortellini', 'fish tacos']
