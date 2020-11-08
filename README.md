1) What is Express?

Express is a minimal and flexible Node.js web application framework
that provides a robust set of features to develop web and mobile
applications. It facilitates the rapid development of Node based
Web applications.

2) Write an server application that listens on localhost:3000 and returns “Welcome to Data
Representation & Querying”.

const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) =>
res.send('Welcome to Data Representation & Querying!'));
app.listen(port, () =>
console.log(`Example app listening on port ${port}!`));

3) Add another route point using the Express Framework that will take an argument form
the url path and return hello “argument” for the url http://localhost:3000/hello

var express = require('express');
var app = express();
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) =>
res.send('Welcome to Data Representation & Querying'))
app.get('/', (req, res) =>
res.send('Hello World'))
app.get('/hello/:name', (req, res) =>
{
console.log(req.params.name);
res.send('Hello ' + req.params.name);
})
app.listen(port, () =>
console.log(`Example app listening on port ${port}!`))

4) Add a route point /api/movies that will return json data:
SOLUTION
app.get('/api/movies', (req,res,next) =>{
const movies = [
{
"Title":"Avengers: Infinity War",
"Year":"2018",
"Poster":"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
"Title":"Captain America: Civil War",
"Year":"2016",
"Poster":"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
}
];
res.status(200).json({
message: 'Posts fetched succesfully!',
movies: movies
