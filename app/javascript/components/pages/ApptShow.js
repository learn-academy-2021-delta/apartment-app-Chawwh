import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ApptShow extends Component {
  render() {
    console.log(this.props.appts);
    return (
        <>
        <div className="body-container">
         <h1>Test for show page</h1>
        </div>
        </>
    )
  }
}
export default ApptShow