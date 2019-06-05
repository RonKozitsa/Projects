const express = require('express');
var path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/main.html', function(req, res){
    res.sendFile('/public/main.html', {root: __dirname});
});

app.get('/README.html', function(req, res){
    res.sendFile('/README.html', {root: __dirname} );
});

app.listen(PORT);

console.log(`Listening on port : ${PORT}`)