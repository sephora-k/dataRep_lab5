//sets up web server 
const express = require('express');
const app = express();
const port = 3000;
const path = ('path'); //determines directory of file
const bodyParser = require("body-parser");

//-------------------------------------------

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {  //HTTP get request URL: localhost:3000/...
  res.send('Welcome to Data Representation & Querying!'); //sends back text, displays in browser
})

app.get('/hello/:name', (req, res)=>{ // web server is listening for a get request from the following URL
    console.log(req.params.name); //outputs inserted name
    res.send('Hello ' + req.params.name); //displays 'Hello' & name in browser
})

app.get('/api/movies', (req, res)=>{ 
    const myMovies = [
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
        ];
                
    res.json({movies: myMovies}); //'movies' is the object that contains data & JSON data is being sent from server to client
});

app.get('/test', (req, res)=>{
    res.sendFile(__dirname + '/index.html'); //sends file up to web client
})

app.get('/name', (req, res)=>{
    res.send('Hello ' + req.query.fname + ' ' + req.query.lname);
}) //sends back first name & last name

app.post('/name', (req, res)=>{ //listens for post request
    res.send('Hello ' + req.body.fname + ' ' + req.body.lname);
})

app.listen(port, () => { //listening to port 3000
  console.log(`Example app listening at http://localhost:${port}`)
})