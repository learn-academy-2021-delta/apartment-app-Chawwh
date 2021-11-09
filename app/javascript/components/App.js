import React, { Component } from 'react'
import PropTypes from "prop-types"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApptIndex from './pages/ApptIndex'
import ApptShow from './pages/ApptShow'
import NotFound from './pages/NotFound'
import { withRouter } from "react-router";
import {
  BrowserRouter as  Router,
  Route,
  Routes,
  
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
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
  
render(){
  const { apartments } = this.state
    return (
      <Router>
        <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutMe /> } />
        <Route path="/listings"  element={<ApptIndex appts={apartments} /> } />
        <Route path="/showlisting/:id" element={<ApptShow appts={apartments}  />} />
        <Route element={ <NotFound /> } />
      </Routes>
      <Footer />
    </Router>
    );
  }
}

export default App
