/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 
console.log('*** varsAndConditionals.js ***');

// Create a Variable:
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
    console.log(`Jon has a greater Attack!`)
} else if (jonSnowAttack === jamieLannisterAttack) {
    console.log(`Even Match!!!`)
} else {
    console.log(`Jamie has a greater Attack!!`)
}
