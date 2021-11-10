import React, { Component } from 'react'
import PropTypes from "prop-types"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApptIndex from './pages/ApptIndex'
import ApptShow from './pages/ApptShow'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as  Router,
  Route,
  Switch,
} from "react-router-dom"
import ProtApptNew from './pages/ProtApptNew'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: [],
     
    }
  }

  componentDidMount() {
    this.apptRead()
  }

  apptRead = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(apptArray => this.setState({apartments: apptArray}))
    .catch(errors => console.log(errors))
  }

  createAppt = (newAppt) => {
    fetch("/apartments", {
      body: JSON.stringify(newAppt),
      heaaders: {
        "Content-Type" : "application/json"
      },
      method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.apptRead())
    .catch(errors => (console.log(errors)))
  }
  
render(){

    return (
      <Router>
        <Header {...this.props} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/listings"  render={(props) => <ApptIndex appts={this.state.apartments}  /> } />
        <Route path="/showlisting/:id" 
        render={(props) => {
          let id = props.match.params.id
          let appt = this.state.apartments.find(a => a.id === +id)
          return <ApptShow appt={appt} />
        }} />
        <Route path="/addlisting" render={(props) => <ProtApptNew createAppt={this.createAppt} {...this.props} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
    );
  }
}

export default App
