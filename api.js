var express = require('express');
var http = require('http');
var generator = require('./generate_quote');

var app = express();

app.get('/tom', function (req, res) {
  console.log(generator.getTweetSingleCorpus)
  generator.getTweetSingleCorpus('data/tom.txt', function(tweet) {
    console.log('iamtweet', tweet);
  });
});

app.get('/mary', function (req, res) {

});



app.listen(3000, function () {
  console.log("Thing app is running at localhost:" + 3000);
});
