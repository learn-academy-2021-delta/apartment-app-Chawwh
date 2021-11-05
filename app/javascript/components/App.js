import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import LearnMore from "./pages/LearnMore"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {
  BrowserRouter as  Router,
  Route,
  Routes,
  
} from "react-router-dom"

class App extends Component {
render(){
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = this.props
    return (
      <Router>
        <Header />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutUs /> } />
        <Route path="/learn" element={ <LearnMore /> } />
      </Routes>
      <Footer />
    </Router>
    );
  }
}

export default App
