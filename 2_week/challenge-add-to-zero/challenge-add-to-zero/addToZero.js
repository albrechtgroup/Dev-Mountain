// Starting array:
// let array = [28, 43, -12, 30, 4, 0, 12]
let array = [0, 21, 33, 6, 0, -9]; // should log true
// let array = [0, 1, 2, 3, 4, 5];

// Write your solution below:
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        if (array[i] + array[j] === 0) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
