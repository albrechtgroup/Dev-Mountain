const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", (req, res) => {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb";
    request(url, (error, response, body) => {
       if(!error && response.statusCode == 200){
           let data = JSON.parse(body);
           res.render("results", {data: data});
       } 
    });
});



//localhost:3000
app.listen(3000, function() { 
    console.log('=== Server listening on port 3000');
    console.log('=== Movie App has Started!'); 
  });