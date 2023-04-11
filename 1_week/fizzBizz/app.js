// Tuesday Exercise: 'Max of Two'
// alert("Testing!!!")
let x = 1;
let y = 2;

// if/else conditional:
// if (x > y) {
//     console.log("X is Bigger!")
// } else {
//     console.log("Y is Bigger!")
// }

// Fizz Bizz:
for (let i = 1; i <= 50; i++) {
    if(i % 15 === 0) {
        console.log("fizzBuzz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else {
        console.log(i)
    }
}