import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Form, FormGroup, Button, Input, Label, FormText } from "reactstrap"

class ProtApptNew extends Component{
    constructor(props) {
        super(props)
        this.state = {
            form: {
                street:"",
                city: "",
                state:"",
                manager:"",
                email:"",
                price: "",
                bedrooms: "",
                bathrooms: "",
                pets:"",
                photo_url: "",
                user_id: this.props.current_user.id
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
      }

      handleSubmit = () => {
        this.props.createAppt(this.state.form)
        this.setState({submitted: true})
      }

render(){
    return(
        <>
        <div className="body-container">
        <>
         <h3>Create Your Apartment Listing Here</h3>
        <Form className="form">
            <FormGroup>
 
            <Input
                 className="form-id"
                name="street"
                 placeholder="Street of Address Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.street}
             />
            </FormGroup>
            <FormGroup>
 
            <Input
              className="form-id"
                name="city"
                 placeholder="City of Address Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.city}
             />
            </FormGroup>
            <FormGroup>

            <Input
               className="form-id"
                name="state"
                 placeholder="State of Address Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.state}
             />
            </FormGroup>
            <FormGroup>
   
            <Input
               className="form-id"
                name="manager"
                 placeholder="Name of Manager Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.manager}
             />
            </FormGroup>
            <FormGroup>

            <Input
                className="form-id"
                name="email"
                 placeholder="Manager's Email Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.email}
             />
            </FormGroup>
            <FormGroup>
    
            <Input
                className="form-id"
                name="price"
                 placeholder="Price of Listing Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.price}
             />
            </FormGroup>
            <FormGroup>

            <Input
                className="form-id"
                name="bedrooms"
                 placeholder="Number of Bedrooms Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.bedrooms}
             />
            </FormGroup>
            <FormGroup>
            <Input
                className="form-id"
                name="bathrooms"
                 placeholder="Number of Bathrooms Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.bathrooms}
             />
            </FormGroup>
            <FormGroup>
            <Input
                 className="form-id"
                name="pets"
                 placeholder="Pet Policy Here"
                 type="text"
                 onChange={this.handleChange}
                 value={this.state.form.pets}
             />
            </FormGroup>
            <FormGroup>
        
           <Input
           className="form-id"
             name="photo_url"
             type="url"
             placeholder="URL of picture Here"
              onChange={this.handleChange}
             value={this.state.form.photo_url} 
             />
          </FormGroup>
            <Button 
            name="submit"
            onClick={this.handleSubmit}
                id="form-button" >
            Submit
            </Button>
        </Form>
        {this.state.submitted && <Redirect to="/listings" />}
        </>
        
        </div>
        </>
    )
}
}
export default ProtApptNew