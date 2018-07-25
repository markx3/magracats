"use strict"

class TwitterClient {
  constructor(track, has, locations) {
    this.track = track
    this.has = has
    this.locations = locations
    this.keys= {
      consumer_key: "u61Iy7AXo5tg4cTSWMCjAEHrQ",
      consumer_secret: "wXI03DoE7g5xWU9Y6q0rVE8M2Gnb4LiCFBvLkJSEBA7mlZeMMU",
      token: "339830644-RPeqQnXoBrqlDXQ8NaMG8RahZIMmolEla8EHPD6Z",
      token_secret: "x81KdY3qQyBcV4P47V50nwJ3wzzeWwq5vbi14vamtJNkR"
    }
    this.url = "https://api.twitter.com/1.1/search/tweets.json"
  }

  get() {
    let Twitter = require('twitter')
    let client = new Twitter(this.keys)
    return client

  }

  // createStream() {
  //   let Twitter = require('twitter')
  //   this.Twitter = new TwitterStream(this.keys, false);
  //   this.Twitter.stream('statuses/filter', {
  //           track: this.track,
  //         })
  //   return this.Twitter
  // }
}

export default TwitterClient

// let twitterClient = new TwitterClient(['gato', 'adoção', 'gatos'], 'images', '')
// let stream = twitterClient.createStream()
// console.log(stream)
// let fs = require('fs')
// stream.pipe(fs.createWriteStream('tweets.json'))
