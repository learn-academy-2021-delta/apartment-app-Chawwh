import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/Users/sahtra/Desktop/Projects/apartment_app/app/javascript/components/assets/housu-icon-black.png'

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <header>
        <NavLink to="/">
       <img id="logo" src={logo} alt="housu logo"></img>
       </NavLink>
       <div className="nav-links">
         <ul>
           <NavLink to="/listings">All Listings</NavLink>
         </ul>
         
          {!logged_in &&
          <>
            <a href={new_user_route}>Sign Up</a>
           <a href={sign_in_route}>Sign In</a>
           </>
           }
   
          { logged_in &&
           <a href={sign_out_route}>Sign Out</a>
          }
       </div>
      </header>
    )
  }
}
export default Header 