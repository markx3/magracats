import React, { Component } from 'react'
import Card from '../../components/card'
import { Row, Col, Card as RSCard, CardBody, CardImg, CardText } from 'reactstrap'
import openSocket from 'socket.io-client'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: null,
      mounted: false
    }
  }

  subscribeToTwitter() {
    this.socket.on('twitter', tweetCollection => {
      this.setState({
        tweets: tweetCollection.statuses
      })
      console.log(this.state.tweets)
    })
    this.socket.emit('subscribeToTwitter', 10000)
  }

  componentWillMount() {
    this.socket = openSocket('http://localhost:8000')
    this.subscribeToTwitter()
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

renderLoading() {
  return (
    <RSCard>
    <CardImg src="https://i.kym-cdn.com/photos/images/original/000/480/551/b04.gif"></CardImg>
      <CardBody>
        <CardText><div class="text-center"><h3>Loading...</h3></div></CardText>
      </CardBody>
    </RSCard>
  )
}

  render() {
    return (
      <div>
        <br/>
          <Row>
            <Col sm="4"></Col>
            <Col sm="4">
              <div id="main-col" className="text-center" center>
                <h2>KittyTweet Explorer</h2>
                <br/>
                {!this.state.tweets && this.renderLoading() }
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
