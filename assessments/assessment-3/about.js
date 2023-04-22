console.log("home.js connected");

const form = document.querySelector('#contact');
const image = document.querySelector('img');


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Your FORM has been Submitted');
}


form.addEventListener('click', handleSubmit);
image.addEventListener('mouseover', () => {
	alert('You are amazing and apart of something special!!!');
});
