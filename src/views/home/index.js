import React, { Component } from 'react'
import Nav from './components/nav'
import Card from '../../components/card'
import { Row, Col } from 'reactstrap'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav/>
        <br/>
        <Row>
          <Col sm="6">
            <Card
              tweetImg="http://pbs.twimg.com/media/Di6GVEnU4AAQQfq.jpg"
              tweet="RT @Anocas21: LADYBUG E GATO NOIR FIQUEM LOGO JUNTOS PFF PAREM COM ESTE SOFRIMENTO CONSTANTE"
              tweetUrl="https://t.co/dunmd2nisG"
            >
            </Card>
          </Col>
          <Col sm="6">
          <Card></Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Home
