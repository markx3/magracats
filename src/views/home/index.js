import React, { Component } from 'react'
import Nav from './components/nav'
import Card from '../../components/card'
import { Row, Col } from 'reactstrap'
import TwitterClient from '../../utils/twitter-client'

class Home extends Component {
  constructor(props) {
    super(props)
    this.twitterClient = new TwitterClient(['gato', 'adoção', 'gatos'], 'images', '')
    this.twitterStream = this.twitterClient.createStream()
  }

  handleTwitter() {
    let obj = this.twitterStream.on('data', (obj) => {
      return obj
    })
    return (
      <Row>
        <Card
          tweetImg={obj.media_url}
          tweet={obj.text}
          tweetUrl={obj.url}
        >
        </Card>
      </Row>
    )
  }

  render() {
    return (
      <div>
        <Nav/>
        <br/>
          <Col sm="4"></Col>
            <Col sm="4">
              {this.handleTwitter()}
            </Col>
          <Col sm="4"/>
        </div>
    )
  }
}

export default Home
