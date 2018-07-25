import React, { Component } from 'react'
import Nav from './components/nav'
import Card from '../../components/card'
import { Row, Col } from 'reactstrap'
import TwitterClient from '../../utils/twitter-client'
import ReactDOM from 'react-dom'

class Home extends Component {
  constructor(props) {
    super(props)
    this.twitter= new TwitterClient(['gato', 'adoção', 'gatos'], 'images', '')
    this.twitterClient = this.twitter.get()
  }

  handleTwitter() {
    this.twitterClient.get('search/tweets', {q: 'gatos adoção'}, (error, tweet, response) => {
      ReactDOM.render(
        (<Row>
          <Card
            tweetImg={tweet.media_url}
            tweet={tweet.text}
            tweetUrl={tweet.url}
          >
          </Card>
        </Row>),
        document.getElementById('main-col')
      )
    })
  }

  render() {
    return (
      <div>
        <Nav/>
        <br/>
          <Col sm="4"></Col>
            <Col sm="4" id="main-col">
              {this.handleTwitter()}
            </Col>
          <Col sm="4"/>
        </div>
    )
  }
}

export default Home
