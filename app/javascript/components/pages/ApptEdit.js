import React, { Component } from 'react'
import { Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApptEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updateApartment: {
                street:"",
                city: "",
                state:"",
                manager:"",
                email:"",
                price:"",
                bedrooms: 0,
                bathrooms: 0.0,
                pets:"",
                photo_url:""
            }
        }
    }


    handleChange = (e) => {
        let { updateAppt } = this.state
        updateAppt[e.target.name] = e.target.value
        this.setState({form: updateAppt})
      }
    
      handleSubmit = () => {
        this.props.updateAppt(this.state.updateApartment)
        this.setState({submitted: true})
      }

      render(){
          return (
              <h3>This is the edit page!</h3>
          )
      }
}
export default ApptEdit