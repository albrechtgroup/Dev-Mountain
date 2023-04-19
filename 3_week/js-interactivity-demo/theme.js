// Get the HTML Element:
let themeBtns = document.querySelectorAll('.theme-button');
let body = document.querySelector('body');
let main = document.querySelector('main');
let btns = document.querySelector('button');

// Create Callback:
let themeSelector = (event) => {
    let theme = event.target.textContent;
    console.log(event.target);

    body.className = theme;
    main.className = main;
    for(let i = 0; i < btns.length; i++) {
        btns[i].className = theme;
    }
};

for(let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', themeSelector);
}

// Creating a New Element:
for(let i = 0; i < 10; i++) {
    let p = document.createElement('p');
    p.textContent = "I am a createdElement <p> tag!!";
    main.appendChild(p);
}