const io = require('socket.io')()
const keys = {
  consumer_key: "u61Iy7AXo5tg4cTSWMCjAEHrQ",
  consumer_secret: "wXI03DoE7g5xWU9Y6q0rVE8M2Gnb4LiCFBvLkJSEBA7mlZeMMU",
  access_token_key: "339830644-RPeqQnXoBrqlDXQ8NaMG8RahZIMmolEla8EHPD6Z",
  access_token_secret: "x81KdY3qQyBcV4P47V50nwJ3wzzeWwq5vbi14vamtJNkR"
}
const twitter = require('twitter')
let twitterClient = twitter(keys)

const port = 8000

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval', interval)
    setInterval(() => {
      client.emit('timer', new Date())
    }, interval)
  })

  client.on('subscribeToTwitter', (interval) => {
    // TODO: Switch to search, perhaps
    console.log('client is subscribing to twitter with interval', interval)
    setInterval(() => {
      twitterClient.get(
        'search/tweets',
        {
          q: "cat adoption filter:media -filter:retweets",
          result_type: "mixed",
          count: 100
         // geocode: "26.2864917,-48.9949697,10mi"
        },
        (error, tweets, response) => {
          if (error) console.log(error)
          console.log(response)
          client.emit('twitter', tweets)
        })
    }, interval)
  })

})
io.listen(port)
console.log('listening on port', port)

