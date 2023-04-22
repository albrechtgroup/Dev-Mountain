console.log("Profile JS Connected!!!");

const colorBtn = document.querySelector('#color');
const placeBtn = document.querySelector('#place');
const ritualBtn = document.querySelector('#ritual');

colorBtn.addEventListener('click', () => {
    alert('Is GREEN!');
});

placeBtn.addEventListener('click', () => {
    alert('The Adirondacks Park');
});

ritualBtn.addEventListener('click', () => {
    alert('Long walks in Nature');
});