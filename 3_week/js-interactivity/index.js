// In index.js, create a new function called addMovie 
// that takes in an event as a parameter.

function addMovie(event) {
    // Get and set the value of our input field in 
    // this function, so let’s select it now. Use 
    // querySelector to get the input, save it to 
    // a variable called inputField.
    let inputField = document.querySelector('input');
    // Create a new variable called movie, store a 
    // new li element in it using document.createElement
    const movie = document.createElement('li');
    // Create a new span element and save it to a 
    // variable called movieTitle. 
    const movieTitle = document.createElement('span');
    // Set the textContent of movieTitle to be the 
    // value of inputField.
    movieTitle.textContent = inputField.value;
    // append the movieTitle span to our movie element. 
    // Use the appendChild method on movie, passing 
    // in movieTitle to attach the title to its  parent.
    movie.appendChild(movieTitle);

}


////////// Solution  //////////////////////////////
document.querySelector("form").addEventListener("submit", addMovie);
const message = document.querySelector('#message')

function addMovie(event) {
  event.preventDefault();
  let inputField = document.querySelector('input')

  const movie = document.createElement('li')

  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle)

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "x";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);

  //or
  //document.querySelector("ul").appendChild(movie)

  inputField.value = ''
}

function deleteMovie(event) {
    //intermediate
    // message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    //core lab 
    message.textContent = `Movie deleted!`

    //revealMessage is part of the intermediate instructions
    revealMessage()

    event.target.parentNode.remove();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')

    if (event.target.classList.contains('checked') === true) {
        message.textContent = 'Movie watched!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = 'Movie added back!'
        //interemdiate version
        //message.textContent = `${event.target.textContent} added back!`
    }

    //revealMessage will be part of the intermediate instructions
    revealMessage()
}


//revealMessage will be part of the intermediate instructions
function revealMessage() {
    // message.classList.remove('hide')
    
    setTimeout(() => {
        message.classList.add('hide')
    }, 1000)
}















///////// DJ CODE //////////
// const counterText = document.querySelector('#counter')
// const minusBtn = document.querySelector('#minus-btn')
// const resetBtn = document.querySelector('#reset-btn')
// const plusBtn = document.querySelector('#plus-btn')
// let count = 0;

// function increase() {
//     count++
//     counterText.textContent = count
//     // console.log(count)
// }

// function decrease() {
//     count--
//     counterText.textContent = count
//     // console.log(count)
// }

// function reset() {
//     count = 0
//     counterText.textContent = count
//     // console.log(count)
// }


// minusBtn.addEventListener('click', decrease)
// resetBtn.addEventListener('click', reset)
// plusBtn.addEventListener('click', increase)

// const themeBtns = document.querySelectorAll('.theme-buttons')

// for (let i = 0; i < themeBtns.length; i++) {
//     themeBtns[i].addEventListener('click', selectTheme)
// }

// function selectTheme(event) {
//     const theme = event.target.textContent
//     document.querySelector('body').className = theme
//     document.querySelector('main').className = theme
    
//     const buttons = document.querySelectorAll('button')

//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].className = theme;
//     }
// }