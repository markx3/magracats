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
      tweets: []
    }
    this.socket = openSocket('http://localhost:8000')
    this.tweets = []
    this.subscribeToTwitter()

  }

  subscribeToTwitter() {
    this.socket.on('twitter', tweet => {
      if (tweet.entities.media) {
        console.log(this.state.tweets)
        this.setState({
          tweets: [...this.state.tweets, tweet]
        })
      }
    })
    this.socket.emit('subscribeToTwitter', 10000)
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
                { this.state.tweets.forEach(tweet => {
                  <Row>
                    <Card
                      tweetImg={tweet.entities.media[0].media_url}
                      tweet={tweet.text}
                      tweetUrl={'https://twitter.com/' + tweet.user.screen_name + '/status/' + tweet.id}
                    >
                    </Card>
                  </Row>
                })}
              </div>
            </Col>
            <Col sm="4"></Col>
        </Row>
      </div>
    )
  }
}

export default Home
