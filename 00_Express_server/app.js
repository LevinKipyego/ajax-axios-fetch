const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

//import apiRouter.js
const apiRouter = require('./api/apiRouter');

const hostname = '127.0.0.1';
const port = 9000;

//configure bodyParser
const jsonParser = bodyParser.json();
const urlEncoderParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);
app.use(urlEncoderParser);

//configure cors
app.use(cors());

//configure apiRouter
app.use('/api', apiRouter) //any request starting with /api will be routed to apiRouter.js 

//GET
app.get('/', (request, response) => {
    response.send(`<h2>welcome to express</h2>`) // displaying response on a web page  from server 
});

app.listen(port, hostname, () => {
    console.log(`Expresss server is started at http://${hostname}:${port}`)
});