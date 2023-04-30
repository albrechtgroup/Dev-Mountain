const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");
const dadJokeButton = document.querySelector('#dadJokeButton');
// const tetrisBtn = document.querySelector('#tetrisButton')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
            console.log(data);
    });
}

complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);

/// Incorporated an old 'get dad jokes'. Via JSON request*///
const jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    console.log(jokeText)
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);
    console.log("Dad Joke Button Clicked*")
}

const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "Sorry, No jokes available."
    }
    
}

dadJokeButton.addEventListener('click', addNewJoke);

