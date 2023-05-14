require('dotenv').config(); 
const express = require("express");
const bots = require("./src/botsData");
const shuffle = require("./src/shuffle");
let botsArr = [];

const app = express();

const playerRecord = {
  wins: 0,
  losses: 0,
};

app.use(express.json());
app.use(express.static(`${__dirname}/public`))

const { ROLLBAR_ACCESS_TOKEN } = process.env

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

// Add up the total health of all the robots
const calculateTotalHealth = (robots) =>
  robots.reduce((total, { health }) => total + health, 0);

// Add up the total damage of all the attacks of all the robots
const calculateTotalAttack = (robots) =>
  robots
    .map(({ attacks }) =>
      attacks.reduce((total, { damage }) => total + damage, 0)
    )
    .reduce((total, damage) => total + damage, 0);

// Calculate both players' health points after the attacks
const calculateHealthAfterAttack = ({ playerDuo, compDuo }) => {
  const compAttack = calculateTotalAttack(compDuo);
  const playerHealth = calculateTotalHealth(playerDuo);
  const playerAttack = calculateTotalAttack(playerDuo);
  const compHealth = calculateTotalHealth(compDuo);

  return {
    compHealth: compHealth - playerAttack,
    playerHealth: playerHealth - compAttack,
  };
};

app.get("/api/robots", (req, res) => {
  try {
    // Fix this error! line 42
    res.status(200).send(botsArr);
    rollbar.info('* Getting the Robots from the Array *')
  } catch (error) {
    rollbar.warning('! Error Getting BOTS !')
    console.error("ERROR GETTING BOTS", error)
    res.sendStatus(400);
  }
});

app.get("/api/robots/shuffled", (req, res) => {
  try {
    let shuffled = shuffle(bots);
    res.status(200).send(shuffled);
    rollbar.info('* Robots are being Shuffled *')
  } catch (error) {
    rollbar.critical('! Error Getting Shuffled BOTS !')
    console.error("ERROR GETTING SHUFFLED BOTS", error);
    res.sendStatus(400);
  }
});

app.post("/api/duel", (req, res) => {
  try {
    const { compDuo, playerDuo } = req.body;

    const { compHealth, playerHealth } = calculateHealthAfterAttack({
      compDuo,
      playerDuo,
    });

    // comparing the total health to determine a winner
    if (compHealth > playerHealth) {
      playerRecord.losses += 1;
      res.status(200).send("You lost!");
      rollbar.info('* User LOST *')
      rollbar.log('* User LOST *')
    } else {
      // *ERROR* playerRecord.losses changed to playerRecord.wins *
      playerRecord.wins += 1;
      res.status(200).send("You won!");
      rollbar.info('* User WINS *')
      rollbar.log('* User WINS *')
    }
  } catch (error) {
    console.log("ERROR DUELING", error);
    res.sendStatus(400);
  }
});

app.get("/api/player", (req, res) => {
  try {
    res.status(200).send(playerRecord);
  } catch (error) {
    console.log("ERROR GETTING PLAYER STATS", error);
    res.sendStatus(400);
  }
});

app.listen(8000, () => {
  console.log(`===> Listening on Port 8000 <===`);
});
