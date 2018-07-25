"use strict";

var TwitterStream = require('twitter-stream-api'),
  fs = require('fs');

var keys = {
  consumer_key: "u61Iy7AXo5tg4cTSWMCjAEHrQ",
  consumer_secret: "wXI03DoE7g5xWU9Y6q0rVE8M2Gnb4LiCFBvLkJSEBA7mlZeMMU",
  token: "339830644-RPeqQnXoBrqlDXQ8NaMG8RahZIMmolEla8EHPD6Z",
  token_secret: "x81KdY3qQyBcV4P47V50nwJ3wzzeWwq5vbi14vamtJNkR"
};

var Twitter = new TwitterStream(keys, false);
Twitter.stream('statuses/filter', {
  track: ['gato','adoção'],
  has: 'images',
  locations: '[[[-49.0126351918,-26.4449668264],[-48.6892145804,-26.4449668264],[-48.6892145804,-26.1295210113],[-49.0126351918,-26.1295210113],[-49.0126351918,-26.4449668264]]],
  '#': ['cats', 'gato', 'adoção']
});

Twitter.pipe(fs.createWriteStream('tweets.json'));

// -49.0126351918,-26.4449668264,-48.6892145804,-26.4449668264,-48.6892145804,-26.1295210113,-49.0126351918,-26.1295210113,-49.0126351918,-26.4449668264'
