// alert("Heyyy")
let count = 0;
const counter = document.querySelector('#counter');
const plusBtn = document.querySelector('#plus-btn');
const minusBtn = document.querySelector('#minus-btn');
const resetBtn = document.querySelector('#reset-btn');


let increment = () => {
    count++;
    counter.textContent = count;
}

let decrement = () => {
    if(count - 1 >= 0) {
        count--;
        counter.textContent = count;
    }
    
}

let reset = () => {
    count = 0;
    counter.textContent = 0;
}

plusBtn.addEventListener('click', increment);
minusBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset)



