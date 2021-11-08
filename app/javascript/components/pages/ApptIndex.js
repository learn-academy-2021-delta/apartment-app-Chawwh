import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ApptIndex extends Component {
  render() {
    console.log(this.props.appts);
    return (
        <>
        <div className="body-container">
           <div className="index-body">
             <h3>All Listings</h3>
            {this.props.appts && this.props.appts.map(appt => {
            return ( 
                <p key={appt.id}>
                  <NavLink to={`/showlisting/${appt.id}`}>
                    {appt.street}
                  </NavLink>
                </p>
             )
            })}
          </div>
        </div>
        </>
    )
  }
}
export default ApptIndex