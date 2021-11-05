import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Footer extends Component{
  render(){
    return(
      <footer>
        <Nav className="nav-links">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About Me</NavLink>
        </NavItem>
      </Nav>
      </footer>
    )
  }
}
export default Footer
