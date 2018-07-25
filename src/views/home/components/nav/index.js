import React, { Component } from 'react'
import { Nav as RSNav, Navbar, NavItem, NavLink, NavbarBrand, NavbarToggler } from 'reactstrap'

class Nav extends Component {
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
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Magracats</NavbarBrand>
          <RSNav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/battle">Batalha de gatos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">Sobre</NavLink>
            </NavItem>
          </RSNav>
        </Navbar>
      </div>
    )
  }
}

export default Nav
