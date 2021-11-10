import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg, CardGroup } from "reactstrap"

class ApptShow extends Component {

  render() {
    const appt = this.props
    console.log(appt);
    return (
        <>
        <div className="body-container">
         <h3>Test for show page</h3>
        { appt &&
          <Card
          body
          color="light"
        >
          <CardImg
                alt="photo of apartment listing"
                src="https://momsgotthestuff.com/wp-content/uploads/2021/06/easy-minecraft-builds-12.jpg"
                top
                width="100%"
              />
          <CardBody>
            <CardTitle tag="h5">
              {appt.street}
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              {appt.city} , {appt.state}
            </CardSubtitle>
            <CardText>
             Price: {appt.price} 
            <br />
             Bedrooms: {appt.bedrooms} 
             <br />
             Bathrooms: {appt.bathrooms} 
            <br />
             Pet Policy: {appt.pets} 
             </CardText>
             <CardText>
             Contact {appt.manager} at {appt.email} for more info
            </CardText>
          </CardBody>
        </Card>
        }
        </div>
        </>
    )
  }
}
export default ApptShow