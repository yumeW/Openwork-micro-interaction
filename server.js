
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

let path = require ('path');

app.use (express.static ('public'));


// create a path to show HTMl page // 
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname +'/views/index.html'));
});

server.listen(3000, () => {
  console.log('app is listening on ' + server.address().port);
});