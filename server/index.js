const express = require('express');
const http = require('http')
const bodyParser = require('body-parser');
const resourceRouter = require('./routes/resourceRouter');

const hostname = 'localhost';
const port = 7000;

const app = express();
app.use(bodyParser.json());

app.use('/resources', resourceRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});