import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/Users/sahtra/Desktop/Projects/apartment_app/app/javascript/components/assets/housu-icon-black.png'

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">
       <img id="logo" src={logo} alt="housu logo"></img>
       </NavLink>
      </header>
    )
  }
}
export default Header 