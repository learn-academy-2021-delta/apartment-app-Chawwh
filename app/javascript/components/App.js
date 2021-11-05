import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ApptIndex from './pages/ApptIndex'
import apartments from "./mockApartments"
import {
  BrowserRouter as  Router,
  Route,
  Routes,
  
} from "react-router-dom"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: apartments
    }
  }
  
render(){
  console.log(this.state.apartments);
    return (
      <Router>
        <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutMe /> } />
          <Route path="/listings"  element={<ApptIndex appts={this.state.apartments} /> } />
      </Routes>
      <Footer />
    </Router>
    );
  }
}

export default App
