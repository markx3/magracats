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
  track: ['cats','adopt'],
  has: 'images',
  place_country: 'ISO 3166-2:BR',
  '#': 'cats'
});

Twitter.pipe(fs.createWriteStream('tweets.json'));
