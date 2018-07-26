import React, { Component } from 'react'
import Nav from './components/nav'
import Card from '../../components/card'
import { Row, Col } from 'reactstrap'
import TwitterClient from '../../utils/twitter-client'
import ReactDOM from 'react-dom'
import openSocket from 'socket.io-client'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null,
      mounted: false
    }
    this.socket = openSocket('http://localhost:8000')
    this.subscribeToTwitter()
  }

  subscribeToTwitter() {
    this.socket.on('twitter', tweetCollection => {
      this.setState({
        tweets: tweetCollection.statuses
      })
      console.log(this.state.tweets)
    })
    this.socket.emit('subscribeToTwitter', 15000)
  }

  componentDidMount() {
    this.setState({
      interval: 15000
    })
  }

  renderTweets(tweet) {
    if (tweet.entities.media) {
      return (
        <Row>
          <Card
            tweetImg={tweet.entities.media && tweet.entities.media[0].media_url}
            tweet={tweet.text}
            tweetUrl={'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id_str}
          >
          </Card>
          <br />
        </Row>
      )
  }
}

  render() {
    return (
      <div>
        <Nav/>
        <br/>
          <Row>
            <Col sm="4"></Col>
            <Col sm="4">
              <div id="main-col" center>
                { this.state.tweets && this.state.tweets.map(this.renderTweets) }
              </div>
            </Col>
            <Col sm="4"></Col>
        </Row>
      </div>
    )
  }
}

export default Home
