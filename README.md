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
