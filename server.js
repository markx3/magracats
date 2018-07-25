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

  client.on('subscribeToTwitter', () => {
    // TODO: Switch to search, perhaps
    twitterClient.stream(
      'statuses/filter',
      {
        track: 'cat,kitten,kitty',
        has: 'images',
      },
      (stream) => {
        stream.on('data', (event) => {
          client.emit('twitter', event)
        })
        stream.on('error', (error) => {
          console.log('error', error)
        })
      })
  })

})
io.listen(port)
console.log('listening on port', port)

