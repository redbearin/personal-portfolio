'use strict'

//add the dotenv library
require('dotenv').config();

//adds express to do the heavy lifting
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

//tell express where to find our index.html
app.use(express.static('./public'));

//create a /hello route for express to listen to
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});
app.get('data', (req, res) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }  
  res.status(200).json(airplanes);
});

//Catchall for routes that don't exist

app.use('*', (req, res) => res.send('Sorry this route does not exist'));

//Turn on the server so it can listen on the PORT
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));