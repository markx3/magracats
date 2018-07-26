import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from './views/home'
import About from './views/about'

import { Nav as RSNav, 
		Navbar, 
		NavItem, 
		NavLink, 
		NavbarBrand } from 'reactstrap'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    return(
      <Router>
        <div>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">Magracats</NavbarBrand>
            <RSNav className="ml-auto" navbar>
              <NavItem>
                <NavLink> 
                  <Link to="/views/home">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/views/about">Sobre</Link>
                </NavLink>
              </NavItem>
            </RSNav>
          </Navbar>
          <Route path="/views/home" component={Home}/>
          <Route path="/views/about" component={About}/>
        </div>
      </Router>
    )
  }
}

export default App;
