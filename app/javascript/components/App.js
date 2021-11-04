import React from "react"
import {
  BrowserRouter as  Router,
  Route,
  Routes
} from "react-router-dom"

class App extends React.Component {
render(){
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route
  } = this.props
    return (
      <>
      <h1>Hello World</h1>
      <Router>
  <Routes>
    <Route exact path="/" component={ Home } />
    <Route path="/about" component={ AboutUs } />
    <Route path="/learn" component={ LearnMore } />
  </Routes>
</Router>
      </>
    );
  }
}

export default App
