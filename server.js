var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/notes', { useMongoClient: true });

var notes = new mongoose.Schema({
    title: String,
    body: String
});
var Notes = mongoose.model('Notes',notes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes')(app, Notes);

app.listen(8000);

