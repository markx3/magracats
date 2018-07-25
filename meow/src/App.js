import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/home'
import TwitterClient from './utils/twitter-client'

class App extends Component {

  constructor() {
    super()
    this.location = [[[-49.0126351918, -26.4449668264], [-48.6892145804, -26.4449668264], [-48.6892145804, -26.1295210113], [-49.0126351918, -26.1295210113], [-49.0126351918, -26.4449668264]]]
  }

  componentDidMount() {
    this.twitterClient = new TwitterClient(['gato', 'adoção', 'gatos'], 'images', this.location)
    this.twitterStream = this.twitterClient.createStream()
    debugger
  }

  render() {
    return (
      <Home/>
    ); 
  }
}

export default App;
