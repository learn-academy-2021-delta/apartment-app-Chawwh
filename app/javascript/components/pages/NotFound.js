import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class NotFound extends Component {
  render() {
    console.log(this.props.appts);
    return (
        <>
        <div className="body-container">
            <h1>Whooops!</h1>
            <h3>Looks like you might be lost! This page doesn't exist!</h3>
            <NavLink to="/">Back to Home</NavLink>
        </div>
        </>
    )
  }
}
export default NotFound