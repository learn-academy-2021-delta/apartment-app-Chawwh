import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


class ApptShow extends Component {
  render() {
    const appt = this.props
    console.log(appt)
    return (
        <>
        <div className="body-container">
         <h3>Test for show page</h3>
         { this.props.appt && 
         <>
         <p key={appt.id}>{appt.street}</p>
         <p key={appt.id}>{appt.city}</p>
         <p key={appt.id}>{appt.state}</p>
         <p key={appt.id}>{appt.manager}</p>
         <p key={appt.id}>{appt.email}</p>
         <p key={appt.id}>{appt.price}</p>
         <p key={appt.id}>{appt.bedrooms}</p>
         <p key={appt.id}>{appt.bathrooms}</p>
         <p key={appt.id}>{appt.pets}</p>
         <p key={appt.id}>{appt.photo_url}</p>
         </>
          }
        </div>
        </>
    )
  }
}
export default ApptShow