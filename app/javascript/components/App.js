import React, { Component } from 'react'
// import PropTypes from "prop-types"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {
  BrowserRouter as  Router,
  Route,
  Routes,
  
} from "react-router-dom"

class App extends Component {
  
render(){
    return (
      <Router>
        <Header {...this.props} />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <AboutMe /> } />
      </Routes>
      <Footer />
    </Router>
    );
  }
}

export default App
