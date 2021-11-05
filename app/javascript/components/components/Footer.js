import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from "reactstrap"

class Footer extends Component{
  render(){
    return(
        <Nav className="nav-links">
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/about">About Us</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/learn">Learn More</NavLink>
        </NavItem>
      </Nav>
    )
  }
}
export default Footer
