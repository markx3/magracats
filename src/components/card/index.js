import React, { Component } from 'react'
import { Card as RSCard, CardBody, Button, CardTitle, CardImg, CardText, Row, Col  } from 'reactstrap'
import styles from './styles.css'

class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tweetImg: "",
      tweet: "",
      tweetUrl: "",
    }
  }

  render() {
    return(
      <div>
        <RSCard>
          <CardImg src={this.props.tweetImg}></CardImg>
          <CardBody>
            <CardText>{this.props.tweet}</CardText>
            <Button href={this.props.tweetUrl}>Ir para tweet</Button>
          </CardBody>
        </RSCard>
      </div>
    )
  }
}

export default Card
