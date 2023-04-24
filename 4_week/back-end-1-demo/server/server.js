// Imports and packages needed to create/run the server:
const express = require("express");
const cors = require("cors");
// Initializing express
const app = express();
// Middleware .use
app.use(express.json()) 
app.use(cors());

// Dummy-date/fake database
const inventory = ['greeting card', 'table', 'chair', 'leather chair', 'milk', 'bicycle', 'cheese', 'desk', 'Land Rover'];

// endpoints: url & handler-function with a request(req)
// and a response object(res)
app.get('/api/inventory', (req, res) => {
    if (req.query.item) {
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    } else {
        res.status(200).send(inventory)
    }
});
// Get endpoint with a param 
app.get('/api/inventory/:id', (req, res) => {
    res.status(200).send(inventory[+req.params.id])
});

// Runs the server on Port 5050:
const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log('===> PORT 5050 Connected <==='));