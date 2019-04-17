const http = require('http');
const app = require('./app');
const request= require('request');
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
console.log("entered into 3000");

