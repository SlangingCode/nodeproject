var express = require('express');
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('bower_components'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index', {
        list: ['first val', '2nd val', '3rd val'],
        nav: ['Services', 'Portfolio', 'About', 'Team', 'Contact', 'New Thing']
    });
});

app.get('/routing', function (req, res) {
    res.send('Aloha Routing!');
});

app.listen(port, function(err) {
    console.log('The server is running on port : ' + port);
});