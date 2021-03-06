import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText, CardSubtitle, CardImg} from "reactstrap"


class ApptIndex extends Component {

  render() {

    return (
        <>
        <div className="body-container">
        <h3>All Listings</h3>
           <div className="index-body">
            {this.props.appts && this.props.appts.map(appt => {
            return (
              <>
              <div className="card-div">
                  <NavLink to={`/showlisting/${appt.id}`}>
                <Card
                  body
                  color="light"
                  className="index-card"
                  key={appt.id}
                >
                  <CardImg id="index-img"
                        alt="photo of apartment listing"
                        src={appt.photo_url}
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
                </NavLink>
                </div>
                </>
             )
            })}
            
          </div>
        </div>
        </>
    )
  }
}
export default ApptIndex